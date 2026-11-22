/**
 * FAQ content — written for the people who actually buy facility services:
 * facilities managers, operations managers, strata managers, practice
 * managers and business managers.
 *
 * Answers avoid inventing figures, certificate numbers or guarantees the
 * business has not signed up to. Anything commercial is phrased as "agreed
 * in your contract" rather than as a fixed promise.
 */

export const faqCategories = [
  "Contracts & Scope",
  "Compliance & Safety",
  "Pricing & Invoicing",
  "Getting Started",
  "Our Team",
] as const;

export type FaqCategory = (typeof faqCategories)[number];

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  /* ── Contracts & Scope ── */
  {
    id: "c-1",
    category: "Contracts & Scope",
    question: "What exactly is covered by a cleaning contract?",
    answer:
      "Every contract is built on a written scope of works that lists each area of your site, the tasks performed there, and how often. Daily tasks, weekly tasks and periodic works such as carpet extraction or high-level dusting are set out separately, with the month each periodic task falls due. You get that document before you sign, so there is never a debate about whether something was in scope.",
  },
  {
    id: "c-2",
    category: "Contracts & Scope",
    question: "Can you take over several services so we deal with one supplier?",
    answer:
      "Yes — that is what our facility management offering is for. Cleaning, washroom hygiene, waste, grounds and maintenance coordination can all sit under one agreement with one account manager, one monthly report and one invoice. Most clients start with cleaning and add service lines as existing supplier contracts come up for renewal.",
  },
  {
    id: "c-3",
    category: "Contracts & Scope",
    question: "Do you handle urgent or after-hours callouts?",
    answer:
      "Yes. Contracted sites get an after-hours number that reaches a supervisor rather than a message bank. Response times for urgent, standard and planned work are agreed in your contract so expectations are set in advance. Callouts outside the agreed scope are quoted before we attend unless you have authorised a standing limit.",
  },
  {
    id: "c-4",
    category: "Contracts & Scope",
    question: "How long are your contracts and what happens if we are not happy?",
    answer:
      "Terms are negotiated to suit the site — commonly twelve or twenty-four months, with a break clause and an agreed notice period. If a standard slips, the rectification process and timeframe are written into the agreement, so you have a documented remedy rather than having to escalate by email and hope.",
  },
  {
    id: "c-5",
    category: "Contracts & Scope",
    question: "Can the scope change once the contract has started?",
    answer:
      "Yes. Sites change — floors get fitted out, headcount moves, trading hours shift. We review the scope with you formally every quarter, and you can request a variation at any time. Variations are priced and documented before they take effect, never applied quietly to the next invoice.",
  },

  /* ── Compliance & Safety ── */
  {
    id: "s-1",
    category: "Compliance & Safety",
    question: "What safety documentation do you provide before starting on site?",
    answer:
      "Before mobilisation we provide a site-specific Safe Work Method Statement, the risk assessment behind it, Safety Data Sheets for every chemical we will bring, and certificates of currency for public liability and workers compensation. Where your site runs its own induction or contractor management system, our team completes it before the first shift.",
  },
  {
    id: "s-2",
    category: "Compliance & Safety",
    question: "Are your cleaners police-checked and cleared to work on our site?",
    answer:
      "Every team member holds a current National Police Check. Anyone rostered to an education or childcare site also holds a current Working with Children Check, and anyone working in aged care or a clinical setting meets the screening and immunisation requirements for that sector. Records are held centrally and can be produced for an audit.",
  },
  {
    id: "s-3",
    category: "Compliance & Safety",
    question: "What products and equipment do you use?",
    answer:
      "We default to low-VOC, low-odour chemistry diluted through metered dispensers so concentration is consistent and waste is low. Cleaning is done with colour-coded microfibre to prevent cross-contamination between zones, and vacuums are HEPA-filtered. If your site mandates particular products — a hospital-grade disinfectant, or a chemistry approved by your food-safety plan — we use yours instead.",
  },
  {
    id: "s-4",
    category: "Compliance & Safety",
    question: "How do you handle an infection outbreak?",
    answer:
      "Outbreak response sits outside the standard daily scope and is called on when you need it. The response uses a documented routine: zoning the affected area, a hospital-grade disinfectant applied at the correct contact time, high-touch surfaces treated on a set frequency, and a written record of what was treated and when — which is what an accreditation body or public health unit will ask for afterwards.",
  },
  {
    id: "s-5",
    category: "Compliance & Safety",
    question: "What are you doing to reduce environmental impact?",
    answer:
      "Low-VOC chemistry and metered dilution as standard, microfibre systems that cut both water and chemical use, HEPA filtration to keep fine dust out of the air, and waste separated into the streams your site is obliged to report on. Where you need diversion-rate data for your own sustainability reporting, we can include it in the monthly report.",
  },

  /* ── Pricing & Invoicing ── */
  {
    id: "p-1",
    category: "Pricing & Invoicing",
    question: "Why don't you publish prices?",
    answer:
      "Because a published price for facility services is almost always wrong. Cost depends on floor area, surface types, traffic, frequency, access hours, security requirements and how much periodic work the site needs. We measure the site, write the scope, and quote a fixed monthly figure against it — which is a number you can actually budget on.",
  },
  {
    id: "p-2",
    category: "Pricing & Invoicing",
    question: "How is the contract priced and invoiced?",
    answer:
      "Ongoing cleaning is priced as a fixed monthly amount covering the agreed scope, invoiced monthly in arrears on 30-day terms unless we agree otherwise. Periodic works included in the scope are built into that figure. Additional works and callouts are quoted separately and appear as clearly itemised lines, never bundled into the base charge.",
  },
  {
    id: "p-3",
    category: "Pricing & Invoicing",
    question: "Are consumables included?",
    answer:
      "Either way works. We can supply and manage paper, soap, sanitiser and bin liners and invoice them at cost plus an agreed margin, or we can order on your account and simply manage stock levels so you never run out. Whichever you choose is written into the contract, so there are no surprise consumable charges.",
  },
  {
    id: "p-4",
    category: "Pricing & Invoicing",
    question: "Will the price go up during the contract?",
    answer:
      "Only in the ways your contract allows. Typically that means a scheduled annual review tied to CPI or to award wage movements, applied at the anniversary date with notice. Nothing changes mid-term without a written variation that you have agreed to.",
  },

  /* ── Getting Started ── */
  {
    id: "g-1",
    category: "Getting Started",
    question: "How do we get a quote?",
    answer:
      "Send us the site details through the enquiry form or call us. We will arrange a walkthrough — usually within a few business days — where we measure the areas, note the access and security requirements, and discuss what is and is not working now. You get a written scope and a fixed price back from that visit.",
  },
  {
    id: "g-2",
    category: "Getting Started",
    question: "How quickly can you start?",
    answer:
      "For most sites, two to four weeks from acceptance. That window covers recruiting or assigning the crew, running inductions, ordering equipment and consumables, and setting up the reporting. Where you are in a bind — a supplier has walked, or a site has to open — we can mobilise faster with a temporary crew while the permanent roster is built.",
  },
  {
    id: "g-3",
    category: "Getting Started",
    question: "We already have a cleaning contractor. What does switching involve?",
    answer:
      "Very little on your side. You serve notice on your existing supplier; we handle the rest. We overlap the handover where your notice period allows so there is no gap in service, take a full condition record on day one so pre-existing issues are not attributed to us, and absorb any catch-up work the previous supplier left behind in the mobilisation.",
  },
  {
    id: "g-4",
    category: "Getting Started",
    question: "Do you service sites outside your home state?",
    answer:
      "We service multiple states and regularly run multi-site contracts for clients with portfolios across them. Tell us where the sites are when you enquire and we will confirm coverage honestly — including telling you if a particular location is better served by someone local.",
  },
  {
    id: "g-5",
    category: "Getting Started",
    question: "Can you take on a single small site?",
    answer:
      "Yes. A small office or a single childcare centre is a perfectly normal contract for us, and it is often how a larger portfolio relationship starts. The same written scope, inspection schedule and reporting apply regardless of site size.",
  },

  /* ── Our Team ── */
  {
    id: "t-1",
    category: "Our Team",
    question: "Will we get the same cleaners each visit?",
    answer:
      "Yes — consistency is most of what separates a good contract from a bad one. Each site has an assigned crew who learn its layout, quiet hours and quirks. When someone is on leave we send a trained relief cleaner who has been briefed on your site, not an unfamiliar casual.",
  },
  {
    id: "t-2",
    category: "Our Team",
    question: "Are your cleaners employees or subcontractors?",
    answer:
      "Site crews are employed and paid to the relevant award, with superannuation, insurance and training handled by us. Specialist works such as high-rise façade access or electrical test and tag may be delivered by licensed partners, who are held to the same insurance, induction and safety requirements as our own staff.",
  },
  {
    id: "t-3",
    category: "Our Team",
    question: "Who do we contact when something goes wrong?",
    answer:
      "Your named account manager, directly — mobile and email, not a generic inbox. They inspect your site on a schedule, so they already know it when you call. If they are unavailable, the operations manager above them is listed on your contract as the escalation point.",
  },
  {
    id: "t-4",
    category: "Our Team",
    question: "How do you make sure standards don't slip after the first month?",
    answer:
      "Scheduled supervisor inspections against the written scope, with photographs attached, and a monthly report that shows you the result. Anything scored below standard carries a rectification action with a date. Quarterly, we sit down with you and review performance against the KPIs in the contract rather than against impressions.",
  },
];
