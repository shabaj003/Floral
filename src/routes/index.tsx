import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CursorTrail from "@/components/CursorTrail";
import PetalRain from "@/components/PetalRain";
import FloatingFlowers from "@/components/FloatingFlowers";
import { LogoMark, BotanicalDivider } from "@/components/Logo";

import homePanelBackground from "@/assets/Home.jpg";
import heroPNG from "@/assets/hero.png";
import client1 from "@/assets/Client1.jpeg";
import client2 from "@/assets/Client2.jpeg";
import client3 from "@/assets/Client3.jpeg";
import client4 from "@/assets/Client4.jpeg";
import client5 from "@/assets/Client5.jpeg";
import client6 from "@/assets/Client6.jpeg";
import client7 from "@/assets/Client7.jpeg";
import client8 from "@/assets/Client8.jpeg";
import client9 from "@/assets/Client9.jpeg";
import client10 from "@/assets/Client10.jpeg";
import client11 from "@/assets/Client11.jpeg";
import craftProcess from "@/assets/craft-process.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Floralart by Sadiya - Handmade Floral Jewellery, Baramati" },
      { name: "description", content: "Bespoke handmade floral jewellery for Haldi, Mehndi, baby showers, weddings & engagements. Crafted with love in Baramati. DM @floralart_by_sadiya to book." },
      { property: "og:title", content: "Floralart by Sadiya" },
      { property: "og:description", content: "Handmade floral jewellery for your special moments." },
    ],
  }),
  component: FloralartHome,
});

const pieces = [
  { name: "Blush Lotus Bridal Set", cat: "Bridal", img: client1 },
  { name: "Lotus Bloom Ceremony Set", cat: "Haldi", img: client2 },
  { name: "Petal Pearl Statement Jewellery", cat: "Mehndi", img: client3 },
  { name: "Pink Lotus Jhumar", cat: "Wedding", img: client4 },
  { name: "Blush Mehndi Floral Adornments", cat: "Ceremony", img: client5 },
];

const clientGallery = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
];



const signatureStories = [
  {
    title: "Blush Lotus Bridal Set",
    kicker: "Bridal glow",
    summary: "Soft jasmine strands and rose accents designed to feel luminous in close-up portraits and ceremony light.",
    img: client1,
    accent: "#cf8aa3",
    highlights: ["Made around your outfit palette", "Lightweight for long celebrations", "Photogenic from every angle"],
  },
  {
    title: "Lotus Bloom Ceremony Set",
    kicker: "Haldi brightness",
    summary: "A joyful marigold composition that brings movement, warmth, and that fresh haldi radiance to the frame.",
    img: client2,
    accent: "#d89a3f",
    highlights: ["Built for bright ceremonial photos", "Elegant but easy to wear", "Custom bloom density on request"],
  },
  {
    title: "Petal Pearl Statement Jewellery",
    kicker: "Mehndi detail",
    summary: "Delicate floral earrings with a soft blush finish for evenings, mehndi moments, and graceful family portraits.",
    img: client3,
    accent: "#e3a7b3",
    highlights: ["Refined close-up finish", "Made to balance comfort and style", "Pairs well with matching sets"],
  },
  {
    title: "Pink Lotus Jhumar",
    kicker: "Wedding harmony",
    summary: "A complete bridal story with coordinated blooms, pearls, and thoughtful balance across every piece.",
    img: client4,
    accent: "#b78a4f",
    highlights: ["Coordinated for the full look", "Designed for ceremonial flow", "Customisable for your event"],
  },
  {
    title: "Blush Mehndi Floral Adornments",
    kicker: "Ceremony framing",
    summary: "A traditional face-framing floral piece with a polished pearl finish, ideal for mandap and ritual moments.",
    img: client5,
    accent: "#8ea378",
    highlights: ["Traditional silhouette", "Comfortable ceremonial fit", "Refined for portraits and rituals"],
  },
];

function FloralartHome() {
  return (
    <div className="relative bg-background text-ivory">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PetalRain count={18} />
        <FloatingFlowers />
      </div>
      <div className="relative z-10">
        <CursorTrail />
        <Nav />
        <Hero />
        <Showcase />
        <LiveCraft />
        <SignatureStory />
        <Gallery />
        <BookingContact />
        <Footer />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="fixed top-0 z-40 w-full"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <LogoMark size={44} />
          <div className="hidden sm:block leading-tight">
            <div className="text-script text-2xl leading-none">Floralart</div>
            <div className="text-[10px] tracking-[0.35em] text-gold/70">BY SADIYA</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-ivory/70 md:flex">
          <a href="#showcase" className="hover:text-gold transition">Showcase</a>
          <a href="#craft" className="hover:text-gold transition">Craft</a>
          <a href="#services" className="hover:text-gold transition">Services</a>
          <a href="#booking" className="hover:text-gold transition">Booking</a>
        </nav>
        <a href="#booking" className="btn-gold rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em]">
          DM to Book
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const tagline = 'Handmade with love, crafted for your special moments.';
  const [typed, setTyped] = useState('');
  const heroHighlights = [
    { label: 'Fresh-to-order', value: 'Blooms' },
    { label: 'Baramati studio', value: 'Custom' },
    { label: 'Same-day dispatch', value: 'Pan-India' },
  ];
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(tagline.slice(0, i));
      if (i >= tagline.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, []);

  return (
    <section id='top' className='relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24'>
      <div className='absolute inset-0 bg-gradient-to-b from-background/15 via-background/30 to-background/55' />
      <motion.div
        aria-hidden='true'
        className='absolute -left-24 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl'
        animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden='true'
        className='absolute right-0 top-32 h-96 w-96 rounded-full bg-lotus/10 blur-3xl'
        animate={{ x: [0, -16, 0], y: [0, 18, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden='true'
        className='absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full border border-gold/10'
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <div className='mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 md:px-10'>
        <div className='grid w-full gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='relative z-10 max-w-2xl text-center lg:text-left'
          >
            <motion.div
              className='text-[10px] uppercase tracking-[0.6em] text-gold/70'
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Baramati - Est. Handmade
            </motion.div>
            <motion.div
              className='mt-6 flex justify-center lg:justify-start'
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LogoMark size={92} />
            </motion.div>
            <motion.div
              className='mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-gold/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-gold/80 backdrop-blur-sm lg:mx-0'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              <span className='h-2 w-2 rounded-full bg-gold animate-pulse' />
              Floral jewellery made for ceremonies
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22 }}
              className='mt-6 text-script text-6xl leading-none sm:text-8xl md:text-9xl text-gold-shimmer'
            >
              Floralart
            </motion.h1>
            <motion.div
              className='mt-2 flex items-center justify-center gap-4 lg:justify-start'
              initial={{ opacity: 0, scaleX: 0.85 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className='h-px w-16 bg-gold/50' />
              <span className='text-xs uppercase tracking-[0.5em] text-ivory/80'>by Sadiya</span>
              <div className='h-px w-16 bg-gold/50' />
            </motion.div>

            <div className='mt-10 min-h-16 max-w-xl'>
              <p className='font-display text-lg italic text-ivory/85 md:text-xl'>
                {typed}
                <span className='ml-1 inline-block h-4 w-[2px] animate-pulse bg-gold align-middle' />
              </p>
            </div>

            <div className='mt-8 grid gap-3 sm:grid-cols-3'>
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 + index * 0.12 }}
                  className='rounded-2xl border border-gold/15 bg-black/18 p-4 text-left backdrop-blur-sm'
                >
                  <div className='text-[10px] uppercase tracking-[0.35em] text-gold/60'>{item.label}</div>
                  <div className='mt-2 font-display text-xl text-ivory'>{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className='mt-12 flex flex-col items-center gap-4 sm:flex-row lg:justify-start'>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href='#showcase'
                className='btn-gold rounded-full px-8 py-3 text-xs uppercase tracking-[0.25em]'
              >
                Explore the Collection
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href='#booking'
                className='btn-outline-gold rounded-full px-8 py-3 text-xs uppercase tracking-[0.25em]'
              >
                Book a Consultation
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            className='relative'
          >
            <motion.div
              aria-hidden='true'
              className='absolute -left-8 top-10 h-24 w-24 rounded-full border border-gold/25 bg-gold/10 backdrop-blur-sm'
              animate={{ y: [0, -14, 0], x: [0, 10, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden='true'
              className='absolute right-2 top-24 h-16 w-16 rounded-full border border-gold/20 bg-lotus/10 backdrop-blur-sm'
              animate={{ y: [0, 12, 0], x: [0, -8, 0], rotate: [360, 180, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            />
            {/* Additional flower bloom animations */}
            <motion.div
              aria-hidden='true'
              className='absolute -top-6 left-1/2 h-14 w-14 rounded-full border-2 border-rose/30 bg-rose/5 backdrop-blur-sm'
              animate={{ y: [0, -10, 0], scale: [0.9, 1.15, 0.9], rotate: [0, 360, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden='true'
              className='absolute -bottom-10 right-1/3 h-20 w-20 rounded-full border border-gold/15 bg-gold/5 backdrop-blur-sm'
              animate={{ y: [0, 8, 0], x: [0, -6, 0], rotate: [360, 180, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            />
            <motion.div
              className='absolute -inset-4 rounded-[2.5rem] bg-gold/10 blur-3xl'
              animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.04, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className='relative overflow-hidden rounded-[2rem] border border-gold/20 bg-white/72 shadow-[0_24px_70px_rgba(63,59,42,0.14)]'
              animate={{ y: [0, -8, 0], rotate: [0, 0.5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className='relative aspect-[4/5]'>
                <motion.img
                  src={heroPNG}
                  alt='Floralart handmade floral jewellery'
                  width={1200}
                  height={1500}
                  loading='eager'
                  className='h-full w-full object-cover'
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15' />
                {/* Animated flower petals around the image */}
                <motion.div
                  aria-hidden='true'
                  className='absolute -top-6 -right-4 h-12 w-12 rounded-full bg-rose/30 blur-xl'
                  animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [0, 180, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  aria-hidden='true'
                  className='absolute -bottom-4 -left-6 h-10 w-10 rounded-full bg-lotus/40 blur-lg'
                  animate={{ y: [0, 10, 0], x: [0, -6, 0], rotate: [360, 180, 0] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
                <motion.div
                  aria-hidden='true'
                  className='absolute top-1/3 -right-5 h-8 w-8 rounded-full bg-gold/25 blur-md'
                  animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <motion.div
                  aria-hidden='true'
                  className='absolute bottom-1/4 -left-4 h-6 w-6 rounded-full bg-pink/20 blur-sm'
                  animate={{ y: [0, 6, 0], x: [0, -8, 0], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                />
                <motion.div
                  className='absolute left-5 top-5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-ink backdrop-blur-md'
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Handmade • Floralart
                </motion.div>
                <motion.div
                  className='absolute inset-x-5 bottom-5 rounded-2xl bg-black/80 p-5 backdrop-blur-md'
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                >
                  <span className='text-[10px] uppercase tracking-[0.35em] text-muted-foreground'>
                    Signature floral direction
                  </span>
                  <h2 className='mt-2 font-display text-2xl text-ivory'>
                    Soft, bright, and tailored to the occasion.
                  </h2>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    A polished visual language built for calm luxury, clean transitions, and easy booking.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href='#showcase'
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.9 }}
        className='absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center'
      >
        <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 animate-pulse-gold'>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none' className='text-gold'>
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <ellipse key={a} cx='12' cy='7' rx='1.6' ry='4' fill='currentColor' transform={'rotate(' + a + ' 12 12)'} opacity='0.8' />
            ))}
            <circle cx='12' cy='12' r='1.8' fill='#faf3e0' />
          </svg>
        </div>
        <div className='mt-2 text-[10px] uppercase tracking-[0.4em] text-ivory/60'>Scroll</div>
      </motion.a>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-[10px] uppercase tracking-[0.6em] text-gold/70">{eyebrow}</div>
      <h2 className="mt-4 font-display text-4xl md:text-6xl text-ivory">{title}</h2>
      <BotanicalDivider className="mx-auto mt-5 w-72" />
      {sub && <p className="mt-5 text-ivory/70 md:text-lg">{sub}</p>}
    </div>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="relative py-32 px-6">
      <SectionHeading
        eyebrow="Signature Pieces"
        title="A Live Flower Art Showcase"
        sub="Every strand tells a story - fresh blooms hand-strung the morning of your ceremony, so every petal arrives alive."
      />
      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pieces.map((p, i) => (
          <TiltCard key={p.name} piece={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function TiltCard({ piece, index }: { piece: (typeof pieces)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(20px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0) translateZ(0)"; };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08 }}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="relative overflow-hidden rounded-2xl glass-card transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={piece.img}
            alt={piece.name}
            width={900}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          {/* gold circle mask corners */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/25 group-hover:ring-gold/60 transition" />
        </div>
        <div className="relative p-6" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold/70">{piece.cat}</div>
              <h3 className="mt-2 font-display text-2xl text-ivory">{piece.name}</h3>
            </div>
            <div className="h-10 w-10 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition">
              {"→"}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LiveCraft() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);
  const flowersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        stringRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", end: "bottom 40%", scrub: 1 },
        }
      );
      gsap.utils.toArray<HTMLElement>(".craft-flower").forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0, rotate: -180, opacity: 0 },
          {
            scale: 1, rotate: 0, opacity: 1,
            duration: 0.6,
            ease: "back.out(1.6)",
            scrollTrigger: { trigger: sectionRef.current, start: `top+=${i * 40} 70%`, toggleActions: "play none none reverse" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="craft" ref={sectionRef} className="relative overflow-hidden py-32 px-6">
      <div className="absolute inset-0 opacity-30">
        <img src={craftProcess} alt="" width={1400} height={900} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <div className="relative">
        <SectionHeading
          eyebrow="Live Craft"
          title="Watch a Garland Come Alive"
          sub="Scroll gently - flowers assemble one bloom at a time, just the way Sadiya strings them by hand at dawn."
        />

        <div className="relative mx-auto mt-24 h-40 max-w-4xl">
          <div ref={stringRef} className="absolute top-1/2 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div ref={flowersRef} className="relative flex h-full items-center justify-between">
            {Array.from({ length: 11 }).map((_, i) => {
              const isRose = i % 3 === 0;
              return (
                <div key={i} className="craft-flower">
                  <svg width={isRose ? 56 : 42} height={isRose ? 56 : 42} viewBox="0 0 60 60">
                    {[0, 60, 120, 180, 240, 300].map((a) => (
                      <ellipse
                        key={a}
                        cx="30" cy="16" rx="8" ry="14"
                        fill={isRose ? "#d4788a" : i % 2 === 0 ? "#faf3e0" : "#f5d98a"}
                        opacity="0.9"
                        transform={`rotate(${a} 30 30)`}
                      />
                    ))}
                    <circle cx="30" cy="30" r="6" fill={isRose ? "#8b2c3a" : "#d4af37"} />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 text-center md:grid-cols-3">
          {[
            { t: "Fresh Sourcing", d: "Blooms sourced at sunrise from Baramati's flower markets." },
            { t: "Hand-strung", d: "Each petal secured with silk thread - no shortcuts, no glue." },
            { t: "Delivered same-day", d: "Sealed in cool packaging so your jewellery arrives alive." },
          ].map((c) => (
            <div key={c.t} className="glass-card rounded-xl p-6">
              <div className="text-script text-3xl text-gold">{c.t}</div>
              <p className="mt-2 text-sm text-ivory/70">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureStory() {
  return (
    <section id='services' className='relative py-32 px-6'>
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start'>
        <div className='lg:sticky lg:top-28 self-start max-w-xl'>
          <div className='text-[10px] uppercase tracking-[0.6em] text-gold/70'>Services</div>
          <h2 className='mt-4 font-display text-4xl md:text-6xl text-ivory'>
            Handmade floral jewellery for Haldi, Mehndi, baby showers, mundavli, engagements, and weddings.
          </h2>
          <BotanicalDivider className='mt-5 w-72' />
          <p className='mt-5 text-ivory/70 md:text-lg'>
            Choose the look that suits your ceremony, then scroll right to see each floral story settle softly into view.
          </p>
          <div className='mt-8 space-y-3'>
            {signatureStories.map((story) => (
              <div key={story.title} className='flex items-center gap-3 rounded-2xl border border-gold/15 bg-black/15 px-4 py-3 backdrop-blur-sm'>
                <span className='flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold'>
                  *
                </span>
                <div className='min-w-0'>
                  <div className='font-display text-lg text-ivory'>{story.title}</div>
                  <div className='text-[10px] uppercase tracking-[0.35em] text-gold/70'>{story.kicker}</div>
                </div>
              </div>
            ))}
          </div>
          <a href='#booking' className='btn-gold mt-8 inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.25em]'>
            DM for Booking
          </a>
        </div>

        <div className='space-y-6'>
          {signatureStories.map((story, index) => (
            <motion.article
              key={story.title}
              id={'story-' + index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className='overflow-hidden rounded-[2rem] glass-card'
            >
              <div className='grid md:grid-cols-[1fr_0.94fr]'>
                <div className='p-8 md:p-10'>
                  <div className='text-[10px] uppercase tracking-[0.35em] text-gold/70'>{story.kicker}</div>
                  <h3 className='mt-3 font-display text-3xl text-ivory'>{story.title}</h3>
                  <p className='mt-4 text-ivory/70'>{story.summary}</p>
                  <ul className='mt-6 space-y-3'>
                    {story.highlights.map((point) => (
                      <li key={point} className='flex items-start gap-3 text-sm text-ivory/70'>
                        <span
                          className='mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold'
                          style={{ borderColor: story.accent, color: story.accent }}
                        >
                          +
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a href='#booking' className='btn-gold mt-8 inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.25em]'>
                    Book this story
                  </a>
                </div>

                <div className='relative min-h-80'>
                  <img src={story.img} alt={story.title} className='h-full w-full object-cover' />
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/10' />
                  <div className='absolute left-5 top-5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-ink backdrop-blur-md'>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return (
    <section className="relative py-24 px-6">
      <SectionHeading eyebrow="Moments" title="From Our Brides & Ceremonies" />
      <motion.div style={{ y }} className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {clientGallery.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
            className={`group overflow-hidden ${i % 3 === 0 ? "rounded-full aspect-square" : "rounded-2xl aspect-[4/5]"} ring-1 ring-gold/25 hover:ring-gold hover:shadow-[0_0_40px_-10px_#d4af37] transition-all`}
          >
            <img src={img} alt="Floralart moment" width={600} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-125" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function BookingContact() {
  return (
    <section id='booking' className='relative py-32 px-6'>
      <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='glass-card rounded-[2rem] p-8 md:p-10'>
          <div className='text-[10px] uppercase tracking-[0.6em] text-gold/70'>Booking</div>
          <h2 className='mt-4 font-display text-4xl md:text-6xl text-ivory'>Bring Your Vision to Bloom</h2>
          <BotanicalDivider className='mt-5 w-72' />
          <p className='mt-5 max-w-2xl text-ivory/70 md:text-lg'>
            Slots fill quickly during wedding season. Reach out early so Sadiya can craft something truly yours.
          </p>
          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <a
              href='https://instagram.com/floralart_by_sadiya'
              target='_blank'
              rel='noreferrer'
              className='btn-gold inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em]'
            >
              <span>Message on Instagram</span>
            </a>
            <a
              href='https://wa.me/918830813005'
              target='_blank'
              rel='noreferrer'
              className='btn-outline-gold inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em]'
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className='grid gap-6 sm:grid-cols-2'>
          <ContactCard
            icon={<InstagramIcon />}
            title='Instagram'
            detail='@floralart_by_sadiya'
            href='https://instagram.com/floralart_by_sadiya'
          />
          <ContactCard icon={<PinIcon />} title='Studio' detail='Baramati, Maharashtra' />
          <ContactCard icon={<WhatsAppIcon />} title='WhatsApp' detail='+91 88308 13005' href='https://wa.me/918830813005' />
          <ContactCard icon={<TruckIcon />} title='Courier' detail='Pan-India same-day dispatch' />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, detail, href }: { icon: React.ReactNode; title: string; detail: string; href?: string }) {
  const inner = (
    <div className="group glass-card h-full rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-gold">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold group-hover:bg-gold group-hover:text-ink transition-all group-hover:rotate-12">
        {icon}
      </div>
      <div className="mt-5 text-[10px] uppercase tracking-[0.4em] text-gold/70">{title}</div>
      <div className="mt-2 font-display text-xl text-ivory">{detail}</div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="relative border-t border-gold/15 py-12 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <LogoMark size={48} />
        <BotanicalDivider className="w-56" />
        <div className="text-script text-3xl text-gold-shimmer">Floralart by Sadiya</div>
        <p className="text-xs uppercase tracking-[0.4em] text-ivory/50">Baramati - India - Handmade with love</p>
        <p className="text-xs text-ivory/40">(c) {new Date().getFullYear()} Floralart by Sadiya. All blooms reserved.</p>
      </div>
    </footer>
  );
}

/* ---------- icons ---------- */
function InstagramIcon() {
  return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>);
}
function PinIcon() {
  return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s-7-7.5-7-13a7 7 0 1114 0c0 5.5-7 13-7 13z" /><circle cx="12" cy="9" r="2.5" /></svg>);
}
function TruckIcon() {
  return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17.5" cy="18" r="1.6" /></svg>);
}
function WhatsAppIcon() {
  return (<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.4 17l-1.4 5 5.1-1.3A11 11 0 1020.5 3.5zM12 20.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1120.2 12 8.2 8.2 0 0112 20.2zm4.5-6.2c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.1-.5 0a6.7 6.7 0 01-3.3-2.9c-.2-.4.2-.4.6-1.2a.4.4 0 000-.4c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.1 5.1 0 001.1 2.7 11.6 11.6 0 004.4 3.9c.6.3 1.1.4 1.5.5a3.6 3.6 0 001.6.1 2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.2-.3-.3-.5-.4z" /></svg>);
}
