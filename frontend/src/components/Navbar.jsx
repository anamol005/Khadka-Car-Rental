import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Menu, X, Phone } from "lucide-react";
import { useLang, translations, TEL_LINK } from "@/i18n";

export const scrollToId = (id) => (e) => {
  if (e) e.preventDefault();

  const el = document.querySelector(id);

  if (!el) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -70 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const LINKS = ["home", "services", "vehicle", "reviews", "contact"];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const t = translations[lang];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const LangToggle = () => (
    <div
      className="flex items-center rounded-full border border-[#E3E3DE] bg-[#EFEFED] p-1"
      data-testid="language-toggle"
    >
      {["en", "ne"].map((l) => (
        <button
          key={l}
          data-testid={`lang-${l}-button`}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 ${
            lang === l
              ? "bg-[#D9A441] text-black"
              : "text-[#666666] hover:text-black"
          }`}
        >
          {l === "en" ? "EN" : "ने"}
        </button>
      ))}
    </div>
  );

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E3E3DE]"
          : "bg-[#F7F7F3]/95"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 h-[70px] flex items-center justify-between">
        <a
          href="#home"
          onClick={scrollToId("#home")}
          className="flex items-center gap-2.5"
          data-testid="brand-logo-link"
        >
          <span className="w-9 h-9 rounded-full border border-[#E3E3DE] bg-white flex items-center justify-center">
            <Car className="text-[#D9A441]" size={18} />
          </span>

          <span className="font-display font-bold tracking-wide text-[#111111] text-sm sm:text-base leading-tight">
            {t.brandShort}

            <span className="block text-[10px] font-normal tracking-[0.18em] text-[#6B6B6B] uppercase mt-0.5">
              {lang === "ne" ? "निजी यात्रा सेवा" : "Private Travel Service"}
            </span>
          </span>
        </a>

        <nav
          className="hidden lg:flex items-center gap-7"
          data-testid="nav-links"
        >
          {LINKS.map((k) => (
            <a
              key={k}
              href={`#${k}`}
              onClick={scrollToId(`#${k}`)}
              data-testid={`nav-${k}-link`}
              className="text-sm text-[#555555] hover:text-[#111111] transition-colors duration-200"
            >
              {t.nav[k]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />

          <a
            href={TEL_LINK}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-5 py-3 text-sm font-semibold text-black hover:bg-[#C38F2F] transition-colors"
          >
            <Phone size={17} />
            {t.hero.callNow}
          </a>

          <button
            data-testid="mobile-menu-button"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#111111] p-2"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-md border-b border-[#E3E3DE]"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map((k) => (
                <a
                  key={k}
                  href={`#${k}`}
                  data-testid={`mobile-nav-${k}-link`}
                  onClick={(e) => {
                    scrollToId(`#${k}`)(e);
                    setOpen(false);
                  }}
                  className="py-3 text-base text-[#555555] hover:text-[#111111] border-b border-[#EAEAE6] transition-colors"
                >
                  {t.nav[k]}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
