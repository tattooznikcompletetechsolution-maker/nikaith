// =====================================================
// GLOBAL PROJECT DATA
// USE THIS IN:
// - PortfolioPage.jsx
// - CaseStudy.jsx
//
// ORDER FOR CASE STUDIES:
// 1. Spotscape Property Finder
// 2. Nikaith Wallet
// 3. Hospital Management System
//
// TODO:
// - Replace image paths with real final assets
// - Add year / role / tools / duration later if needed
// - Add live links for non-case-study items if you expand this file
// =====================================================

export const projects = [
  {
    slug: "spotscape-property-finder",
    title: "Spotscape Property Finder",
    category: "Mobile",
    type: "case-study",
    heroLabel: "Mobile Product Case Study",
    description:
      "A Dubai-focused real estate mobile app designed to make property discovery faster, clearer, and more intuitive through map-based browsing, smart filters, and streamlined listing exploration.",
    image: "/portfolio/spotscape/cover.jpg",

    details: {
      overview:
        "Spotscape Property Finder is a modern real estate mobile app concept built for users exploring properties in Dubai. The experience focuses on helping users browse listings with more confidence through a map-led interface, better filtering, and clearer property information architecture.",
      challenge:
        "Most real estate platforms overwhelm users with too many listings, crowded interfaces, and filtering systems that feel heavy or confusing. The challenge was to create a property discovery experience that feels simpler, faster, and easier to scan on mobile without losing depth.",
      solution:
        "The product was designed around a map-first browsing experience supported by simplified filters, cleaner listing cards, and stronger visual hierarchy. This approach makes location more meaningful, helps users compare options faster, and reduces friction in the property search journey.",
      process: [
        "User research around property search behavior",
        "Map-based journey planning and UX flow definition",
        "Filter architecture and listing structure refinement",
        "Mobile-first wireframing and UI design system setup",
        "Interaction design focused on speed and clarity",
      ],
      features: [
        "Map-based property discovery",
        "Smart filtering and sorting",
        "Scannable property cards",
        "Saved properties and favorites",
        "Clean mobile navigation",
      ],
      results:
        "The final concept improves browsing clarity, reduces search friction, and creates a more focused property discovery experience tailored to Dubai’s fast-moving real estate market.",
      heroImage: "/portfolio/spotscape/hero.jpg",
      screens: [
        "/portfolio/spotscape/screen-1.jpg",
        "/portfolio/spotscape/screen-2.jpg",
        "/portfolio/spotscape/screen-3.jpg",
        "/portfolio/spotscape/screen-4.jpg",
      ],
    },
  },

  {
    slug: "nikaith-wallet",
    title: "Nikaith Wallet",
    category: "Fintech",
    type: "case-study",
    heroLabel: "Fintech Product Case Study",
    description:
      "A premium digital wallet experience designed with structured UX flows, scalable design systems, and a modern fintech-first approach focused on trust, clarity, and usability.",
    image: "/portfolio/nikaith-wallet/cover.jpg",

    details: {
      overview:
        "Nikaith Wallet is a modern digital payment concept built to simplify financial interactions while maintaining a strong sense of trust, security, and usability. The product experience was shaped around clean visual hierarchy, structured flows, and a scalable design system that can support future growth.",
      challenge:
        "Many wallet apps feel visually dense and operationally complex. Core actions such as sending money, checking history, or understanding balances often create friction because of poor hierarchy and overloaded flows. The challenge was to design something more intuitive, premium, and reliable without losing functionality.",
      solution:
        "The experience was restructured through simplified user flows, clearer navigation patterns, and a modular design language. By reducing cognitive load and highlighting core actions more effectively, the interface becomes faster to understand and easier to use across key financial journeys.",
      process: [
        "User flow mapping and journey simplification",
        "Wireframing for transaction clarity",
        "Design system creation with tokens and components",
        "High-fidelity UI design for consistency and scale",
        "Fintech interaction refinement for trust and usability",
      ],
      features: [
        "Send and receive money flows",
        "Transaction history visibility",
        "QR-based payments",
        "Secure authentication",
        "Scalable dashboard structure",
      ],
      results:
        "The redesigned wallet experience creates a clearer and more trustworthy product, improves usability across key financial tasks, and establishes a visual system ready for future fintech feature expansion.",
      heroImage: "/portfolio/nikaith-wallet/hero.jpg",
      screens: [
        "/portfolio/nikaith-wallet/screen-1.jpg",
        "/portfolio/nikaith-wallet/screen-2.jpg",
        "/portfolio/nikaith-wallet/screen-3.jpg",
        "/portfolio/nikaith-wallet/screen-4.jpg",
      ],
    },
  },

  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    category: "SaaS",
    type: "case-study",
    heroLabel: "SaaS Product Case Study",
    description:
      "A hospital operations SaaS platform designed to simplify appointments, patient records, billing, department workflows, and administrative visibility through a structured product experience.",
    image: "/works/saas.jpg",

    details: {
      overview:
        "The Hospital Management System is a SaaS-based platform created to simplify complex healthcare operations. It brings together appointments, patient records, department coordination, billing, and staff responsibilities into one structured experience designed for speed, clarity, and daily operational efficiency.",
      challenge:
        "Hospital operations involve multiple departments, time-sensitive decisions, patient-facing workflows, and administrative coordination. The key challenge was to design a system that reduces complexity, improves visibility, and supports faster action without making the interface feel overwhelming.",
      solution:
        "A modular dashboard system was introduced to organize hospital tasks more clearly, support role-based usage, and improve oversight across departments. The UI focuses on clarity, prioritization, and usability for high-frequency actions across medical, front-desk, and admin teams.",
      process: [
        "Hospital workflow and stakeholder research",
        "Task mapping and healthcare information architecture",
        "Dashboard wireframing and module planning",
        "Role-based product UI structuring",
      ],
      features: [
        "Appointment management",
        "Patient record visibility",
        "Role-based dashboards",
        "Billing and operational tracking",
      ],
      results:
        "The platform improves workflow visibility, creates a more structured healthcare operations experience, and supports hospital teams with a scalable interface for faster day-to-day execution.",
      heroImage: "/works/saas.jpg",
      screens: [
        "/works/saas-1.jpg",
        "/works/saas-2.jpg",
        "/works/saas-3.jpg",
        "/works/saas-4.jpg",
      ],
    },
  },

]
