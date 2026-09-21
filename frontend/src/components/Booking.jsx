import { useState } from "react";

import { Phone, Send, CheckCircle2 } from "lucide-react";

import { Reveal, SectionHead } from "@/components/Reveal";
import { useLang, translations, TEL_LINK, waLink } from "@/i18n";

const initial = {
  name: "",
  phone: "",
  pickup: "",
  destination: "",
  date: "",
  time: "",
  tripType: "",
  passengers: "",
  message: "",
};

export default function Booking() {
  const { lang } = useLang();
  const t = translations[lang].booking;

  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setForm({
      ...form,
      [k]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const lines = [
      t.waIntro,
      `${t.name}: ${form.name}`,
      `${t.phone}: ${form.phone}`,
      `${t.pickup}: ${form.pickup}`,
      `${t.destination}: ${form.destination}`,
      `${t.date}: ${form.date}  ${t.time}: ${form.time}`,
      `${t.tripType}: ${form.tripType}`,
      `${t.passengers}: ${form.passengers}`,
      form.message ? `${t.message}: ${form.message}` : null,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank");
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl bg-white border border-[#DCDCD7] px-4 py-3 text-sm text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10 transition-colors";

  const labelCls =
    "block text-xs font-semibold tracking-wider uppercase text-[#666666] mb-2";

  return (
    <section
      id="booking"
      className="relative py-10 sm:py-14 lg:py-16 bg-[#F7F7F3]"
      data-testid="booking-section"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <SectionHead
          eyebrow={t.eyebrow}
          title={t.title}
          sub={t.sub}
          testid="booking-head"
        />

        <Reveal delay={0.1}>
          <div
            className="mt-8 rounded-3xl  border border-[#E3E3DE] bg-white p-6 sm:p-10"
            data-testid="booking-form-card"
          >
            {sent ? (
              <div className="text-center py-10" data-testid="booking-success">
                <CheckCircle2 size={52} className="mx-auto text-green-600" />

                <h3 className="font-display mt-5 text-2xl font-bold text-[#111111]">
                  {t.successTitle}
                </h3>

                <p className="mt-3 text-[#5F5F5F] max-w-md mx-auto">
                  {t.success}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href={TEL_LINK}
                    data-testid="booking-success-call"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-6 py-3 text-sm font-semibold text-black hover:bg-[#C38F2F] transition-colors"
                  >
                    <Phone size={15} />
                    {t.call}
                  </a>

                  <button
                    onClick={() => {
                      setSent(false);
                      setForm(initial);
                    }}
                    data-testid="booking-new-enquiry"
                    className="rounded-full px-6 py-3 text-sm font-semibold text-[#333333] border border-[#D8D8D2] bg-white hover:bg-[#F3F3F0] transition-colors"
                  >
                    {lang === "ne" ? "नयाँ सोधपुछ" : "New Enquiry"}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                data-testid="booking-form"
              >
                <div>
                  <label className={labelCls} htmlFor="bk-name">
                    {t.name}
                  </label>

                  <input
                    id="bk-name"
                    data-testid="booking-name-input"
                    required
                    value={form.name}
                    onChange={set("name")}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls} htmlFor="bk-phone">
                    {t.phone}
                  </label>

                  <input
                    id="bk-phone"
                    data-testid="booking-phone-input"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls} htmlFor="bk-pickup">
                    {t.pickup}
                  </label>

                  <input
                    id="bk-pickup"
                    data-testid="booking-pickup-input"
                    required
                    value={form.pickup}
                    onChange={set("pickup")}
                    placeholder={lang === "ne" ? "उदा. इटहरी" : "e.g. Itahari"}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls} htmlFor="bk-dest">
                    {t.destination}
                  </label>

                  <input
                    id="bk-dest"
                    data-testid="booking-destination-input"
                    required
                    value={form.destination}
                    onChange={set("destination")}
                    placeholder={
                      lang === "ne" ? "उदा. काठमाडौं" : "e.g. Kathmandu"
                    }
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls} htmlFor="bk-date">
                    {t.date}
                  </label>

                  <input
                    id="bk-date"
                    data-testid="booking-date-input"
                    required
                    type="date"
                    value={form.date}
                    onChange={set("date")}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls} htmlFor="bk-time">
                    {t.time}
                  </label>

                  <input
                    id="bk-time"
                    data-testid="booking-time-input"
                    type="time"
                    value={form.time}
                    onChange={set("time")}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls} htmlFor="bk-type">
                    {t.tripType}
                  </label>

                  <select
                    id="bk-type"
                    data-testid="booking-triptype-select"
                    required
                    value={form.tripType}
                    onChange={set("tripType")}
                    className={inputCls}
                  >
                    <option value="" disabled>
                      —
                    </option>

                    {t.tripTypes.map((tt) => (
                      <option key={tt} value={tt}>
                        {tt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelCls} htmlFor="bk-pass">
                    {t.passengers}
                  </label>

                  <input
                    id="bk-pass"
                    data-testid="booking-passengers-input"
                    type="number"
                    min="1"
                    max="5"
                    value={form.passengers}
                    onChange={set("passengers")}
                    className={inputCls}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="bk-msg">
                    {t.message}
                  </label>

                  <textarea
                    id="bk-msg"
                    data-testid="booking-message-input"
                    rows={3}
                    value={form.message}
                    onChange={set("message")}
                    placeholder={t.messagePh}
                    className={inputCls}
                  />
                </div>

                <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    data-testid="booking-submit-button"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
                  >
                    <Send size={15} />
                    {t.submit}
                  </button>

                  <a
                    href={TEL_LINK}
                    data-testid="booking-call-button"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[#C38F2F] transition-colors"
                  >
                    <Phone size={15} />
                    {t.call}
                  </a>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
