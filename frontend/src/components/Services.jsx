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
      className="relative py-16 sm:py-24 lg:py-28 bg-[#0d1014]"
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
                  className="group rounded-2xl border border-white/10 bg-[#14181d] p-6 h-full flex flex-col hover:border-white/20 transition-colors duration-300"
                  data-testid={`service-card-${i}`}
                >
                  <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon size={19} className="text-[#D6A84B]" />
                  </span>

                  <h3 className="font-display mt-5 text-lg font-semibold text-white">
                    {s.t}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed flex-1">
                    {s.d}
                  </p>

                  <a
                    href={waLink(
                      `Namaste! I would like to enquire about: ${translations.en.services.items[i].t}`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`service-${i}-whatsapp-button`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-green-400 hover:text-green-300 transition-colors"
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
