import React, { useEffect, useMemo, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollProgress from "../components/ScrollProgress"
import { Link, useSearchParams } from "react-router-dom"
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  Layers3,
  BriefcaseBusiness,
  LayoutDashboard,
  Globe,
  X,
} from "lucide-react"
import { Helmet } from "react-helmet-async"
import FlowCorner from "../components/FlowCorner"
import PageHero from "../components/PageHero"

const projects = [
  {
    slug: "nikaith-wallet",
    title: "Nikaith Wallet",
    type: "case-study",
    category: "Fintech",
    priority: 2,
    image: "/works/fin-card.jpg",
    desc: "A premium digital wallet product designed with structured flows, scalable UI logic, and a modern fintech-first experience.",
    icon: Monitor,
    accent: "from-cyan-500/10 via-sky-500/5 to-transparent",
    stats: ["65+ Screens", "Fintech UX", "Design System"],
    pills: ["Case Study", "Product Design"],
    details: {
      overview:
        "A modern wallet product focused on clarity, trust, and product-led interaction design.",
      challenge:
        "Simplifying complex financial flows into a seamless user experience.",
      solution:
        "Built structured journeys, refined visual hierarchy, and created a scalable design foundation.",
    },
  },
  {
    slug: "spotscape-property-finder",
    title: "Spotscape",
    type: "case-study",
    category: "Mobile",
    priority: 1,
    image: "/works/spot-card.jpg",
    desc: "A modern real estate mobile app designed for property discovery in Dubai, focusing on map-based search, filtering, and seamless user experience.",
    icon: Smartphone,
    accent: "from-green-500/10 via-emerald-500/5 to-transparent",
    stats: ["Real Estate", "Mobile UX", "Dubai Market"],
    pills: ["Case Study", "Mobile App"],
  },
  {
    slug: "restaurant-platform",
    title: "Restaurant Management Platform",
    type: "case-study",
    category: "SaaS",
    priority: 5,
    image: "/works/fin-card.jpg",
    desc: "An end-to-end restaurant management platform covering order flow, operations, inventory logic, and multi-role product UX.",
    icon: Layers3,
    accent: "from-violet-500/10 via-fuchsia-500/5 to-transparent",
    stats: ["Dashboard UX", "Operations Flow", "Multi-role"],
    pills: ["Case Study", "SaaS Product"],
    details: {
      overview:
        "A scalable management system for restaurants with operational clarity across multiple user roles.",
      challenge:
        "Balancing speed, control, and simplicity across complex workflows.",
      solution:
        "Designed modular dashboards, clean task flows, and a role-based experience architecture.",
    },
  },
  {
    slug: "car-rental-app",
    title: "Car Rental App",
    type: "case-study",
    category: "Mobile",
    priority: 5,
    image: "/works/fin-card.jpg",
    desc: "A mobile-first rental experience designed for vehicle discovery, booking clarity, and frictionless reservation flows.",
    icon: Smartphone,
    accent: "from-emerald-500/10 via-teal-500/5 to-transparent",
    stats: ["Mobile UX", "Booking Flow", "User Journey"],
    pills: ["Case Study", "Mobile App"],
    details: {
      overview:
        "A sleek booking experience for modern vehicle rental services.",
      challenge:
        "Reducing friction in search, comparison, and booking confirmation flows.",
      solution:
        "Created an intuitive mobile journey with simplified selection and strong conversion intent.",
    },
  },
  {
    title: "Trionet",
    type: "live",
    link: "https://trionetglobal.com/",
    category: "Web",
    priority: 1,
    image: "/works/trio-card.jpg",
    desc: "A complete networking accessories brand website for B2B and B2C audiences, built in React with a focus on product visibility and responsive structure.",
    icon: Globe,
    accent: "from-blue-500/10 via-cyan-500/5 to-transparent",
    stats: ["Networking Brand", "B2B & B2C", "React Development"],
    pills: ["Live Website", "React"],
  },
  {
    title: "SRB",
    type: "live",
    link: "https://mysrb.in/",
    category: "Web",
    priority: 2,
    image: "/works/srb-card.jpg",
    desc: "A complete CCTV accessories, AV solutions, tools, and product platform built in React for structured B2B and B2C presentation.",
    icon: Monitor,
    accent: "from-purple-500/10 via-pink-500/5 to-transparent",
    stats: ["CCTV Accessories", "AV Solutions", "React Development"],
    pills: ["Live Website", "React"],
  },
  {
    title: "HP Enterprises",
    type: "live",
    link: "https://hpenterprisess.in/home",
    category: "Web",
    priority: 3,
    image: "/works/hpe-card.jpg",
    desc: "A complete services platform for CCTV, networking, access control, video door phone, electrical systems, home automation, and more.",
    icon: Smartphone,
    accent: "from-orange-500/10 via-amber-500/5 to-transparent",
    stats: ["CCTV", "Networking", "Home Automation"],
    pills: ["Live Website", "Business Platform"],
  },
  {
    title: "Elmur HR Consultancy",
    type: "live",
    link: "https://elmuruae.com/",
    category: "Web",
    priority: 4,
    image: "/works/elmur-card.jpg",
    desc: "A Dubai-based human resource consultancy website built with WordPress and Elementor for professional service presentation and trust-building.",
    icon: BriefcaseBusiness,
    accent: "from-indigo-500/10 via-blue-500/5 to-transparent",
    stats: ["HR Consultancy", "Dubai", "WordPress + Elementor"],
    pills: ["Live Website", "WordPress"],
  },
  {
    title: "Hashruja Tech Infra",
    type: "live",
    link: "https://hashrujatechinfra.in/",
    category: "Web",
    priority: 5,
    image: "/works/hashruja-card.jpg",
    desc: "A complete waterproofing solutions website built using WordPress, designed to communicate services clearly and establish a strong digital presence.",
    icon: Layers3,
    accent: "from-emerald-500/10 via-teal-500/5 to-transparent",
    stats: ["Waterproofing", "Service Website", "WordPress"],
    pills: ["Live Website", "WordPress"],
  },
  {
    slug: "branding-logo-design",
    title: "Branding & Logo Design",
    type: "gallery",
    category: "Design",
    priority: 1,
    image: "/works/branding-card.jpg",
    desc: "Logo design, brand identity systems, and visual direction work created for different businesses and campaigns.",
    icon: LayoutDashboard,
    accent: "from-pink-500/10 via-rose-500/5 to-transparent",
    stats: ["Logo Design", "Brand Identity", "Visual Systems"],
    pills: ["Branding", "Logos", "Identity"],
    galleryAspect: "aspect-square",
    layoutType: "logo-grid",
    galleryImages: [
      "/projects/branding/brand9.jpg",
      "/projects/branding/brand1.jpg",
      "/projects/branding/brand2.jpg",
      "/projects/branding/brand3.jpg",
      "/projects/branding/brand4.jpg",
      "/projects/branding/brand5.jpg",
      "/projects/branding/brand6.jpg",
      "/projects/branding/brand7.jpg",
      "/projects/branding/brand8.jpg",
    ],
  },
  {
    slug: "social-media-creatives",
    title: "Social Media Creatives",
    type: "gallery",
    category: "Design",
    priority: 1,
    image: "/works/social-card.jpg",
    desc: "Social media posts, ad creatives, banners, and campaign visuals built for engagement, promotion, and brand consistency.",
    icon: Globe,
    accent: "from-cyan-500/10 via-sky-500/5 to-transparent",
    stats: ["Social Posts", "Ad Creatives", "Campaign Visuals"],
    pills: ["Instagram", "Ads", "Marketing"],
    galleryAspect: "aspect-[4/5]",
    galleryImages: [
      "/projects/social/social2.jpg",
      "/projects/social/social2.jpg",
      "/projects/social/social2.jpg",
    ],
  },
  {
    slug: "posters-flyers",
    title: "Posters & Flyers",
    type: "gallery",
    category: "Design",
    priority: 3,
    image: "/works/poster-card.jpg",
    desc: "Promotional posters, event flyers, marketing visuals, and campaign creatives designed for strong attention and quick communication.",
    icon: Layers3,
    accent: "from-orange-500/10 via-amber-500/5 to-transparent",
    stats: ["Posters", "Flyers", "Campaign Creatives"],
    pills: ["Promotions", "Print", "Marketing"],
    galleryAspect: "aspect-[3/4]",
    galleryImages: [
      "/projects/flyer/flyer1.jpg",
      "/projects/flyer/flyer2.jpg",
      "/projects/flyer/flyer3.jpg",
      "/projects/flyer/flyer4.jpg",
    ],
  },
]

function GalleryModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#06101dcc] backdrop-blur-md"
      onClick={onClose}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="flex min-h-screen items-center justify-center px-4 py-8 md:px-8 md:py-10">
        <div
          className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#E8EEF5] bg-white/95 px-5 py-4 backdrop-blur-xl md:px-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                Design Showcase
              </p>

              <h3 className="mt-1 text-xl font-bold text-[#16365F] md:text-2xl">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-[#64748B]">
                Replace these dummy creatives with your original posters,
                flyers, social media posts, logos, and brand visuals later.
              </p>
            </div>

            <button
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D8E4EE] bg-white text-[#16365F] transition hover:border-[#21B8C6] hover:text-[#21B8C6]"
            >
              <X size={18} />
            </button>
          </div>

          <div className="overflow-y-auto p-5 md:p-7">
            <div className="mb-5 flex flex-wrap gap-2">
              {project.pills?.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#DDE7F0] bg-[#F8FBFD] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5C7190]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {project.galleryImages?.map((img, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-[22px] border border-[#E5EDF5] bg-[#F8FBFD] shadow-sm"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {project.layoutType === "logo-grid" ? (
                    <div className="flex aspect-square max-h-[220px] items-center justify-center overflow-hidden bg-[#EAF2F8]">
                      <img
                        src={img}
                        alt={`${project.title} creative preview ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                        className="max-h-[80%] max-w-[80%] object-contain transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : (
                    <div
                      className={`${
                        project.galleryAspect || "aspect-[4/5]"
                      } overflow-hidden bg-[#EAF2F8]`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} creative preview ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                        className="h-full w-full select-none object-cover transition duration-300 will-change-transform group-hover:scale-[1.01]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onOpenGallery }) {
  const Icon = project.icon

  const cardContent = (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-20 bg-gradient-to-b from-[#07111F]/10 to-transparent" />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
      />

      <div className="absolute -right-10 -top-10 z-[1] h-28 w-28 rounded-full bg-[#0B2546]/8 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-[#0B2546]/12" />

      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-[#0B2546]/6" />

      <div className="relative overflow-hidden border-b border-[#EEF3F7]">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAF2F8]">
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#07111F]/24 via-[#07111F]/10 to-transparent" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#07111F]/18 via-transparent to-transparent" />

          <img
            src={project.image}
            alt={`${project.title} - ${project.category} project by Nikaith`}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full select-none object-cover transition duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#0B2546]/72 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(7,17,31,0.22)] backdrop-blur-md">
            <Icon size={14} className="opacity-95" />
            {project.category}
          </div>

          <div className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#0B2546]/78 text-white shadow-[0_12px_30px_rgba(7,17,31,0.24)] backdrop-blur-md transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-[#16365F]">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-[#7A8CA5]">
          {project.type === "case-study"
            ? "Case Study"
            : project.type === "gallery"
            ? "Creative Showcase"
            : "Live Website"}
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#16365F]">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#5B6F89]">{project.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full border border-[#E2EBF2] bg-[#F7FAFC]/90 px-3 py-2 text-xs font-medium text-[#1E4171] shadow-sm transition duration-300 group-hover:bg-white"
            >
              {stat}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.pills?.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-[#DDE7F0] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5C7190]"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#16365F] transition duration-300 group-hover:text-[#21B8C6] md:mt-auto">
          {project.type === "case-study"
            ? `View ${project.title} Case Study`
            : project.type === "gallery"
            ? `Open ${project.title} Showcase`
            : `Visit ${project.title} Website`}
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] transition-all duration-500 group-hover:w-full" />
    </>
  )

  const sharedClassName =
    "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D9E4EE] bg-white shadow-[0_18px_40px_rgba(7,17,31,0.14)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(7,17,31,0.22)] cursor-pointer"

  if (project.type === "case-study") {
    return (
      <Link to={`/portfolio/${project.slug}`} className={sharedClassName}>
        {cardContent}
      </Link>
    )
  }

  if (project.type === "gallery") {
    return (
      <button
        type="button"
        onClick={() => onOpenGallery(project)}
        className={`${sharedClassName} text-left`}
      >
        {cardContent}
      </button>
    )
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={sharedClassName}
    >
      {cardContent}
    </a>
  )
}

export default function PortfolioPage() {
  const [searchParams] = useSearchParams()
  const categoryFromURL = searchParams.get("category")

  const [filter, setFilter] = useState(
    categoryFromURL
      ? categoryFromURL.charAt(0).toUpperCase() + categoryFromURL.slice(1)
      : "All"
  )

  const [activeGallery, setActiveGallery] = useState(null)

  useEffect(() => {
    if (categoryFromURL) {
      const formatted =
        categoryFromURL.charAt(0).toUpperCase() + categoryFromURL.slice(1)
      setFilter(formatted)
    } else {
      setFilter("All")
    }
  }, [categoryFromURL])

  const categories = ["All", "Web", "Design", "Fintech", "Mobile", "SaaS"]
  const categoryOrder = ["Web", "Design", "Fintech", "Mobile", "SaaS"]

const filteredProjects = useMemo(() => {
  const list =
    filter === "All"
      ? [...projects]
      : projects.filter((project) => project.category === filter)

  // =====================================================
  // ALL TAB LOGIC
  // priority works globally across every category
  // lower number = show first
  // no priority = pushed to bottom
  // =====================================================
  if (filter === "All") {
    return list.sort((a, b) => {
      const priorityDiff = (a.priority || 999) - (b.priority || 999)
      if (priorityDiff !== 0) return priorityDiff

      // if same priority, keep category order as fallback
      return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
    })
  }

  // =====================================================
  // SINGLE CATEGORY TAB LOGIC
  // only sort by priority inside that category
  // =====================================================
  return list.sort((a, b) => {
    return (a.priority || 999) - (b.priority || 999)
  })
}, [filter])
  return (
    <>
      <Helmet>
        <title>
          Portfolio | UI/UX Designer, Web Design, Mobile App Design & Branding | Nikaith
        </title>

        <meta
          name="description"
          content="Explore the Nikaith portfolio featuring UI/UX design, fintech case studies, SaaS platforms, mobile app design, web design, branding, logo design, posters, flyers, and social media creatives."
        />

        <meta
          name="keywords"
          content="Nikaith portfolio, UI UX designer portfolio, web design portfolio, mobile app design portfolio, branding portfolio, logo design portfolio, fintech case study, SaaS product design, website designer, graphic design portfolio"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Nikaith" />
        <meta name="language" content="English" />

        <link rel="canonical" href="https://nikaith.com/portfolio" />

        <meta
          property="og:title"
          content="Portfolio | UI/UX Designer, Web Design, Mobile App Design & Branding | Nikaith"
        />
        <meta
          property="og:description"
          content="Discover selected work from Nikaith across UI/UX design, mobile apps, fintech products, SaaS platforms, websites, branding, logo design, and creative campaigns."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nikaith.com/portfolio" />
        <meta property="og:site_name" content="Nikaith" />
        <meta
          property="og:image"
          content="https://nikaith.com/works/spotscape.jpg"
        />
        <meta property="og:image:alt" content="Nikaith portfolio preview" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portfolio | UI/UX Designer, Web Design, Mobile App Design & Branding | Nikaith"
        />
        <meta
          name="twitter:description"
          content="Explore UI/UX, web, mobile, SaaS, branding, logo design, posters, flyers, and social media creative work by Nikaith."
        />
        <meta
          name="twitter:image"
          content="https://nikaith.com/works/spotscape.jpg"
        />
        <meta name="twitter:image:alt" content="Nikaith portfolio preview" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Nikaith Portfolio",
            url: "https://nikaith.com/portfolio",
            description:
              "Portfolio page showcasing UI/UX design, web design, mobile app design, branding, logo design, SaaS products, fintech case studies, posters, flyers, and social media creatives.",
            isPartOf: {
              "@type": "WebSite",
              name: "Nikaith",
              url: "https://nikaith.com",
            },
            about: [
              { "@type": "Thing", name: "UI/UX Design" },
              { "@type": "Thing", name: "Web Design" },
              { "@type": "Thing", name: "Mobile App Design" },
              { "@type": "Thing", name: "Branding" },
              { "@type": "Thing", name: "Logo Design" },
              { "@type": "Thing", name: "SaaS Design" },
              { "@type": "Thing", name: "Fintech Product Design" },
            ],
            publisher: {
              "@type": "Organization",
              name: "Nikaith",
              url: "https://nikaith.com",
            },
          })}
        </script>
      </Helmet>

      <Navbar />
      <ScrollProgress />

      <main className="overflow-hidden bg-[#FCFDFF] text-[#0B2546]">
        <PageHero
          badge="Selected Work"
          title={
            <>
              Digital products,
              <br />
              <span className="bg-gradient-to-r from-[#6EE7E0] via-[#3BD0CA] to-[#7CC7FF] bg-clip-text text-transparent">
                websites and creative systems
              </span>
              <br />
              built with clarity
            </>
          }
          description="Explore selected portfolio work by Nikaith across UI/UX design, fintech products, SaaS platforms, mobile app design, website design, branding, logo design, social media creatives, posters, and flyers."
          chips={["Fintech", "Web", "Branding", "Mobile Apps", "Creative Work"]}
          primaryAction={{ to: "/contact", label: "Start Your Project" }}
          secondaryAction={{ to: "/services", label: "Explore Services" }}
        />

        <section className="relative overflow-hidden bg-[#F7FAFD] px-6 py-20 md:px-10 lg:px-16">
          <FlowCorner side="left" />
          <div className="pointer-events-none absolute left-0 top-10 h-[260px] w-[260px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#1E4171]/6 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(22,54,95,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.7)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                Featured Portfolio
              </p>
              <h2 className="text-3xl font-bold text-[#16365F]">
                Featured Portfolio Projects
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-[#5B6F89]">
                Browse selected work across web design, branding, fintech,
                mobile app design, and SaaS product experiences.
              </p>
            </div>

            <div className="mb-12 flex flex-wrap gap-4">
              {categories.map((cat) => {
                const active = filter === cat

                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] text-white shadow-[0_12px_28px_rgba(30,65,113,0.18)]"
                        : "border border-[#0B2546]/10 bg-white text-[#5B6F89] shadow-sm hover:border-[#0B2546]/15 hover:bg-[#F4F8FC]"
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug || `${project.title}-${index}`}
                  project={project}
                  onOpenGallery={setActiveGallery}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-16 md:px-10 lg:px-16">
          <div className="pointer-events-none absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#1E4171]/6 blur-3xl" />
          <div className="relative mx-auto max-w-6xl rounded-[32px] border border-[#E2EBF2]/90 bg-[#F7FAFD] p-8 text-center shadow-[0_14px_35px_rgba(22,54,95,0.06)] md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
              Let’s Build Something Strong
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              Looking for a product, website, or creative system that feels
              premium and performs with clarity?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5B6F89]">
              We help brands shape strong digital experiences through product
              design, branding, websites, and structured visual thinking.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-8 py-4 font-semibold text-white shadow-[0_14px_30px_rgba(30,65,113,0.18)] transition-all duration-300 hover:scale-[1.03]"
              >
                Start Your Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {activeGallery && (
        <GalleryModal
          project={activeGallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </>
  )
}
