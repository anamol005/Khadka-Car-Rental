import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Reveal, SectionHead } from "@/components/Reveal";

import { useLang, translations } from "@/i18n";

export default function FAQ() {
  const { lang } = useLang();

  const t = translations[lang].faq;

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-24 lg:py-28"
      data-testid="faq-section"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <SectionHead
          eyebrow={t.eyebrow}
          title={t.title}
          sub={t.sub}
          testid="faq-head"
        />

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="mt-10 space-y-3"
            data-testid="faq-accordion"
          >
            {t.items.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-white/10 bg-[#111419] px-6 transition-colors data-[state=open]:border-white/20"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-white hover:text-white hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>

                <AccordionContent className="text-sm text-zinc-400 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
