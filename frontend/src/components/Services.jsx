import {
  Plane,
  Navigation,
  Route,
  Mountain,
  Heart,
  Briefcase,
  Users,
  Compass,
  MessageCircle,
} from "lucide-react";

import { Reveal, SectionHead } from "@/components/Reveal";
import { useLang, translations, waLink } from "@/i18n";

const ICONS = [
  Plane,
  Navigation,
  Route,
  Mountain,
  Heart,
  Briefcase,
  Users,
  Compass,
];

export default function Services() {
  const { lang } = useLang();
  const t = translations[lang].services;

  return (
    <section
      id="services"
      className="relative py-10 sm:py-14 lg:py-16 bg-[#F7F7F3]"
      data-testid="services-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHead
          eyebrow={t.eyebrow}
          title={t.title}
          sub={t.sub}
          testid="services-head"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((s, i) => {
            const Icon = ICONS[i];

            return (
              <Reveal key={s.t} delay={(i % 4) * 0.06}>
                <div
                  className="group rounded-2xl border border-[#E3E3DE] bg-white p-6 h-full flex flex-col hover:border-[#D9A441]/60 transition-colors duration-300"
                  data-testid={`service-card-${i}`}
                >
                  <span className="w-11 h-11 rounded-xl bg-[#F5F1E7] border border-[#E8DDC2] flex items-center justify-center">
                    <Icon size={19} className="text-[#D9A441]" />
                  </span>

                  <h3 className="font-display mt-5 text-lg font-semibold text-[#111111]">
                    {s.t}
                  </h3>

                  <p className="mt-2 text-sm text-[#5F5F5F] leading-relaxed flex-1">
                    {s.d}
                  </p>

                  <a
                    href={waLink(
                      `Namaste! I would like to enquire about: ${translations.en.services.items[i].t}`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`service-${i}-whatsapp-button`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle size={14} />
                    {t.enquire}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
