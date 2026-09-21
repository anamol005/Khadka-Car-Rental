import { useRef } from "react";

import { motion, useTransform, useScroll } from "framer-motion";

import { Phone, MessageCircle } from "lucide-react";

import { useLang, translations, TEL_LINK, waLink, IMG } from "@/i18n";

import { scrollToId } from "@/components/Navbar";

const MaskedLine = ({ text, delay, accent }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className={accent ? "block text-[#D9A441]" : "block text-[#111111]"}
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

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang].hero;

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-[#F7F7F3]"
      data-testid="hero-section"
    >
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[#666666]"
              data-testid="hero-eyebrow"
            >
              {t.eyebrow}
            </motion.p>

            <h1
              className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
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
              className="mt-6 max-w-xl text-base sm:text-lg text-[#5F5F5F] leading-relaxed"
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
                className="inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#C38F2F] transition-colors"
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
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={16} />
                {t.whatsappNow}
              </a>

              <button
                onClick={scrollToId("#booking")}
                data-testid="hero-quote-button"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[#111111] border border-[#D8D8D2] bg-white hover:bg-[#F0F0EC] transition-colors"
              >
                {t.quote}
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-mono2 mt-5 text-xs tracking-[0.18em] uppercase text-[#777777]"
              data-testid="hero-price-note"
            >
              {t.priceNote}
            </motion.p>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
            data-testid="hero-car-visual"
          >
            <div className="relative rounded-[28px] bg-[#F2F2EE] min-h-[390px] sm:min-h-[460px] lg:min-h-[500px] overflow-hidden border border-[#E3E3DE]">
              {/* Gold circle */}
              <div className="absolute top-14 right-10 sm:right-20 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-[#D9A441]/40" />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#EAE9E4] to-transparent" />

              {/* Vehicle badge */}
              <div className="absolute top-7 right-7 rounded-full bg-white/95 border border-[#E3E3DE] px-4 py-2 text-xs sm:text-sm font-semibold text-[#444444] z-20">
                ⚡ Tata Curvv EV
              </div>

              {/* Car */}
              <img
                src={IMG.side}
                alt="Tata Curvv EV used by Khadka Car Rental Service"
                className="absolute bottom-[-15px] right-[-35px] w-[115%] max-w-none object-contain z-10"
                loading="eager"
                data-testid="hero-car-image"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
