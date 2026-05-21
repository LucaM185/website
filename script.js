// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- i18n ---------- */
const i18n = {
  en: {
    nav_realtime: 'Real-Time Data', nav_ai: 'AI', nav_feather: 'Feather', nav_embedded: 'Embedded',
    hero_status: 'Expanding my network',
    hero_subtitle: 'Building <em>real-time systems</em>, <em>AI from scratch</em>, and <em>image processing</em> tools that turn hours into seconds.',
    hero_cta_primary: 'See my work', hero_cta_ghost: 'Github',
    s1_tag: '01 — Real-Time Data',
    s1_title: 'Millions of UDP datapoints, processed in real time.',
    s1_desc: 'Extraction of real-time information from <strong>UDP streams of millions of datapoints per hour</strong>. The result: a management dashboard that responds in <strong>seconds instead of hours</strong>.',
    s1_b1: 'High-throughput UDP ingestion pipeline',
    s1_b2: 'Sub-second analytical queries',
    s1_b3: 'From batch ETL nightmares to live insight',
    s1_placeholder: 'Early Dev Picture',
    s2_tag: '02 — Extensive AI Knowledge',
    s2_title: 'Transformers, implemented from scratch.',
    s2_desc: 'Deep understanding of modern AI internals — not just calling APIs. See <a href="https://github.com/LucaM185/GPTs-from-scratch" target="_blank" rel="noopener" class="inline-link">GPTs-from-scratch ↗</a>.',
    s2_chip1: 'Attention', s2_chip2: 'MoE layers', s2_chip3: 'KV cache', s2_chip4: 'From scratch',
    s2_note: 'Inference deployed on <strong>NVIDIA DGX (128&nbsp;GB)</strong>.',
    s2_placeholder: 'MathStudio Video',
    s3_tag: '03 — Feather',
    s3_title: '<span class="serif italic">Feather</span> — a Lightroom / Photoshop competitor.',
    s3_desc: 'Optimization of image-processing algorithms in <strong>real time</strong>, with a focus on <strong>UI/UX</strong> and <strong>AI accelerated on Metal</strong>.',
    s3_b1: 'Real-time GPU image pipeline',
    s3_b2: 'Native Metal AI acceleration',
    s3_b3: 'Crafted UI/UX, designed for creators',
    s3_placeholder: 'Feather App',
    s4_tag: '04 — Embedded · AHRS',
    s4_title: 'High-frequency IMU, rock-stable orientation.',
    s4_desc: 'Real-time high-frequency <strong>IMU readout</strong> for <strong>stable AHRS estimation over time</strong>. Full stack: <strong>CAD, 3D print, embedded firmware</strong>.',
    s4_chip1: 'CAD', s4_chip2: '3D Print', s4_chip3: 'Embedded C++', s4_chip4: 'Sensor Fusion',
    s4_placeholder: 'Embedded Device',
    footer_tagline: 'Building things that are fast, precise and reliable.<br>UI/UX is also a focus',
    footer_link: 'Github ↗'
  },
  it: {
    nav_realtime: 'Dati Real-Time', nav_ai: 'AI', nav_feather: 'Feather', nav_embedded: 'Embedded',
    hero_status: 'In espansione della rete',
    hero_subtitle: 'Costruisco <em>sistemi real-time</em>, <em>AI da zero</em> e strumenti di <em>image processing</em> che trasformano ore in secondi.',
    hero_cta_primary: 'Vedi il mio lavoro', hero_cta_ghost: 'Github',
    s1_tag: '01 — Dati Real-Time',
    s1_title: 'Milioni di datapoint UDP, elaborati in tempo reale.',
    s1_desc: 'Estrazione di informazioni real-time da <strong>flussi UDP di milioni di datapoint all\'ora</strong>. Il risultato: una dashboard di gestione che risponde in <strong>secondi invece di ore</strong>.',
    s1_b1: 'Pipeline di ingestion UDP ad alto throughput',
    s1_b2: 'Query analitiche sub-secondo',
    s1_b3: 'Da incubi ETL batch a insight live',
    s1_placeholder: 'Foto Fase Iniziale',
    s2_tag: '02 — Conoscenza AI Approfondita',
    s2_title: 'Transformers, implementati da zero.',
    s2_desc: 'Comprensione approfondita delle dinamiche interne dell\'AI moderna — non solo chiamate API. Vedi <a href="https://github.com/LucaM185/GPTs-from-scratch" target="_blank" rel="noopener" class="inline-link">GPTs-from-scratch ↗</a>.',
    s2_chip1: 'Attention', s2_chip2: 'Layer MoE', s2_chip3: 'Cache KV', s2_chip4: 'Da zero',
    s2_note: 'Inferenza deployata su <strong>NVIDIA DGX (128&nbsp;GB)</strong>.',
    s2_placeholder: 'Video MathStudio',
    s3_tag: '03 — Feather',
    s3_title: '<span class="serif italic">Feather</span> — un concorrente di Lightroom / Photoshop.',
    s3_desc: 'Ottimizzazione di algoritmi di image processing in <strong>tempo reale</strong>, con focus su <strong>UI/UX</strong> e <strong>AI accelerata su Metal</strong>.',
    s3_b1: 'Pipeline GPU image processing real-time',
    s3_b2: 'Accelerazione AI Metal nativa',
    s3_b3: 'UI/UX curata, pensata per i creator',
    s3_placeholder: 'App Feather',
    s4_tag: '04 — Embedded · AHRS',
    s4_title: 'IMU ad alta frequenza, orientamento stabile.',
    s4_desc: 'Lettura IMU ad alta frequenza in <strong>tempo reale</strong> per <strong>stima AHRS stabile nel tempo</strong>. Full stack: <strong>CAD, stampa 3D, firmware embedded</strong>.',
    s4_chip1: 'CAD', s4_chip2: 'Stampa 3D', s4_chip3: 'C++ Embedded', s4_chip4: 'Sensor Fusion',
    s4_placeholder: 'Dispositivo Embedded',
    footer_tagline: 'Costruisco cose veloci, precise e affidabili.<br>UI/UX è anche un focus',
    footer_link: 'Github ↗'
  }
};

function setLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.setLang === lang);
  });
  try { localStorage.setItem('lang', lang); } catch (_) {}
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.setLang));
});

setLang(localStorage.getItem('lang') || 'it');

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

// Hover tilt for media frames (3D parallax) — desktop only
const isTouch = window.matchMedia('(hover: none)').matches;
if (!isTouch) {
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

  // Subtle parallax on hero glows — desktop only
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
}

// Add subtle shadow to nav once scrolled
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}, { passive: true });
