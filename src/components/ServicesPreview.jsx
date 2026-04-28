import React from "react"
import {
  ArrowUpRight,
  LayoutDashboard,
  MonitorSmartphone,
  Smartphone,
  Megaphone,
  CheckCircle2,
} from "lucide-react"
import { Link } from "react-router-dom"
import FlowCorner from "../components/FlowCorner"

export default function ServicesPreview() {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Clear product flows, scalable design systems, and polished interfaces for digital products.",
      tag: "Design Systems",
      icon: LayoutDashboard,
      size: "large",
      accent: "from-violet-500/15 via-fuchsia-500/10 to-transparent",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      title: "Website Development",
      desc: "Premium websites built for speed, clarity, and better conversion.",
      tag: "Web Experience",
      icon: MonitorSmartphone,
      size: "small",
      accent: "from-cyan-500/15 via-sky-500/10 to-transparent",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      title: "App Development",
      desc: "Modern web and mobile applications designed for growth and usability.",
      tag: "Product Build",
      icon: Smartphone,
      size: "small",
      accent: "from-emerald-500/15 via-teal-500/10 to-transparent",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Branding & Digital Marketing",
      desc: "Brand identity, social media creatives, and digital campaigns that help businesses grow online.",
      tag: "Brand Growth",
      icon: Megaphone,
      size: "wide",
      accent: "from-orange-500/15 via-amber-500/10 to-transparent",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]

  const leftPoints = [
    "UI/UX design with product thinking",
    "Web and app development under one team",
    "Branding and digital growth support",
  ]

  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] px-6 py-16 md:py-20">
      <FlowCorner side="left" />

      {/* Ambient background */}
      <div className="pointer-events-none absolute left-0 top-10 h-[340px] w-[340px] rounded-full bg-[#3BD0CA]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[18%] top-[22%] h-[220px] w-[220px] rounded-full bg-[#1E4171]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] bottom-[8%] h-[240px] w-[240px] rounded-full bg-[#8AD8FF]/10 blur-3xl" />

      {/* Soft grid wash */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(22,54,95,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.7)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left Content */}
          <div className="relative">
            {/* Decorative glass panel */}
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-white/60 bg-gradient-to-br from-white/75 via-white/45 to-transparent shadow-[0_30px_80px_rgba(15,23,42,0.05)] backdrop-blur-[8px]" />

            {/* Soft 3D layer */}
            <div className="absolute left-8 top-8 -z-10 hidden h-[76%] w-[82%] rounded-[32px] border border-[#E9F0F6]/70 bg-white/35 shadow-[0_20px_60px_rgba(59,208,202,0.07)] backdrop-blur-sm lg:block" />

            {/* Particle cluster */}
            <div className="pointer-events-none absolute -left-3 top-24 hidden lg:block">
              <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-[#3BD0CA]/80 animate-pulse" />
              <span className="absolute left-10 top-8 h-2 w-2 rounded-full bg-[#1E4171]/30 animate-pulse [animation-delay:200ms]" />
              <span className="absolute left-24 top-3 h-3 w-3 rounded-full bg-[#3BD0CA]/40 animate-pulse [animation-delay:500ms]" />
              <span className="absolute left-20 top-16 h-1.5 w-1.5 rounded-full bg-[#1E4171]/40 animate-pulse [animation-delay:700ms]" />
            </div>

            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3BD0CA]">
                Our Services
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-[#16365F] md:text-5xl">
                Design, development, and growth services for modern brands
              </h2>

              <p className="mt-5 text-base leading-7 text-[#61758A] md:text-lg">
                We combine strategy, UX, development, branding, and marketing
                to create digital experiences that look refined, perform better,
                and help businesses grow with confidence.
              </p>

              <div className="mt-7 space-y-3">
                {leftPoints.map((point) => (
                  <div
                    key={point}
                    className="group flex items-center gap-3 py-2 transition duration-300"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF8F7] transition duration-300 group-hover:scale-110">
                      <CheckCircle2 size={14} strokeWidth={2.5} className="text-[#3BD0CA]" />
                    </div>
                    <p className="text-base font-semibold text-[#1E4171]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon

              const cardClass =
                service.size === "large"
                  ? "lg:row-span-2 min-h-[320px]"
                  : service.size === "wide"
                  ? "lg:col-span-2 min-h-[200px]"
                  : "min-h-[170px]"

              return (
                <article
                  key={service.title}
                  className={`group relative overflow-hidden rounded-[28px] border border-[#E2EBF2]/90 bg-white/88 p-6 md:p-7 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4E6F2] hover:shadow-[0_28px_70px_rgba(22,54,95,0.14)] ${cardClass}`}
                >
                  {/* Subtle glass top sheen */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/65 to-transparent opacity-90" />

                  {/* Gradient wash */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />

                  {/* Orb */}
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#3BD0CA]/10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-[#1E4171]/10" />

                  {/* Secondary orb */}
                  <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-white/40 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Grid pattern */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background-image:linear-gradient(to_right,rgba(30,65,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,65,113,0.04)_1px,transparent_1px)] [background-size:22px_22px]" />

                  {/* Inner border for 3D feel */}
                  <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/50" />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex rounded-full border border-white/70 bg-[#EEF8F7]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1E4171] shadow-sm">
                        {service.tag}
                      </div>

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} ${service.iconColor} shadow-[0_10px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition duration-500 group-hover:scale-110 group-hover:-translate-y-1`}
                      >
                        <Icon size={26} strokeWidth={2.1} />
                      </div>
                    </div>

                    {/* Middle */}
                    <div className="mt-6">
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-[#16365F] md:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-[#61758A] md:text-[15px]">
                        {service.desc}
                      </p>
                    </div>

                    {/* Decorative mock lines for depth */}
                    <div className="mt-5 space-y-2 opacity-60 transition duration-500 group-hover:opacity-80">
                      <div className="h-[6px] w-24 rounded-full bg-[#E7EEF5]" />
                      <div className="h-[6px] w-16 rounded-full bg-[#EDF3F8]" />
                    </div>

                    {/* Bottom */}
                    <div className="mt-auto flex items-end justify-between pt-8">
                      <Link
                        to="/services"
                        className="text-sm font-semibold text-[#1E4171] transition duration-300 group-hover:text-[#3BD0CA]"
                      >
                        Learn More
                      </Link>

                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D8E4EE] bg-white/95 text-[#1E4171] shadow-sm transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-[#3BD0CA] group-hover:bg-[#3BD0CA] group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] transition-all duration-500 group-hover:w-full" />
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}