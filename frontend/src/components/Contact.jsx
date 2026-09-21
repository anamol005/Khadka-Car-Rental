import { Phone, MessageCircle, Facebook, MapPin } from "lucide-react";

import { Reveal, SectionHead } from "@/components/Reveal";

import { useLang, translations, TEL_LINK, waLink, FB_LINK } from "@/i18n";

export default function Contact() {
  const { lang } = useLang();

  const t = translations[lang].contact;

  const cards = [
    {
      icon: Phone,
      label: t.callLabel,
      value: "+977 9763743940",
      href: TEL_LINK,
      iconClass: "text-sky-400",
      testid: "contact-call-card",
    },
    {
      icon: MessageCircle,
      label: t.waLabel,
      value: "+977 9802759592",
      href: waLink("Namaste! I would like to enquire about a trip."),
      iconClass: "text-green-500",
      testid: "contact-whatsapp-card",
    },
    {
      icon: Facebook,
      label: t.fbLabel,
      value: "Sitaram Khadka",
      href: FB_LINK,
      iconClass: "text-blue-400",
      testid: "contact-facebook-card",
    },
    {
      icon: MapPin,
      label: t.baseLabel,
      value: t.base,
      href: "https://www.google.com/maps?q=Itahari,Sunsari,Nepal",
      iconClass: "text-red-400",
      testid: "contact-location-card",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-28"
      data-testid="contact-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHead
          eyebrow={t.eyebrow}
          title={t.title}
          sub={t.sub}
          testid="contact-head"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((c, i) => {
              const Icon = c.icon;

              return (
                <Reveal key={c.label} delay={i * 0.06}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    data-testid={c.testid}
                    className="rounded-2xl border border-white/10 bg-[#14181d] p-6 block h-full hover:border-white/20 hover:bg-[#181d23] transition-colors duration-300"
                  >
                    <span className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                      <Icon size={19} className={c.iconClass} />
                    </span>

                    <p className="mt-5 text-xs uppercase tracking-widest text-zinc-500">
                      {c.label}
                    </p>

                    <p className="font-display mt-1.5 text-base font-semibold text-white">
                      {c.value}
                    </p>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.2}>
              <p
                className="text-sm text-zinc-400 sm:col-span-2"
                data-testid="contact-availability"
              >
                {t.availability}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div
              className="rounded-2xl border border-white/10 overflow-hidden min-h-[340px]"
              data-testid="contact-map"
            >
              <iframe
                title="Itahari, Nepal map"
                src="https://www.google.com/maps?q=Itahari,Sunsari,Nepal&z=13&output=embed"
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
