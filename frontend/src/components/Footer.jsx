import { Car, Phone, MessageCircle, Facebook, MapPin } from "lucide-react";

import { useLang, translations, TEL_LINK, waLink, FB_LINK } from "@/i18n";

import { scrollToId } from "@/components/Navbar";

const LINKS = [
  "home",
  "about",
  "services",
  "vehicle",
  "destinations",
  "reviews",
  "faq",
  "contact",
];

export default function Footer() {
  const { lang } = useLang();

  const t = translations[lang];

  return (
    <footer
      className="relative border-t border-white/10 bg-[#090b0e] pt-16 pb-24 md:pb-10"
      data-testid="footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full border border-white/10 bg-[#14181d] flex items-center justify-center">
                <Car size={18} className="text-sky-400" />
              </span>

              <span className="font-display font-bold text-white">
                {t.brand}
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>

            <p className="mt-4 text-xs tracking-wider text-zinc-600 uppercase">
              {t.footer.madeIn}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {t.footer.quickLinks}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {LINKS.map((k) => (
                <a
                  key={k}
                  href={`#${k}`}
                  onClick={scrollToId(`#${k}`)}
                  data-testid={`footer-${k}-link`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors py-1"
                >
                  {t.nav[k]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {t.footer.contactTitle}
            </p>

            <p className="mt-4 text-sm text-zinc-400">{t.footer.owner}</p>

            <div className="mt-4 space-y-2.5">
              <a
                href={TEL_LINK}
                data-testid="footer-call-link"
                className="flex items-center gap-2.5 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-sky-400" />
                +977 9763743940
              </a>

              <a
                href={waLink("Namaste!")}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp-link"
                className="flex items-center gap-2.5 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="text-green-500" />
                +977 9802759592
              </a>

              <a
                href={FB_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-facebook-link"
                className="flex items-center gap-2.5 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <Facebook size={14} className="text-blue-400" />
                Facebook
              </a>

              <p className="flex items-center gap-2.5 text-sm text-zinc-400">
                <MapPin size={14} className="text-red-400" />
                Itahari, Sunsari, Nepal
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
          </p>

          <p className="text-xs text-zinc-600">{t.hero.priceNote}</p>
        </div>
      </div>
    </footer>
  );
}
