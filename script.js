const loveStart = new Date("2026-02-06T00:00:00");
const loveDaysEl = document.getElementById("love-days");
const timelineListEl = document.getElementById("timeline-list");

const timelineMoments = [
  {
    type: "single",
    date: "28/03/2026",
    location: "Đền Chử Đồng Tử - Tiên Dung, Hưng Yên",
    title: "Buổi hẹn mang màu gỗ trầm và tiếng cười rất nhẹ",
    description:
      "Một góc ảnh vừa tinh nghịch vừa bình yên, như thể hai đứa đang cùng lưu lại một buổi chiều chậm hơn thường ngày.",
    image: "img/chu-dong-tu-tien-dung-safe.jpg",
    alt: "Khang và Mi Sun chụp ảnh cùng nhau tại Đền Chử Đồng Tử - Tiên Dung",
    badge: "Temple date",
    quote: "Nơi cổ kính làm khung nền cho một ngày thật trẻ."
  },
  {
    type: "slideshow",
    date: "09/04 - 11/04/2026",
    location: "Vĩnh Hy, Ninh Thuận",
    title: "Một chuyến đi, nhiều lát cắt của cùng một miền nhớ",
    description:
      "Lần đầu cùng nhau đến Vĩnh Hy, nắng gió, biển xanh và những khoảnh khắc yêu thương thật dịu dàng.",
    badge: "Trip diary",
    slides: [
      {
        image: "img/vinh-hy-1-safe.jpg",
        alt: "Khang và Mi Sun chụp cùng khung cảnh vịnh Vĩnh Hy",
        caption: "Bắt đầu chuyến đi bằng một vườn nho đầy nắng, vừa lạ vừa vui."
      },
      {
        image: "img/vinh-hy-2-safe.jpg",
        alt: "Khoảnh khắc tại Vĩnh Hy của Khang và Mi Sun",
        caption: "Một góc suối đá yên yên, nơi hai đứa chỉ cần ngồi cạnh nhau là đủ."
      },
      {
        image: "img/vinh-hy-3-safe.jpg",
        alt: "Khang và Mi Sun lưu lại ảnh kỷ niệm ở Vĩnh Hy",
        caption: "Giỏ nho đầy dần lên, còn album của tụi mình cũng đầy thêm từng chút."
      },
      {
        image: "img/vinh-hy-4-safe.jpg",
        alt: "Một góc kỷ niệm khác tại Vĩnh Hy của Khang và Mi Sun",
        caption: "Buổi chiều sát biển với gió nhẹ và ánh nắng làm da trời trong hơn."
      },
      {
        image: "img/vinh-hy-5-safe.jpg",
        alt: "Khang và Mi Sun tạo dáng tại Vĩnh Hy",
        caption: "Một khoảnh khắc nghỉ chân nhìn ra đồi núi, rất hợp để nhớ về thật lâu."
      },
      {
        image: "img/vinh-hy-6-safe.jpg",
        alt: "Khung cảnh tiếp theo trong chuyến đi Vĩnh Hy của Khang và Mi Sun",
        caption: "Tấm cuối nhìn xuống vịnh, như lời chốt lại cho một chuyến đi biển rất đẹp."
      }
    ]
  }
];

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
    img.src = slide.image;
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
      if (isActive) {
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

  function startAutoplay() {
    stopAutoplay();
    autoplayId = window.setInterval(() => {
      moveSlide(1);
    }, 4200);
  }

  function stopAutoplay() {
    if (autoplayId) {
      window.clearInterval(autoplayId);
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
  startAutoplay();

  return visual;
}

function renderTimeline() {
  timelineMoments.forEach((moment, index) => {
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
    card.append(moment.type === "slideshow" ? createSlideshow(moment, index) : createSingleImage(moment), content);
    timelineListEl.appendChild(card);
  });
}

renderTimeline();
updateLoveDays();
setInterval(updateLoveDays, 1000 * 60 * 10);
setupReveal();
setInterval(createHeart, 650);
