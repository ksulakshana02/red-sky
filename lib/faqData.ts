export interface FaqItem {
  id: string;
  category: "General & Booking" | "Eco Products & Safety" | "Pricing & Payments" | "Home Access & Keys" | "Guarantees & Insurance";
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  // General & Booking
  {
    id: "g-1",
    category: "General & Booking",
    question: "What is included in a routine maintenance house clean?",
    answer: "Our routine clean covers comprehensive room maintenance: dusting all reachable surfaces, wiping table tops, sanitizing kitchen counters, stove exterior, and sinks, deep scrubbing bathroom toilets, bathtubs, and showers, HEPA vacuuming all rugs and carpets, and steam-mopping hard floors with botanical sanitizers.",
  },
  {
    id: "g-2",
    category: "General & Booking",
    question: "How far in advance should I book my appointment?",
    answer: "We recommend scheduling 2 to 4 days in advance to reserve your preferred arrival window (morning or afternoon). For time-sensitive move-outs or urgent situations, we also maintain dedicated on-call slots and can often accommodate same-day or next-day cleans.",
  },
  {
    id: "g-3",
    category: "General & Booking",
    question: "Do I need to be home while your cleaning team works?",
    answer: "Not at all. Over 70% of our regular clients are at work or running errands during their clean. You can provide a lockbox code, smart lock guest PIN, or leave keys with building concierge. We send an arrival text when we start and a completion text when finished.",
  },
  {
    id: "g-4",
    category: "General & Booking",
    question: "Can I request the same cleaning technician for recurring visits?",
    answer: "Yes, absolutely. For recurring weekly or bi-weekly housekeeping, we pair your home with a dedicated primary technician so they become familiar with your layout, preferences, and special care instructions.",
  },

  // Eco Products & Safety
  {
    id: "p-1",
    category: "Eco Products & Safety",
    question: "Do I need to provide any cleaning products, vacuums, or towels?",
    answer: "No. Our technicians arrive fully equipped with everything required: commercial 4-stage HEPA filtration vacuums, clean color-coded microfiber towels, extension poles, and Green Seal certified plant-based solutions. If you prefer us to use a specific specialty product on antique wood or delicate stone, simply leave it out with instructions.",
  },
  {
    id: "p-2",
    category: "Eco Products & Safety",
    question: "Are your cleaning solutions safe for cats, dogs, and young children?",
    answer: "Yes, 100%. We avoid bleach, synthetic perfumes, and corrosive solvents. Our EPA-registered botanical formulas are powered by thyme extract and citric acid, which kill 99.9% of bacteria and viruses while leaving zero toxic fumes or chemical residues on surfaces where children and pets play.",
  },
  {
    id: "p-3",
    category: "Eco Products & Safety",
    question: "What is your color-coded microfiber cloth system?",
    answer: "To prevent any cross-contamination between rooms, we enforce a strict color protocol: red microfiber cloths are strictly reserved for toilets, yellow for kitchen counters and food preparation areas, and blue for living rooms and bedrooms. Fresh, sanitized sets are used for every appointment.",
  },
  {
    id: "p-4",
    category: "Eco Products & Safety",
    question: "Do your products leave strong chemical scents?",
    answer: "No. Our solutions leave your space smelling naturally clean and neutral—like fresh air. We do not use artificial masking fragrances that can trigger headaches, allergies, or asthma.",
  },

  // Pricing & Payments
  {
    id: "pr-1",
    category: "Pricing & Payments",
    question: "How is pricing calculated for my home?",
    answer: "Pricing is transparent and based on your property's square footage, the number of bedrooms and bathrooms, and the level of service chosen (Standard Maintenance, Deep Clean, or Move-In/Out). You receive a flat-rate price beforehand with no hourly surprises.",
  },
  {
    id: "pr-2",
    category: "Pricing & Payments",
    question: "Are there any hidden travel, parking, or equipment fees?",
    answer: "Never. The price quoted on our website or by our dispatch team is the exact amount you pay. Supplies, equipment, travel within our standard service area, and basic taxes are all included in your rate.",
  },
  {
    id: "pr-3",
    category: "Pricing & Payments",
    question: "When is payment processed?",
    answer: "Payment is processed electronically only after your cleaning is completed. We accept all major credit/debit cards (Visa, MasterCard, American Express) and provide digital receipts for your records.",
  },
  {
    id: "pr-4",
    category: "Pricing & Payments",
    question: "Is tipping expected or required?",
    answer: "Tipping is completely optional and never expected. If your cleaning team went above and beyond, tips can be given in cash or added to your electronic payment, and 100% goes directly to your technicians.",
  },

  // Home Access & Keys
  {
    id: "a-1",
    category: "Home Access & Keys",
    question: "How do you securely manage keys and access codes?",
    answer: "Access codes and keys are tagged anonymously and stored in a secure digital vault accessible only to your assigned technician on the day of your clean. Keys are returned immediately to lockboxes or front desk concierge upon departure.",
  },
  {
    id: "a-2",
    category: "Home Access & Keys",
    question: "What should I do with my pets during the cleaning appointment?",
    answer: "We love pets! For their comfort and safety, we suggest keeping friendly dogs in a comfortable room or crate while technicians vacuum, and ensuring cats cannot accidentally dart through exterior doors as equipment is brought in.",
  },

  // Guarantees & Insurance
  {
    id: "g-5",
    category: "Guarantees & Insurance",
    question: "What is your 24-hour satisfaction guarantee?",
    answer: "If any area or task on your service checklist was missed or does not meet your expectations, let us know within 24 hours. A supervisor will return to re-clean the specific area at no additional charge.",
  },
  {
    id: "g-6",
    category: "Guarantees & Insurance",
    question: "What is your rescheduling or cancellation policy?",
    answer: "We understand that plans change. You can reschedule or cancel your appointment with zero penalty up to 24 hours prior to your scheduled arrival window by phone, email, or online.",
  },
  {
    id: "g-7",
    category: "Guarantees & Insurance",
    question: "Are your technicians bonded, background-checked, and insured?",
    answer: "Yes, completely. Every technician is a W-2 employed team member (not a temporary contractor) who has passed comprehensive nationwide criminal background checks. RedSky carries $2,000,000 in commercial liability and bonding to protect your home and belongings.",
  },
];

