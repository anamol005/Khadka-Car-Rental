import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 20, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{
      duration: 0.5,
      delay,
      ease: "easeOut",
    }}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ eyebrow, title, sub, testid }) => (
  <div className="max-w-3xl" data-testid={testid}>
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
    </Reveal>

    <Reveal delay={0.05}>
      <h2 className="font-display mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
    </Reveal>

    {sub && (
      <Reveal delay={0.1}>
        <p className="mt-4 text-base text-zinc-400 leading-relaxed">{sub}</p>
      </Reveal>
    )}
  </div>
);
