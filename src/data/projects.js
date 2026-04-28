// =====================================================
// GLOBAL PROJECT DATA
// USE THIS IN:
// - PortfolioPage.jsx
// - CaseStudy.jsx
//
// ORDER FOR CASE STUDIES:
// 1. Spotscape Property Finder
// 2. Nikaith Wallet
// 3. Restaurant Management Platform
// 4. Car Rental App
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
    slug: "restaurant-platform",
    title: "Restaurant Management Platform",
    category: "SaaS",
    type: "case-study",
    heroLabel: "SaaS Product Case Study",
    description:
      "An end-to-end restaurant operations platform designed to streamline orders, inventory, dashboards, and multi-role workflow management through a structured product experience.",
    image: "/portfolio/restaurant/cover.jpg",

    details: {
      overview:
        "The Restaurant Management Platform is a SaaS-based system created to simplify complex restaurant operations. It brings together orders, inventory, staff responsibilities, and operational visibility into one structured experience designed for speed, clarity, and day-to-day efficiency.",
      challenge:
        "Restaurant operations involve multiple roles, time-sensitive tasks, and overlapping workflows. The key challenge was to design a system that could reduce complexity, help teams act faster, and provide better control without making the interface feel overwhelming.",
      solution:
        "A modular dashboard system was introduced to organize tasks more clearly, support role-based usage, and improve operational oversight. The UI focuses on clarity, prioritization, and usability for high-frequency actions across different user types.",
      process: [
        "Operations and workflow research",
        "Task mapping and information architecture",
        "Dashboard wireframing and module planning",
        "Role-based product UI structuring",
      ],
      features: [
        "Order management",
        "Inventory flow visibility",
        "Role-based dashboards",
        "Operational task tracking",
      ],
      results:
        "The platform improves workflow visibility, creates a more structured operational experience, and supports restaurant teams with a scalable interface for faster day-to-day execution.",
      heroImage: "/portfolio/restaurant/hero.jpg",
      screens: [
        "/portfolio/restaurant/screen-1.jpg",
        "/portfolio/restaurant/screen-2.jpg",
        "/portfolio/restaurant/screen-3.jpg",
        "/portfolio/restaurant/screen-4.jpg",
      ],
    },
  },

  {
    slug: "car-rental-app",
    title: "Car Rental App",
    category: "Mobile",
    type: "case-study",
    heroLabel: "Mobile App Case Study",
    description:
      "A mobile-first vehicle rental experience designed to simplify discovery, comparison, and booking through clearer flows and a more conversion-focused reservation journey.",
    image: "/portfolio/car-rental/cover.jpg",

    details: {
      overview:
        "The Car Rental App is a mobile booking concept built to make vehicle discovery and reservation more seamless. The focus was on creating a modern, travel-friendly interface that helps users browse, compare, and confirm bookings with less friction.",
      challenge:
        "Rental products often suffer from cluttered search results, unclear comparison flows, and too many steps between discovery and booking confirmation. The challenge was to reduce friction and make the experience feel faster, cleaner, and more intuitive on mobile.",
      solution:
        "The product was redesigned with a mobile-first structure, stronger visual hierarchy, and a more direct booking journey. Important actions such as browsing vehicles, reviewing options, and confirming reservations were made easier to scan and complete.",
      process: [
        "User journey mapping",
        "Mobile-first wireframing",
        "Booking flow refinement",
        "Visual consistency and conversion optimization",
      ],
      features: [
        "Vehicle discovery",
        "Reservation flow",
        "Booking summary",
        "Mobile-first UX patterns",
      ],
      results:
        "The final experience delivers a cleaner and faster booking journey, improves clarity across key steps, and creates a more user-friendly rental flow designed for conversion.",
      heroImage: "/portfolio/car-rental/hero.jpg",
      screens: [
        "/portfolio/car-rental/screen-1.jpg",
        "/portfolio/car-rental/screen-2.jpg",
        "/portfolio/car-rental/screen-3.jpg",
        "/portfolio/car-rental/screen-4.jpg",
      ],
    },
  },
]