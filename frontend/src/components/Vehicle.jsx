import { useState } from "react";

import Vehicle360 from "@/components/Vehicle360";

import { Check } from "lucide-react";

import { Reveal, SectionHead } from "@/components/Reveal";

import { useLang, translations } from "@/i18n";

import { scrollToId } from "@/components/Navbar";

export default function Vehicle() {
  const { lang } = useLang();

  const t = translations[lang].vehicle;

  const [tab, setTab] = useState("specs");

  return (
    <section
      id="vehicle"
      className="relative py-16 sm:py-24 lg:py-28 overflow-hidden"
      data-testid="vehicle-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <Vehicle360 />
          </Reveal>

          <div>
            <SectionHead
              eyebrow={t.eyebrow}
              title={t.title}
              sub={t.sub}
              testid="vehicle-head"
            />

            <div
              className="mt-8 inline-flex rounded-full border border-white/10 bg-[#111419] p-1"
              data-testid="vehicle-tabs"
            >
              {[
                ["specs", t.tabSpecs],
                ["comfort", t.tabComfort],
              ].map(([k, label]) => (
                <button
                  key={k}
                  data-testid={`vehicle-tab-${k}`}
                  onClick={() => setTab(k)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    tab === k
                      ? "bg-[#D6A84B] text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {tab === "specs" ? (
              <div
                className="mt-6 flex flex-wrap gap-3"
                data-testid="vehicle-spec-chips"
              >
                {t.chips.map((c) => (
                  <span
                    key={c}
                    className="font-mono2 rounded-full border border-white/10 bg-[#14181d] px-4 py-2 text-xs tracking-wider text-zinc-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            ) : (
              <ul className="mt-6 space-y-4" data-testid="vehicle-comfort-list">
                {t.comfort.map((f) => (
                  <li key={f.t} className="flex gap-3">
                    <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Check size={13} className="text-[#D6A84B]" />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-white">{f.t}</p>

                      <p className="text-sm text-zinc-400">{f.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={scrollToId("#booking")}
              data-testid="vehicle-book-button"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D6A84B] px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#BE8F32]"
            >
              {t.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
