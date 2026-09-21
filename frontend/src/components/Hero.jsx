import { useRef } from "react";

import { motion, useTransform, useScroll } from "framer-motion";

import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Zap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { useLang, translations, TEL_LINK, waLink, IMG } from "@/i18n";

import { scrollToId } from "@/components/Navbar";

const MaskedLine = ({ text, delay, accent }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className={accent ? "block text-[#D6A84B]" : "block text-white"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {text}
    </motion.span>
  </span>
);

const PILL_ICONS = [MapPin, Zap, ShieldCheck, Sparkles];

export default function Hero() {
  const { lang } = useLang();

  const t = translations[lang].hero;

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const carY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
      data-testid="hero-section"
    >
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="eyebrow"
          data-testid="hero-eyebrow"
        >
          {t.eyebrow}
        </motion.p>

        <h1
          className="font-display mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          data-testid="hero-headline"
        >
          <MaskedLine text={t.line1} delay={0.2} />
          <MaskedLine text={t.line2} delay={0.3} />
          <MaskedLine text={t.line3} delay={0.4} accent />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed"
          data-testid="hero-subtext"
        >
          {t.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href={TEL_LINK}
            data-testid="hero-call-button"
            className="inline-flex items-center gap-2 rounded-full bg-[#D6A84B] px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#BE8F32]"
          >
            <Phone size={16} />
            {t.callNow}
          </a>

          <a
            href={waLink(
              "Namaste! I would like to enquire about a trip with Khadka Car Rental Service.",
            )}
            target="_blank"
            rel="noreferrer"
            data-testid="hero-whatsapp-button"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            <MessageCircle size={16} />
            {t.whatsappNow}
          </a>

          <button
            onClick={scrollToId("#booking")}
            data-testid="hero-quote-button"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white border border-white/15 hover:border-white/30 hover:bg-white/5"
          >
            {t.quote}
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono2 mt-5 text-xs tracking-[0.18em] uppercase text-zinc-500"
          data-testid="hero-price-note"
        >
          {t.priceNote}
        </motion.p>
      </motion.div>

      <motion.div
        style={{ y: carY }}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 w-full mt-10 lg:mt-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
          data-testid="hero-car-visual"
        >
          <img
            src={IMG.hero}
            alt="Tata Curvv EV used by Khadka Car Rental Service"
            className="w-full rounded-2xl border border-white/10 object-cover shadow-lg"
            loading="eager"
            data-testid="hero-car-image"
          />

          <div className="absolute inset-0 rounded-2xl bg-black/10" />

          {t.pills.map((p, i) => {
            const Icon = PILL_ICONS[i];

            const pos = [
              "top-4 left-4 sm:top-8 sm:left-8",
              "top-4 right-4 sm:top-8 sm:right-8",
              "bottom-6 left-4 sm:bottom-10 sm:left-8",
              "bottom-6 right-4 sm:bottom-10 sm:right-8",
            ][i];

            return (
              <motion.div
                key={p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className={`absolute ${pos}`}
              >
                <div
                  className="rounded-full border border-white/10 bg-black/55 backdrop-blur-sm px-3.5 py-2 flex items-center gap-2"
                  data-testid={`hero-pill-${i}`}
                >
                  <Icon size={13} className="text-[#D6A84B] shrink-0" />

                  <span className="text-[11px] sm:text-xs font-medium text-zinc-200 whitespace-nowrap">
                    {p}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
