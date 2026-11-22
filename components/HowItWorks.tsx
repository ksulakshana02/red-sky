import { engagementSteps } from "@/lib/services";
import Reveal from "@/components/Reveal";

/**
 * Mobilisation path. Lives on /quote rather than the home page — it
 * answers "what happens after I hit send", which is the question people
 * have once they're already filling the form in.
 */
export default function HowItWorks({ tinted = true }: { tinted?: boolean }) {
  return (
    <section
      id="how-it-works"
      className={`py-20 sm:py-24 scroll-mt-24 ${tinted ? "bg-surface" : "bg-white"}`}
    >
      <div className="shell">
        <Reveal className="max-w-xl mb-12 sm:mb-14">
          <span className="eyebrow eyebrow-accent mb-4">What happens next</span>
          <h2 className="text-[30px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-[1.15] mb-3">
            From first call to first shift
          </h2>
          <p className="text-body/75 text-base sm:text-lg">
            Most sites are mobilised in two to four weeks.
          </p>
        </Reveal>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {engagementSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 0.08} className="relative">
              {/* Connector — desktop only, never after the last step */}
              {i < engagementSteps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-6 left-[52px] right-[-28px] h-px bg-line-strong"
                />
              )}

              <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-600 text-white text-[15px] font-semibold mb-5 shadow-[var(--shadow-brand)]">
                {s.step}
              </span>
              <h3 className="text-[17px] font-medium text-ink mb-2">{s.title}</h3>
              <p className="text-[14.5px] text-body/70 leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
