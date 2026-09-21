import { useLang, translations } from "@/i18n";

export default function Marquee() {
  const { lang } = useLang();

  const items = translations[lang].marquee;

  return (
    <div
      className="border-y border-white/10 bg-[#0d1014] py-4"
      data-testid="marquee-strip"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              <span className="text-xs sm:text-sm uppercase tracking-[0.18em] text-zinc-500">
                {item}
              </span>

              {i < items.length - 1 && (
                <span className="hidden sm:inline text-zinc-700">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
