import { Car, Phone, MessageCircle, Facebook, MapPin } from "lucide-react";

import { useLang, translations, TEL_LINK, waLink, FB_LINK } from "@/i18n";
import { scrollToId } from "@/components/Navbar";

const LINKS = ["home", "services", "vehicle", "reviews", "contact"];

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer
      className="relative border-t border-[#E3E3DE] bg-white pt-16 pb-24 md:pb-10"
      data-testid="footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full border border-[#E3E3DE] bg-[#F7F7F3] flex items-center justify-center">
                <Car size={18} className="text-[#D9A441]" />
              </span>

              <span className="font-display font-bold text-[#111111]">
                {t.brand}
              </span>
            </div>

            <p className="mt-4 text-sm text-[#5F5F5F] leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>

            <p className="mt-4 text-xs tracking-wider text-[#888888] uppercase">
              {t.footer.madeIn}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#777777]">
              {t.footer.quickLinks}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {LINKS.map((k) => (
                <a
                  key={k}
                  href={`#${k}`}
                  onClick={scrollToId(`#${k}`)}
                  data-testid={`footer-${k}-link`}
                  className="text-sm text-[#555555] hover:text-[#111111] transition-colors py-1"
                >
                  {t.nav[k]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#777777]">
              {t.footer.contactTitle}
            </p>

            <p className="mt-4 text-sm text-[#555555]">{t.footer.owner}</p>

            <div className="mt-4 space-y-2.5">
              <a
                href={TEL_LINK}
                data-testid="footer-call-link"
                className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] transition-colors"
              >
                <Phone size={14} className="text-[#D9A441]" />
                +977 9763743940
              </a>

              <a
                href={waLink("Namaste!")}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp-link"
                className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] transition-colors"
              >
                <MessageCircle size={14} className="text-green-600" />
                +977 9802759592
              </a>

              <a
                href={FB_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-facebook-link"
                className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] transition-colors"
              >
                <Facebook size={14} className="text-blue-600" />
                Facebook
              </a>

              <p className="flex items-center gap-2.5 text-sm text-[#555555]">
                <MapPin size={14} className="text-red-500" />
                Itahari, Sunsari, Nepal
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E3E3DE] flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-[#888888]">
            © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
          </p>

          <p className="text-xs text-[#888888]">{t.hero.priceNote}</p>
        </div>
      </div>
    </footer>
  );
}
