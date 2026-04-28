import React from "react"
import {
  ShieldCheck,
  Zap,
  Layers3,
  MessagesSquare,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function WhyChooseUs() {
  const points = [
    {
      title: "Reliable Delivery",
      desc: "Clear timelines, structured execution, and focused output from start to finish.",
      icon: ShieldCheck,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      accent: "from-cyan-500/12 via-sky-500/8 to-transparent",
    },
    {
      title: "Fast & Scalable",
      desc: "Built for today’s needs with the flexibility to support future growth.",
      icon: Zap,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      accent: "from-amber-500/12 via-orange-500/8 to-transparent",
    },
    {
      title: "Design-Led Thinking",
      desc: "Every screen is shaped by usability, clarity, and business purpose.",
      icon: Layers3,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      accent: "from-violet-500/12 via-fuchsia-500/8 to-transparent",
    },
    {
      title: "Clear Communication",
      desc: "Transparent collaboration, faster feedback, and better decision-making throughout.",
      icon: MessagesSquare,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      accent: "from-emerald-500/12 via-teal-500/8 to-transparent",
    },
  ]

  const highlights = [
    "Modern UI/UX with product thinking",
    "Web, app, branding, and marketing support",
    "Clean process with quality-focused execution",
  ]

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:py-20">
      <div className="pointer-events-none absolute left-0 top-16 h-[260px] w-[260px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-[#1E4171]/6 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(22,54,95,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.55)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left Side */}
          <div className="relative max-w-xl">
            <div className="absolute inset-0 -z-10 rounded-[34px] border border-white/60 bg-gradient-to-br from-white/70 via-white/40 to-transparent shadow-[0_28px_70px_rgba(15,23,42,0.05)] backdrop-blur-[8px]" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3BD0CA]">
              Why Choose NIKAITH
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-[#16365F] md:text-5xl">
              Built with clarity, quality, and product thinking
            </h2>

            <p className="mt-5 text-base leading-7 text-[#61758A] md:text-lg">
              We do more than make things look good. NIKAITH builds digital
              experiences that solve problems, support business goals, and stay
              ready for growth.
            </p>

            <div className="mt-7 space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 py-2 transition duration-300"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF8F7] transition duration-300 group-hover:scale-110">
                    <CheckCircle2 size={14} strokeWidth={2.5} className="text-[#3BD0CA]" />
                  </div>
                  <p className="text-base font-semibold text-[#1E4171]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(30,65,113,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(30,65,113,0.24)]"
              >
                Start Your Project
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D8E4EE] bg-white/95 px-5 py-3 text-sm font-semibold text-[#1E4171] shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[#3BD0CA] hover:text-[#3BD0CA]"
              >
                View Portfolio
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-5 md:grid-cols-2">
            {points.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[28px] border border-[#E2EBF2]/90 bg-white/88 p-6 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(22,54,95,0.12)]"
                >
                  {/* soft top sheen */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/70 to-transparent" />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3BD0CA]/10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-[#1E4171]/10" />

                  <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/55" />

                  <div className="relative z-10">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} shadow-[0_10px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition duration-300 group-hover:scale-105 group-hover:-translate-y-1`}
                    >
                      <Icon size={24} strokeWidth={2.1} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-[#16365F]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#61758A]">
                      {item.desc}
                    </p>

                    <div className="mt-5 space-y-2 opacity-55 transition duration-500 group-hover:opacity-80">
                      <div className="h-[6px] w-16 rounded-full bg-[#E7EEF5]" />
                      <div className="h-[6px] w-10 rounded-full bg-[#EEF3F8]" />
                    </div>

                    <div className="mt-6 h-1 w-12 rounded-full bg-[#E7F7F6] transition-all duration-300 group-hover:w-20 group-hover:bg-[#3BD0CA]" />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}