// Start: python3 -m http.server 8765 --bind 127.0.0.1
// Run: playwright-cli open http://127.0.0.1:8765
// Then: playwright-cli run-code --filename tests/timeline.browser.js
async page => {
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));

  for (const width of [1280, 390]) {
    const requested = [];
    const recordRequest = request => requested.push(request.url());
    page.on("request", recordRequest);
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("http://127.0.0.1:8765");
    const cards = page.locator(".timeline-item");
    assert(await cards.count() === 2, "Only the first batch should render initially");
    assert(!requested.some(url => /sa-pa-|vinh-hy-|phao-hoa-|ve-que-/.test(url)),
      "Older photos must not load before their timeline batch");

    const engagement = page.locator(".timeline-slideshow").first();
    assert(await cards.first().getAttribute("data-date") === "2026-10-28", "Marriage must be the newest moment");
    assert(await cards.first().locator(".milestone-label").textContent() === "Đăng ký kết hôn", "Marriage needs its own label");
    assert(await engagement.locator("img").count() === 3, "Marriage album must include all three photos");
    assert(await engagement.locator("img[src]").count() === 1,
      "Hidden album photos must not load initially");
    await engagement.getByRole("button", { name: "Ảnh tiếp theo", exact: true }).click();
    assert(await engagement.locator("img[src]").count() === 2, "Next photo should load on demand");
    assert(await engagement.getAttribute("data-active-index") === "1", "Next photo should be active");
    await engagement.getByRole("button", { name: "Ảnh trước", exact: true }).click();
    assert(await engagement.getAttribute("data-active-index") === "0", "Previous photo should work");
    assert(await cards.first().evaluate(card => card.classList.contains("is-celebrating")), "Celebration should trigger on scroll");
    assert(await cards.first().locator(".milestone-sparkles i").first().evaluate(sparkle =>
      getComputedStyle(sparkle).animationName) === "none", "Reduced motion must disable celebration animation");

    for (const expected of [4, 6, 8]) {
      await page.locator("#timeline-load-more").evaluate(button => button.scrollIntoView({ block: "end" }));
      await page.waitForFunction(count =>
        document.querySelectorAll(".timeline-item").length >= count, expected);
    }
    const dates = await cards.evaluateAll(items => items.map(item => item.dataset.date));
    assert(JSON.stringify(dates) === JSON.stringify([
      "2026-10-28", "2026-10-08", "2026-09-20", "2026-09-02", "2026-08-09",
      "2026-07-01", "2026-04-11", "2026-03-28"
    ]), "All new and old moments must be sorted newest first");
    assert(!await page.locator("#timeline-load-more").isVisible(), "Loading must stop at the end");
    assert(await page.locator(".timeline-photo").count() === 18, "All 18 photos should be available");

    for (const card of await cards.all()) {
      await card.scrollIntoViewIfNeeded();
      for (const dot of await card.locator(".timeline-dot").all()) {
        await dot.click();
      }
      await card.locator("img").evaluateAll(images => Promise.all(images.map(image => image.decode())));
    }
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      "Timeline must fit the viewport without horizontal overflow");
    await cards.first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: `output/playwright/timeline-${width}.png` });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    assert(await cards.first().locator(".milestone-sparkles i").first().evaluate(sparkle =>
      getComputedStyle(sparkle).animationName) === "milestone-sparkle", "Celebration animation must be enabled normally");
    page.off("request", recordRequest);
  }
  assert(errors.length === 0, `Browser errors: ${errors.join(", ")}`);
  console.log("PASS: desktop/mobile, milestone effects, reduced motion, incremental loading, 18 photos, descending dates.");
}
