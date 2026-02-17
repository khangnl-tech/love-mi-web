const loveStart = new Date("2026-02-06T00:00:00");
const loveDaysEl = document.getElementById("love-days");

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

updateLoveDays();
setInterval(updateLoveDays, 1000 * 60 * 10);
setupReveal();
setInterval(createHeart, 650);
