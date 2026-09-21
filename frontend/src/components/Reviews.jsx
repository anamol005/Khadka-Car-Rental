import { Star, MessageCircle } from "lucide-react";

import { Reveal, SectionHead } from "@/components/Reveal";
import { useLang, translations, waLink } from "@/i18n";

export default function Reviews() {
  const { lang } = useLang();
  const t = translations[lang].reviews;

  return (
    <section
      id="reviews"
      className="relative py-10 sm:py-14 lg:py-16 bg-[#F7F7F3]"
      data-testid="reviews-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHead
          eyebrow={t.eyebrow}
          title={t.title}
          sub={t.sub}
          testid="reviews-head"
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((r, i) => (
            <Reveal key={r.name} delay={(i % 4) * 0.08}>
              <div
                className="rounded-2xl border border-[#E3E3DE] bg-white p-6 h-full flex flex-col"
                data-testid={`review-card-${i}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        className="fill-[#D9A441] text-[#D9A441]"
                      />
                    ))}
                  </div>

                  <span className="font-mono2 text-[10px] uppercase tracking-widest text-[#777777] border border-[#E3E3DE] rounded-full px-2 py-0.5">
                    {t.sampleTag}
                  </span>
                </div>

                <p className="mt-4 text-sm text-[#4F4F4F] leading-relaxed flex-1">
                  “{r.text}”
                </p>

                <div className="mt-5 pt-4 border-t border-[#ECECE8]">
                  <p className="text-sm font-semibold text-[#111111]">
                    {r.name}
                  </p>

                  <p className="text-xs text-[#D9A441] mt-0.5">{r.trip}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 text-center">
            <a
              href={waLink(
                "Namaste! I recently travelled with Khadka Car Rental Service and would like to share my experience.",
              )}
              target="_blank"
              rel="noreferrer"
              data-testid="reviews-share-button"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={16} />
              {t.shareCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
