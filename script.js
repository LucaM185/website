// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.18, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Hover tilt for media frames (3D parallax)
document.querySelectorAll('.media-frame').forEach((frame) => {
  frame.addEventListener('mousemove', (e) => {
    const r = frame.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    frame.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-6px)`;
  });
  frame.addEventListener('mouseleave', () => {
    frame.style.transform = '';
  });
});

// Subtle parallax on hero glows
const glows = document.querySelectorAll('.bg-glow');
let ticking = false;
window.addEventListener('mousemove', (e) => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glows.forEach((g, i) => {
        const factor = (i + 1) * 0.5;
        g.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// Add subtle shadow to nav once scrolled
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}, { passive: true });
