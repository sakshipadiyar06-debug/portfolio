import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const contactChannels = [
    {
      title: 'LinkedIn',
      desc: 'Connect to chat, network & explore more updates',
      handle: 'in/sakshi-s-padiyar-123472288',
      href: profile.links.linkedin,
      accent: 'border-crimson/50 hover:border-crimson',
      badge: 'Professional Network',
      cursor: 'link',
      primary: true,
    },
    {
      title: 'GitHub',
      desc: 'Explore CODLINGO, DIGICURE, Course Rec & all repositories',
      handle: 'github.com/sakshipadiyar06-debug',
      href: profile.links.github,
      accent: 'border-white/20 hover:border-crimson',
      badge: 'Code Repositories',
      cursor: 'link',
      primary: false,
    },
    {
      title: 'Email',
      desc: 'Drop an email for inquiries, collaborations, or roles',
      handle: profile.email,
      href: `mailto:${profile.email}?subject=${encodeURIComponent("Inquiry for Sakshi S. Padiyar")}`,
      accent: 'border-white/20 hover:border-crimson',
      badge: 'Direct Dispatch',
      cursor: 'link',
      primary: false,
    },
    {
      title: 'Phone',
      desc: 'Direct frequency for immediate conversations',
      handle: profile.phone,
      href: `tel:${profile.phone}`,
      accent: 'border-white/20 hover:border-crimson',
      badge: 'Secure Line',
      cursor: 'link',
      primary: false,
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(0,255,135,0.22),transparent_70%)]" />
      <Particles count={36} />

      {/* Thank you kicker */}
      <motion.div
        className="relative mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-ink-2/90 px-4 py-1.5 font-mono text-xs tracking-widest text-crimson-2 shadow-[0_0_20px_rgba(0,255,135,0.3)]"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="h-2 w-2 rounded-full bg-crimson animate-ping" />
        <span className="font-bold uppercase">THANK YOU FOR WATCHING & EXPLORING</span>
      </motion.div>

      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      {/* Narrative statement reflecting user's exact passions */}
      <motion.div
        className="relative mt-8 max-w-2xl px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-crimson-2 sm:text-sm">
          WEBSITES • FRONTEND & BACKEND • POWER BI • FULL-STACK & SYSTEMS
        </p>
        <p className="mt-4 text-sm leading-relaxed text-bone/80 sm:text-base">
          I love creating engaging websites from frontend UI to scalable backends, designing visual data stories with <strong className="text-crimson font-semibold">Power BI</strong>, and engineering robust solutions across <strong className="text-white">Python, C, JavaScript, SQL, and React</strong>.
        </p>
        <p className="mt-3 text-xs font-mono text-mist">
          Thank you for exploring my portfolio! You can connect with me directly through any of the channels below to check out more of my work:
        </p>
      </motion.div>

      {/* Interactive Contact Cards with Animated Arrows */}
      <motion.div
        className="relative mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 text-left sm:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        {contactChannels.map((c) => (
          <motion.div
            key={c.title}
            variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}
          >
            <Magnetic className="h-full w-full">
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className={`group flex h-full flex-col justify-between rounded-2xl border bg-ink-2/80 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,255,135,0.35)] ${c.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-crimson/10 border border-crimson/30 px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider text-crimson">
                      {c.badge}
                    </span>
                    {/* Animated Arrow Icon */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ink group-hover:border-crimson group-hover:bg-crimson group-hover:text-black transition-all duration-300">
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-bone tracking-wide group-hover:text-crimson-2 transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-mist leading-relaxed font-sans">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-bone/90 group-hover:text-crimson transition-colors truncate">
                    {c.handle}
                  </span>
                  <span className="text-[10px] font-mono text-mist uppercase tracking-widest group-hover:text-white transition-colors">
                    CONNECT →
                  </span>
                </div>
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Action Navigation */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone transition-colors flex items-center gap-1 group">
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↺</span> WATCH AGAIN
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone transition-colors flex items-center gap-1 group">
          <span className="transition-transform duration-300 group-hover:scale-110">▶</span> REPLAY OPENING
        </button>
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-crimson transition-colors flex items-center gap-1 group">
          <span>GITHUB REPOSITORIES</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </a>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. Built with love for Web, Backend, Power BI & Systems Engineering.
        </p>
      </footer>
    </section>
  );
}
