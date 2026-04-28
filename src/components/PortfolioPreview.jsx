import React from "react"
import { ArrowUpRight, Monitor, Smartphone, Layers3 } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const works = [
  {
    title: "Nikaith Wallet",
    slug: "nikaith-wallet",
    type: "case-study",
    category: "Fintech Product",
    description:
      "A premium digital wallet experience redesigned with structured flows, modern UI, and scalable product logic.",
    image: "/works/fintech.jpg",
    icon: Monitor,
    accent: "from-[#3BD0CA]/12 to-[#1E4171]/8",
    stats: ["65+ Screens", "Fintech UX", "Design System"],
  },
  {
    title: "Spotscape",
    slug: "spotscape-property-finder",
    type: "case-study",
    category: "Smart Real Estate Platform",
    description:
      "Simplifying property discovery through a seamless mobile-first experience that helps users explore, compare, and discover real estate opportunities with clarity.",
    image: "/works/spotscape.jpg",
    icon: Layers3,
    accent: "from-[#A93CFF]/12 to-[#FF3DA8]/8",
    stats: ["Multi-role UX", "Operations Flow", "Dashboard System"],
  },
  {
    title: "Trionet — Networking & Infrastructure Platform",
    slug: "/portfolio?category=web",
    type: "portfolio-page",
    category: "Networking Platform",
    description:
      "A fully responsive React-based platform designed to showcase end-to-end networking solutions for B2B and B2C audiences with better product clarity and usability.",
    image: "/works/trionet.jpg",
    icon: Smartphone,
    accent: "from-[#00C853]/12 to-[#00B86B]/8",
    stats: [
      "Networking Solutions",
      "B2B & B2C Platform",
      "Product Architecture",
      "React Development",
    ],
  },
]

function WorkCard({ item, featured = false }) {
  const Icon = item.icon
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (item.type === "case-study") {
      navigate(`/portfolio/${item.slug}`)
    } else {
      navigate(item.slug)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleNavigate()
    }
  }

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      className={`group relative cursor-pointer overflow-hidden rounded-[28px] border border-[#E2EBF2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(22,54,95,0.10)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative overflow-hidden border-b border-[#EEF3F7]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className={`w-full object-cover will-change-transform transition-transform duration-300 group-hover:scale-[1.015] ${
            featured ? "h-[280px] md:h-[340px]" : "h-[240px] md:h-[260px]"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#16365F]/45 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1E4171]">
          <Icon size={14} className="text-[#3BD0CA]" />
          {item.category}
        </div>

        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#1E4171] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#3BD0CA] group-hover:text-white">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-7">
        <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#16365F]">
          {item.title}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#61758A] md:text-[15px]">
          {item.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full border border-[#E2EBF2] bg-[#F7FAFC] px-3 py-2 text-xs font-medium text-[#1E4171]"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] transition-all duration-300 group-hover:w-full" />
    </article>
  )
}

export default function PortfolioPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:py-20">
      <div className="pointer-events-none absolute left-0 top-10 h-[220px] w-[220px] rounded-full bg-[#3BD0CA]/6 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#1E4171]/5 blur-2xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3BD0CA]">
              Featured Work
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-[#16365F] md:text-5xl">
              Selected work shaped by product thinking
            </h2>

            <p className="mt-5 text-base leading-7 text-[#61758A] md:text-lg">
              A snapshot of digital products and platforms designed for clarity,
              usability, and long-term growth.
            </p>
          </div>

          <div className="flex lg:justify-end">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D8E4EE] bg-[#F7FAFC] px-5 py-3 text-sm font-semibold text-[#1E4171] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#3BD0CA] hover:text-[#3BD0CA]"
            >
              View Full Portfolio
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <WorkCard item={works[0]} featured />
          <WorkCard item={works[1]} />
          <WorkCard item={works[2]} />
        </div>
      </div>
    </section>
  )
}