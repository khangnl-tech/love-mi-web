const loveStart = new Date("2026-02-06T00:00:00");
const loveDaysEl = document.getElementById("love-days");
const timelineListEl = document.getElementById("timeline-list");

const timelineMoments = [
  {
    "type": "single",
    "sortDate": "2026-03-28",
    "date": "28/03/2026",
    "location": "Đền Chử Đồng Tử - Tiên Dung, Hưng Yên",
    "title": "Một buổi đi chơi ở Hưng Yên",
    "description": "Ghé đền Chử Đồng Tử - Tiên Dung, đi dạo và chụp một tấm ảnh chung.",
    "image": "img/chu-dong-tu-tien-dung-safe.jpg",
    "alt": "Khang và Mi Sun tại đền Chử Đồng Tử - Tiên Dung",
    "quote": "Một tấm ảnh sau buổi đi dạo."
  },
  {
    "type": "slideshow",
    "sortDate": "2026-04-11",
    "date": "09–11/04/2026",
    "location": "Vĩnh Hy, Ninh Thuận",
    "title": "Ba ngày ở Vĩnh Hy",
    "description": "Đi biển, ghé vườn nho và dừng chân ở vài chỗ dọc đường. Một chuyến đi có khá nhiều ảnh để xem lại.",
    "slides": [
      {
        "image": "img/vinh-hy-1-safe.jpg",
        "alt": "Khang và Mi Sun trong chuyến đi Vĩnh Hy, ảnh 1",
        "caption": "Ghé vườn nho trong chuyến đi."
      },
      {
        "image": "img/vinh-hy-2-safe.jpg",
        "alt": "Khang và Mi Sun trong chuyến đi Vĩnh Hy, ảnh 2",
        "caption": "Dừng chân bên suối đá."
      },
      {
        "image": "img/vinh-hy-3-safe.jpg",
        "alt": "Khang và Mi Sun trong chuyến đi Vĩnh Hy, ảnh 3",
        "caption": "Thêm một tấm ở vườn nho."
      },
      {
        "image": "img/vinh-hy-4-safe.jpg",
        "alt": "Khang và Mi Sun trong chuyến đi Vĩnh Hy, ảnh 4",
        "caption": "Buổi chiều ở gần biển."
      },
      {
        "image": "img/vinh-hy-5-safe.jpg",
        "alt": "Khang và Mi Sun trong chuyến đi Vĩnh Hy, ảnh 5",
        "caption": "Nghỉ chân giữa đường, phía sau là đồi núi."
      },
      {
        "image": "img/vinh-hy-6-safe.jpg",
        "alt": "Khang và Mi Sun trong chuyến đi Vĩnh Hy, ảnh 6",
        "caption": "Nhìn xuống vịnh trước khi kết thúc chuyến đi."
      }
    ]
  },
  {
    "type": "single",
    "sortDate": "2026-07-01",
    "date": "Tháng 07/2026",
    "location": "Về quê",
    "title": "Một lần về quê",
    "description": "Không nhớ chính xác hôm nào, chỉ còn tấm ảnh chụp trên xe lúc hai đứa về quê.",
    "image": "img/ve-que-2026-07.jpg",
    "alt": "Khang lái xe, Mi Sun chụp ảnh trên đường về quê",
    "quote": "Một tấm chụp trên đường về."
  },
  {
    "type": "slideshow",
    "sortDate": "2026-08-09",
    "date": "07–09/08/2026",
    "location": "Sa Pa, Lào Cai",
    "title": "Cuối tuần đi Sa Pa",
    "description": "Lên đường từ tối thứ Sáu, dành cuối tuần đi chơi ở Sa Pa. Có núi, có mây và vài tấm ảnh chụp vội.",
    "slides": [
      {
        "image": "img/sa-pa-2026-08-07.jpg",
        "alt": "Khang ngồi trên xe trong buổi tối lên đường đi Sa Pa",
        "caption": "07/08 · Lên đường từ tối thứ Sáu."
      },
      {
        "image": "img/sa-pa-2026-08-08.jpg",
        "alt": "Khang và Mi Sun chụp ảnh với núi và mây ở Sa Pa",
        "caption": "08/08 · Chụp một tấm với núi và mây phía sau."
      },
      {
        "image": "img/sa-pa-2026-08-09.jpg",
        "alt": "Khang và Mi Sun vui đùa trong chuyến đi Sa Pa",
        "caption": "09/08 · Thêm một tấm trước khi về."
      }
    ]
  },
  {
    "type": "single",
    "sortDate": "2026-09-02",
    "date": "02/09/2026",
    "location": "Hà Nội",
    "title": "Tối Quốc khánh xem pháo hoa",
    "description": "Ở Hà Nội dịp 2/9, cùng xem pháo hoa và chụp lại một góc thành phố buổi tối.",
    "image": "img/phao-hoa-2026-09-02.jpg",
    "alt": "Pháo hoa trên bầu trời Hà Nội tối Quốc khánh 2/9",
    "quote": "Pháo hoa tối 2/9."
  },
  {
    "type": "slideshow",
    "sortDate": "2026-09-20",
    "date": "20/09/2026",
    "location": "Tại nhà",
    "title": "Ngày dạm ngõ",
    "description": "Hai gia đình gặp nhau trong buổi dạm ngõ. Chụp một tấm trước cửa nhà để lưu lại ngày này.",
    "slides": [
      {
        "image": "img/dam-ngo-2026-09-20-1.jpg",
        "alt": "Khang và Mi Sun đứng trước nhà trong ngày dạm ngõ",
        "caption": "Một tấm ảnh chung trong ngày dạm ngõ."
      },
      {
        "image": "img/dam-ngo-2026-09-20-2.jpg",
        "alt": "Phông lễ dạm ngõ ghi ngày 20/09/2026",
        "caption": "Góc trang trí cho buổi gặp mặt hai gia đình."
      }
    ]
  },
  {
    "type": "single",
    "sortDate": "2026-10-08",
    "date": "08/10/2026",
    "location": "Hà Nội",
    "title": "Đi thử váy cưới",
    "description": "Cùng đi thử váy cưới, xem từng kiểu và chụp lại để dễ chọn hơn.",
    "image": "img/thu-vay-cuoi-2026-10-08.jpg",
    "alt": "Mi Sun thử váy cưới trắng trước gương tại cửa hàng",
    "quote": "Một mẫu váy trong buổi thử đồ."
  }
].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

function updateLoveDays() {
  const now = new Date();
  const diff = now.getTime() - loveStart.getTime();
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  loveDaysEl.textContent = `${days} ngày`;
}

function createHeart() {
  const layer = document.querySelector(".hearts");
  const heart = document.createElement("span");
  heart.className = "heart";

  const left = Math.random() * 100;
  const duration = 7 + Math.random() * 6;
  const delay = Math.random() * 1.5;
  const size = 10 + Math.random() * 14;

  heart.style.left = `${left}vw`;
  heart.style.bottom = "-20px";
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;

  layer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, (duration + delay) * 1000);
}

function setupReveal() {
  const sections = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => observer.observe(section));
}

function createMetaPill(text) {
  const pill = document.createElement("span");
  pill.className = "timeline-pill";
  pill.textContent = text;
  return pill;
}

function createImageMeta(moment) {
  const meta = document.createElement("div");
  meta.className = "timeline-image-meta";
  meta.append(createMetaPill(moment.date), createMetaPill(moment.location));

  if (moment.badge) {
    meta.append(createMetaPill(moment.badge));
  }

  return meta;
}

function createSingleImage(moment) {
  const visual = document.createElement("div");
  visual.className = "timeline-visual";

  const image = document.createElement("img");
  image.className = "timeline-photo";
  image.loading = "lazy";
  image.decoding = "async";
  image.src = moment.image;
  image.alt = moment.alt;

  const overlay = document.createElement("div");
  overlay.className = "timeline-overlay";

  const quote = document.createElement("p");
  quote.className = "timeline-overlay-text";
  quote.textContent = moment.quote;

  overlay.appendChild(quote);
  visual.append(image, createImageMeta(moment), overlay);

  return visual;
}

function createSlideshow(moment, index) {
  const visual = document.createElement("div");
  visual.className = "timeline-visual timeline-slideshow";
  visual.dataset.slideshow = String(index);

  const viewport = document.createElement("div");
  viewport.className = "timeline-slides";

  const overlay = document.createElement("div");
  overlay.className = "timeline-overlay";

  const caption = document.createElement("p");
  caption.className = "timeline-overlay-text";

  const dots = document.createElement("div");
  dots.className = "timeline-dots";

  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "timeline-nav prev";
  prev.setAttribute("aria-label", "Ảnh trước");
  prev.textContent = "‹";

  const next = document.createElement("button");
  next.type = "button";
  next.className = "timeline-nav next";
  next.setAttribute("aria-label", "Ảnh tiếp theo");
  next.textContent = "›";

  const slides = moment.slides.map((slide, slideIndex) => {
    const img = document.createElement("img");
    img.className = "timeline-photo";
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = slide.alt;
    img.dataset.active = slideIndex === 0 ? "true" : "false";
    viewport.appendChild(img);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "timeline-dot";
    dot.setAttribute("aria-label", `Xem ảnh ${slideIndex + 1}`);
    dot.dataset.index = String(slideIndex);
    dots.appendChild(dot);

    return { img, dot, slide };
  });

  function setActiveSlide(nextIndex) {
    slides.forEach(({ img, dot, slide }, slideIndex) => {
      const isActive = slideIndex === nextIndex;
      img.dataset.active = String(isActive);
      dot.dataset.active = String(isActive);
      dot.setAttribute("aria-pressed", String(isActive));
      if (isActive) {
        if (!img.hasAttribute("src")) {
          img.src = slide.image;
        }
        caption.textContent = slide.caption;
      }
    });
    visual.dataset.activeIndex = String(nextIndex);
  }

  function currentIndex() {
    return Number(visual.dataset.activeIndex || 0);
  }

  function moveSlide(direction) {
    const nextIndex = (currentIndex() + direction + slides.length) % slides.length;
    setActiveSlide(nextIndex);
  }

  let autoplayId = null;
  let isVisible = false;

  function startAutoplay() {
    stopAutoplay();
    if (!isVisible || visual.matches(":hover, :focus-within") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    autoplayId = window.setInterval(() => {
      moveSlide(1);
    }, 4200);
  }

  function stopAutoplay() {
    if (autoplayId) {
      window.clearInterval(autoplayId);
      autoplayId = null;
    }
  }

  prev.addEventListener("click", () => {
    moveSlide(-1);
    startAutoplay();
  });

  next.addEventListener("click", () => {
    moveSlide(1);
    startAutoplay();
  });

  dots.addEventListener("click", event => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) || !target.dataset.index) {
      return;
    }
    setActiveSlide(Number(target.dataset.index));
    startAutoplay();
  });

  visual.addEventListener("mouseenter", stopAutoplay);
  visual.addEventListener("mouseleave", startAutoplay);
  visual.addEventListener("focusin", stopAutoplay);
  visual.addEventListener("focusout", startAutoplay);

  overlay.appendChild(caption);
  visual.append(viewport, createImageMeta(moment), overlay, prev, next, dots);

  setActiveSlide(0);
  const visibilityObserver = new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
    if (isVisible) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  }, { threshold: 0.15 });
  visibilityObserver.observe(visual);

  return visual;
}

function renderTimeline() {
  const loadMore = document.getElementById("timeline-load-more");
  const status = document.getElementById("timeline-status");
  const batchSize = 2;
  let renderedCount = 0;

  function appendMoments() {
    const nextMoments = timelineMoments.slice(renderedCount, renderedCount + batchSize);
    nextMoments.forEach((moment, index) => {
      const card = document.createElement("article");
      card.className = `timeline-item ${moment.type === "slideshow" ? "featured" : ""}`;

      const content = document.createElement("div");
      content.className = "timeline-content";

      const date = document.createElement("p");
      date.className = "timeline-date";
      date.textContent = moment.date;

      const location = document.createElement("p");
      location.className = "timeline-place";
      location.textContent = moment.location;

      const title = document.createElement("h3");
      title.textContent = moment.title;

      const description = document.createElement("p");
      description.textContent = moment.description;

      content.append(date, location, title, description);
      card.dataset.date = moment.sortDate;
      card.append(moment.type === "slideshow" ? createSlideshow(moment, renderedCount + index) : createSingleImage(moment), content);
      timelineListEl.appendChild(card);
    });
    renderedCount += nextMoments.length;
    const hasMore = renderedCount < timelineMoments.length;
    loadMore.hidden = !hasMore;
    status.textContent = hasMore
      ? `Đã hiển thị ${renderedCount}/${timelineMoments.length} cột mốc. Cuộn xuống để xem tiếp.`
      : "Đã xem hết các cột mốc hiện tại.";
    if (!hasMore) {
      observer.disconnect();
    }
  }

  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      appendMoments();
    }
  }, { rootMargin: "0px 0px 240px 0px" });

  loadMore.addEventListener("click", appendMoments);
  appendMoments();
  if (!loadMore.hidden) {
    observer.observe(loadMore);
  }
}

renderTimeline();
updateLoveDays();
setInterval(updateLoveDays, 1000 * 60 * 10);
setupReveal();
setInterval(createHeart, 650);
