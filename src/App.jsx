import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from './lib/gsapConfig';
import { useLanguage } from './context/languageContext';
import Header from './components/Header';
import LeadModal from './components/LeadModal';
import LogoCarousel from './components/LogoCarousel';

gsap.registerPlugin(useGSAP);

const AdminLeads = lazy(() => import('./components/AdminLeads'));

const SYSTEM_ICONS = ['◉', '◇', '⌁', '⊹', '↗'];
const PROCESS_META = [
  { number: '01', code: 'CONTEXT', detail: 'Culture · Market · ICP' },
  { number: '02', code: 'DIRECTION', detail: 'Brand · Product · Channels' },
  { number: '03', code: 'OPERATION', detail: 'Process · Supply · Rhythm' },
  { number: '04', code: 'EVOLUTION', detail: 'Data · Consistency · Reach' },
];
const ECOSYSTEM_ITEMS = [
  { key: 'c1', label: 'BRAND STRATEGY' },
  { key: 'c3', label: 'MULTI-CHANNEL NETWORK' },
  { key: 'c4', label: 'KNOWLEDGE NETWORK' },
];

const NETWORK_LOCATIONS = [
  { key: 'doral', code: 'US', label: 'Doral / Miami', x: 27.7, y: 35.7, labelX: '-44px', labelY: '-35px' },
  { key: 'london', code: 'UK', label: 'London', x: 50, y: 21.4, labelX: '-35px', labelY: '-37px' },
  { key: 'dubai', code: 'AE', label: 'Dubai', x: 65.4, y: 36, labelX: '13px', labelY: '-31px' },
  { key: 'saopaulo', code: 'BR', label: 'São Paulo', x: 37.1, y: 63.1, labelX: '15px', labelY: '-27px' },
  { key: 'caxias', code: 'BR', label: 'Caxias do Sul', x: 35.8, y: 66.2, labelX: '14px', labelY: '15px' },
  { key: 'cde', code: 'PY', label: 'Ciudad del Este', x: 34.8, y: 64.2, labelX: '-118px', labelY: '-7px' },
];

function AdminRoute() {
  const [active, setActive] = useState(() => window.location.hash === '#admin');

  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash === '#admin');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return active ? <Suspense fallback={null}><AdminLeads /></Suspense> : null;
}

function AccentTitle({ children }) {
  const parts = String(children || '').split(/(\[[^\]]+\][.!?]?)/g);

  return parts.map((part, index) => {
    const accent = part.match(/^\[([^\]]+)\]([.!?]?)$/);
    return accent
      ? <em key={index}>{accent[1]}{accent[2]}</em>
      : <span key={index}>{part}</span>;
  });
}

const openLeadModal = (event) => {
  event?.preventDefault();
  window.dispatchEvent(new CustomEvent('open-lead-modal'));
};

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>;
}

function WorldNetworkMap({ label }) {
  return (
    <div className="network-map" role="img" aria-label={label}>
      <svg className="world-map-svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <pattern id="world-grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="currentColor" strokeWidth="0.7" />
          </pattern>
          <linearGradient id="world-land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c8ff2f" stopOpacity="0.2" />
            <stop offset="1" stopColor="#c8ff2f" stopOpacity="0.055" />
          </linearGradient>
          <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect className="world-map-grid" width="1000" height="500" fill="url(#world-grid)" />
        <g className="world-map-graticule">
          <path d="M0 250H1000M500 0V500" />
          <ellipse cx="500" cy="250" rx="480" ry="154" />
          <ellipse cx="500" cy="250" rx="480" ry="82" />
          <path d="M250 16C345 117 345 383 250 484M750 16C655 117 655 383 750 484" />
        </g>

        <g className="world-map-land" fill="url(#world-land)">
          <path d="M73 116l28-31 45-13 30-20 39 13 29 22 47 3 36 22 21 28-12 27-26 12-17 27-29 14-23 28-24-12-18-29-29-8-29-25-30-5-16-27z" />
          <path d="M239 208l20 8 17 18 20 10-5 15-19-5-16-17-17-12z" />
          <path d="M297 250l30-17 35 5 25 20 16 31-2 38-18 40-16 38-27 34-19 6-16-27-10-39-11-37 4-43z" />
          <path d="M247 43l39-13 25 18-9 32-28 14-35-18z" />
          <path d="M403 126l25-30 30-15 29 5 25-14 46 1 40-17 54 6 39-12 39 17 48-3 43 15 38-8 39 15 29 26-13 28-32 17-18 25-40 12-40-3-29 17-36 17-23 29-40 19-42-4-36 11-37-21-24-23-36-6-30-21-31 4-18-21 12-29z" />
          <path d="M460 217l31-29 43-5 35 22 18 31-1 42-19 42-23 47-34 22-30-25-18-42-17-43z" />
          <path d="M787 330l31-23 43 8 30 26 2 38-29 29-43 6-34-28-16-31z" />
          <path d="M897 195l12 10-8 25-11-6zM731 188l8 16-10 13-8-15zM469 111l8-10 8 14-9 16zM568 388l10 12-5 25-9-7z" />
        </g>

        <g className="world-map-routes" filter="url(#route-glow)">
          <path d="M371 316Q326 220 277 179" />
          <path d="M371 316Q421 142 500 107" />
          <path d="M500 107Q590 108 654 180" />
          <path d="M371 316Q520 205 654 180" />
          <path d="M371 316Q359 322 348 321" />
          <path d="M371 316Q365 328 358 331" />
        </g>
      </svg>

      <div className="network-points" aria-hidden="true">
        {NETWORK_LOCATIONS.map((location, index) => (
          <span
            className="network-point"
            key={location.key}
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              '--point-delay': `${index * 180}ms`,
              '--label-x': location.labelX,
              '--label-y': location.labelY,
            }}
          >
            <i /><b>{location.code}</b><em>{location.label}</em>
          </span>
        ))}
      </div>

      <div className="network-map-status" aria-hidden="true"><i /> LIVE NETWORK</div>
    </div>
  );
}

export default function App() {
  const pageRef = useRef(null);
  const heroVideoRef = useRef(null);
  const { language, t } = useLanguage();

  useGSAP(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const media = gsap.matchMedia();
    const revealItems = gsap.utils.toArray('[data-reveal]', root);

    media.add(
      {
        desktop: '(min-width: 900px)',
        mobile: '(max-width: 899px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions;

        if (reduceMotion) {
          gsap.set(revealItems, { clearProps: 'all' });
          gsap.set('.process-card', { autoAlpha: 1, clearProps: 'transform' });
          gsap.set('.float-cta', { autoAlpha: 1 });
          return;
        }

        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .from('.site-header', { y: -24, duration: 0.7 })
          .from('.hero-kicker', { y: 18, duration: 0.55 }, '-=0.3')
          .from('.hero-title > *', { yPercent: 22, stagger: 0.07, duration: 0.9 }, '-=0.2')
          .from('.hero-lead, .hero-actions, .hero-footnote', { y: 24, stagger: 0.1, duration: 0.65 }, '-=0.5')
          .from('.hero-visual', { x: 34, scale: 1.025, duration: 1.15 }, '-=1');

        gsap.to('.scroll-progress', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
        });

        gsap.to('.hero-video-media', {
          yPercent: desktop ? 8 : 4,
          scale: desktop ? 1.06 : 1.03,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });

        revealItems.forEach((element) => {
          gsap.from(element, {
            y: 44,
            autoAlpha: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'clamp(top 88%)',
              once: true,
            },
          });
        });

        const floatCta = root.querySelector('.float-cta');
        gsap.set(floatCta, { autoAlpha: 0, y: 18 });
        ScrollTrigger.create({
          trigger: '.hero-section',
          start: 'bottom 70%',
          onEnter: () => gsap.to(floatCta, { autoAlpha: 1, y: 0, duration: 0.35, overwrite: true }),
          onLeaveBack: () => gsap.to(floatCta, { autoAlpha: 0, y: 18, duration: 0.25, overwrite: true }),
        });

        const processCards = gsap.utils.toArray('.process-card', root);
        if (desktop) {
          gsap.set(processCards.slice(1), { autoAlpha: 0, y: 54, scale: 0.97 });
          gsap.set('.process-progress', { scaleY: 0, transformOrigin: 'top center' });

          const processTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: '.process-stage',
              start: 'top top',
              end: '+=2600',
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
            },
          });

          processTimeline.to('.process-progress', { scaleY: 1, duration: 3, ease: 'none' }, 0);

          processCards.slice(1).forEach((card, index) => {
            const position = index + 0.72;
            processTimeline
              .to(processCards[index], { autoAlpha: 0, y: -44, scale: 0.98, duration: 0.28 }, position)
              .to(card, { autoAlpha: 1, y: 0, scale: 1, duration: 0.38 }, position + 0.06);
          });
        } else {
          processCards.forEach((card) => {
            gsap.from(card, {
              y: 34,
              autoAlpha: 0,
              duration: 0.65,
              scrollTrigger: { trigger: card, start: 'top 90%', once: true },
            });
          });
        }

        root.querySelectorAll('[data-count]').forEach((element) => {
          const target = Number(element.dataset.count);
          const suffix = element.dataset.suffix || '';
          const counter = { value: 0 };

          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
            onUpdate: () => {
              element.textContent = `${Math.round(counter.value)}${suffix}`;
            },
          });
        });
      },
    );

    let mounted = true;
    document.fonts?.ready.then(() => {
      if (mounted) ScrollTrigger.refresh();
    });

    return () => {
      mounted = false;
      media.revert();
    };
  }, { scope: pageRef, dependencies: [language], revertOnUpdate: true });

  useEffect(() => {
    const video = heroVideoRef.current;
    const desktopMedia = window.matchMedia('(min-width: 900px)');
    if (!video || !desktopMedia.matches) return undefined;

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (connection?.saveData || reduceMotion) return undefined;

    const loadVideo = () => {
      if (video.src) return;
      video.src = video.dataset.src;
      video.load();
      video.play().catch(() => {});
    };

    const idleId = 'requestIdleCallback' in window
      ? window.requestIdleCallback(loadVideo, { timeout: 1800 })
      : window.setTimeout(loadVideo, 1000);

    let isInViewport = false;

    const observer = new IntersectionObserver(([entry]) => {
      isInViewport = entry.isIntersecting;
      if (!video.src) return;
      if (isInViewport && !document.hidden) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.08 });

    observer.observe(video);

    const onVisibilityChange = () => {
      if (document.hidden || !isInViewport) video.pause();
      else if (video.src) video.play().catch(() => {});
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
      else clearTimeout(idleId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      video.pause();
    };
  }, []);

  const systems = Array.from({ length: 5 }, (_, index) => ({
    icon: SYSTEM_ICONS[index],
    title: t(`systems.s${index + 1}.title`),
    desc: t(`systems.s${index + 1}.desc`),
  }));

  return (
    <div ref={pageRef} className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <Header />
      <LeadModal />
      <AdminRoute />

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker"><span /> {t('hero.sub')} / CULTURE · DATA · DESIGN</p>
            <h1 className="hero-title"><AccentTitle>{t('hero.title')}</AccentTitle></h1>
            <p className="hero-lead">{t('hero.lead')}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact" onClick={openLeadModal}>
                {t('hero.talkBtn')} <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#timeline">{t('hero.methodBtn')}</a>
            </div>
            <p className="hero-footnote"><span>GOON</span> — ESTRATÉGIA / EXECUÇÃO / RESULTADOS</p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-video-media">
              <video
                ref={heroVideoRef}
                data-src="/videos/hero-planet.mp4"
                poster="/videos/hero-planet-poster.webp"
                loop
                muted
                playsInline
                preload="none"
              />
            </div>
            <div className="hero-video-shade" />
          </div>

          <div className="hero-scroll" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
        </section>

        <section className="signal-strip" aria-label="Áreas de atuação">
          <div className="signal-track">
            {[0, 1].map((copy) => (
              <div className="signal-group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
                {['BRAND', 'PRODUCT', 'OPERATIONS', 'GROWTH', 'SOCIAL COMMERCE', 'GLOBAL SCALE'].map((item) => (
                  <span key={item}>{item}<i /></span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <LogoCarousel />

        <section className="manifesto-section section-pad">
          <div className="section-index">01 — MANIFESTO</div>
          <div className="manifesto-copy" data-reveal>
            <p>{t('statements.one.text')}</p>
            <h2>{t('statements.one.span')}</h2>
          </div>
          <div className="manifesto-note" data-reveal>
            <span>GOON / CULTURE · DATA · DESIGN</span>
            <p>{t('systems.lead')}</p>
          </div>
        </section>

        <section className="systems-section section-pad" id="systems">
          <header className="section-heading" data-reveal>
            <div>
              <p className="eyebrow"><span /> 02 / THE SYSTEM</p>
              <h2>{t('systems.title')}</h2>
            </div>
            <p>{t('systems.lead')}</p>
          </header>

          <div className="systems-grid">
            {systems.map((system, index) => (
              <article className="system-card" data-reveal key={system.title}>
                <div className="system-card-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <i>{system.icon}</i>
                </div>
                <h3>{system.title}</h3>
                <p>{system.desc}</p>
                <div className="card-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="timeline">
          <div className="process-stage">
            <div className="process-copy">
              <p className="eyebrow"><span /> 03 / {t('nav.timeline')}</p>
              <h2>{t('timeline.title')}</h2>
              <p>{t('timeline.lead')}</p>
              <div className="process-rail" aria-hidden="true"><span className="process-progress" /></div>
            </div>

            <div className="process-cards">
              {PROCESS_META.map((step, index) => (
                <article className="process-card" key={step.number}>
                  <div className="process-card-head">
                    <span>{step.number}</span>
                    <span>{step.code}</span>
                  </div>
                  <div className="process-symbol" aria-hidden="true">{SYSTEM_ICONS[index]}</div>
                  <div>
                    <p>{step.detail}</p>
                    <h3>{t(`timeline.step${index + 1}.title`)}</h3>
                    <p>{t(`timeline.step${index + 1}.desc`)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ecosystem-section section-pad" id="ecosystem">
          <header className="section-heading" data-reveal>
            <div>
              <p className="eyebrow"><span /> 04 / PORTFOLIO</p>
              <h2>{t('ecosystem.title')}</h2>
            </div>
            <p>{t('ecosystem.lead')}</p>
          </header>

          <div className="ecosystem-grid">
            {ECOSYSTEM_ITEMS.map(({ key, label }, index) => (
              <a className={`ecosystem-card eco-${index + 1}`} data-reveal href="#contact" onClick={openLeadModal} key={key}>
                <div className="ecosystem-card-index">0{index + 1}</div>
                <div>
                  <p>GOON / {label}</p>
                  <h3>{t(`ecosystem.${key}.title`)}</h3>
                  <span>{t(`ecosystem.${key}.desc`)}</span>
                </div>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </section>

        <section className="proof-section section-pad" id="about">
          <div className="proof-intro" data-reveal>
            <p className="eyebrow"><span /> 05 / TRACK RECORD</p>
            <h2>{t('stats.title1')}<br /><em>{t('stats.title2')}</em></h2>
            <p>{t('stats.lead')}</p>
          </div>

          <div className="stats-grid" data-reveal>
            <div className="stat-item"><strong data-count="20" data-suffix="+">20+</strong><span>{t('stats.s1')}</span></div>
            <div className="stat-item"><strong data-count="40" data-suffix="+">40+</strong><span>{t('stats.s2')}</span></div>
            <div className="stat-item"><strong data-count="1" data-suffix="B+">1B+</strong><span>{t('stats.s3')}</span></div>
            <div className="stat-item"><strong>∞</strong><span>{t('stats.s4')}</span></div>
          </div>

          <div className="network-panel" id="global-network" data-reveal>
            <div className="network-copy">
              <span>{t('network.eyebrow')}</span>
              <h3>{t('network.title')}</h3>
              <p>{t('network.description')}</p>
              <div className="network-location-list" aria-label={t('network.locationsLabel')}>
                {NETWORK_LOCATIONS.map((location, index) => (
                  <span key={location.key}><b>{String(index + 1).padStart(2, '0')}</b>{location.label}</span>
                ))}
              </div>
            </div>
            <WorldNetworkMap label={t('network.mapAria')} />
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-panel" data-reveal>
            <div className="contact-meta">
              <p className="eyebrow"><span /> 06 / START</p>
              <span>SÃO PAULO · LONDON · DUBAI · DORAL · CIUDAD DEL ESTE</span>
            </div>
            <h2>{t('contact.finalTitle1')}<br /><em>{t('contact.finalTitle2')}</em></h2>
            <p>{t('contact.finalDesc')}</p>
            <div className="contact-actions">
              <a className="button button-primary" href="#" onClick={openLeadModal}>{t('contact.finalTalk')} <ArrowIcon /></a>
              <a className="text-link" href="mailto:contato@goon-global.com">contato@goon-global.com <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-logo" href="#home"><img src="/goon-logo-hero.png" alt="GOON" width="565" height="172" loading="lazy" /></a>
        <div><span>CULTURE / DATA / DESIGN</span><span>{t('footer.rights')}</span></div>
        <nav aria-label="Redes sociais"><a href="https://www.instagram.com/goon.method/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#admin">Admin</a></nav>
      </footer>

      <a className="float-cta" href="#" onClick={openLeadModal} aria-label={t('hero.talkBtn')}>
        <span className="float-pulse" />
        <span>{t('hero.talkBtn')}</span>
        <ArrowIcon />
      </a>
    </div>
  );
}
