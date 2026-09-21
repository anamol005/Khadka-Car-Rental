import { Quote } from "lucide-react";

import { Reveal, SectionHead } from "@/components/Reveal";

import { useLang, translations } from "@/i18n";

export default function About() {
  const { lang } = useLang();

  const t = translations[lang].about;

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 lg:py-28"
      data-testid="about-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHead
          eyebrow={t.eyebrow}
          title={t.title}
          sub={t.sub}
          testid="about-head"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.chapters.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div
                className="rounded-2xl border border-white/10 bg-[#111419] p-6 sm:p-8 h-full hover:border-white/20 transition-colors duration-300"
                data-testid={`about-chapter-${i}`}
              >
                <span className="font-mono2 text-3xl sm:text-4xl font-semibold text-[#D6A84B]/70">
                  {c.n}
                </span>

                <h3 className="font-display mt-4 text-xl sm:text-2xl font-semibold text-white">
                  {c.t}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {c.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div
            className="mt-10 rounded-2xl border border-white/10 bg-[#111419] p-7 sm:p-9 flex flex-col sm:flex-row gap-5 items-start"
            data-testid="about-quote"
          >
            <span className="w-11 h-11 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Quote className="text-[#D6A84B]" size={19} />
            </span>

            <div>
              <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-medium">
                {t.quote}
              </p>

              <p className="mt-3 text-sm text-zinc-400">{t.quoteBy}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
