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
const ECOSYSTEM_KEYS = ['c1', 'c2', 'c3', 'c4'];

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
            {ECOSYSTEM_KEYS.map((key, index) => (
              <a className={`ecosystem-card eco-${index + 1}`} data-reveal href="#contact" onClick={openLeadModal} key={key}>
                <div className="ecosystem-card-index">0{index + 1}</div>
                <div>
                  <p>GOON / {['BRAND STRATEGY', 'CULTURE & INSIGHTS', 'MULTI-CHANNEL NETWORK', 'KNOWLEDGE NETWORK'][index]}</p>
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

          <div className="network-panel" data-reveal>
            <div className="network-copy">
              <span>GLOBAL NETWORK / ACTIVE</span>
              <h3>Presença onde a cadeia acontece.</h3>
              <p>Brasil, LATAM, México, Estados Unidos, Europa e Oriente Médio conectados por uma rede de supply chain, distribuição e expansão.</p>
            </div>
            <div className="network-map" aria-hidden="true">
              <span className="map-line line-one" /><span className="map-line line-two" /><span className="map-line line-three" />
              <i className="map-dot dot-br" /><i className="map-dot dot-us" /><i className="map-dot dot-eu" /><i className="map-dot dot-ae" />
              <b className="map-label label-br">BR</b><b className="map-label label-us">US</b><b className="map-label label-eu">EU</b><b className="map-label label-ae">AE</b>
            </div>
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
