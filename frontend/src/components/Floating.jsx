import { useEffect, useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { useLang, translations, TEL_LINK, waLink } from "@/i18n";

export default function Floating() {
  const { lang } = useLang();
  const t = translations[lang].floating;
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const wa = waLink(
    "Namaste! I would like to enquire about a trip with Khadka Car Rental Service.",
  );

  return (
    <>
      <div className="fixed z-50 bottom-24 md:bottom-8 right-4 md:right-8">
        {showMessage && (
          <div className="absolute bottom-16 right-0 w-[280px]">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-[#E3E3DE] bg-white px-4 py-4 pr-10 shadow-lg hover:bg-[#FCFCFA] transition-colors"
            >
              <p className="text-sm font-semibold text-green-600">
                Chat with Sitaram Khadka
              </p>

              <p className="mt-1 text-sm text-[#5F5F5F] leading-relaxed">
                Click for price quote & route availability.
              </p>
            </a>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowMessage(false);
              }}
              className="absolute top-3 right-3 text-[#888888] hover:text-[#111111]"
              aria-label="Close message"
            >
              <X size={16} />
            </button>
          </div>
        )}

        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          data-testid="floating-whatsapp-button"
          className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white shadow-lg hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      <div
        className="fixed z-40 bottom-0 inset-x-0 md:hidden bg-white/98 border-t border-[#E3E3DE] p-3 flex gap-3"
        data-testid="sticky-mobile-bar"
      >
        <a
          href={TEL_LINK}
          data-testid="sticky-call-button"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#D9A441] py-3 text-sm font-semibold text-black hover:bg-[#C38F2F] transition-colors"
        >
          <Phone size={16} />
          {t.call}
        </a>

        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          data-testid="sticky-whatsapp-button"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={16} />
          {t.wa}
        </a>
      </div>
    </>
  );
}
