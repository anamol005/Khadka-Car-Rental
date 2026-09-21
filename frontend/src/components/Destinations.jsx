import { MapPin, MessageCircle } from "lucide-react";

import { Reveal, SectionHead } from "@/components/Reveal";

import { useLang, translations, waLink, IMG } from "@/i18n";

export default function Destinations() {
  const { lang } = useLang();

  const t = translations[lang].destinations;

  return (
    <section
      id="destinations"
      className="relative py-16 sm:py-24 lg:py-28 overflow-hidden"
      data-testid="destinations-section"
    >
      <div className="absolute inset-0">
        <img
          src={IMG.nepal}
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[#0b0d10]/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHead
          eyebrow={t.eyebrow}
          title={t.title}
          sub={t.sub}
          testid="destinations-head"
        />

        <Reveal delay={0.15}>
          <p
            className="mt-6 text-sm text-zinc-400"
            data-testid="destinations-note"
          >
            {t.note}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {t.items.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.06}>
              <div
                className="rounded-2xl border border-white/10 bg-[#14181d] p-5 sm:p-6 hover:border-white/20 transition-colors duration-300"
                data-testid={`destination-card-${i}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                      <MapPin size={15} className="text-red-400 shrink-0" />

                      {d.name}
                    </h3>

                    <p className="mt-2 text-xs text-zinc-500">{d.info}</p>
                  </div>

                  <a
                    href={waLink(
                      `Namaste! I would like to enquire about a trip from Itahari to ${translations.en.destinations.items[i].name}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`WhatsApp enquiry for ${d.name}`}
                    data-testid={`destination-${i}-whatsapp-button`}
                    className="w-9 h-9 shrink-0 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <a
              href={waLink(
                "Namaste! I would like to plan a custom trip in Nepal.",
              )}
              target="_blank"
              rel="noreferrer"
              data-testid="destination-custom-card"
              className="rounded-2xl border border-white/10 bg-[#14181d] p-5 sm:p-6 h-full flex items-center justify-center text-center text-white font-display font-semibold hover:border-white/20 hover:bg-[#181d23] transition-colors"
            >
              {t.custom}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
