import React from "react"
import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
} from "lucide-react"
import { Link } from "react-router-dom"
import FlowCorner from "../components/FlowCorner"

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      desc: "We understand your goals, audience, and project direction before starting.",
      icon: Search,
      accent: "from-cyan-500/15 via-sky-500/10 to-transparent",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      number: "02",
      title: "Design",
      desc: "We build wireframes, UI concepts, and clear user journeys for the product.",
      icon: PenTool,
      accent: "from-violet-500/15 via-fuchsia-500/10 to-transparent",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      number: "03",
      title: "Develop",
      desc: "We turn approved designs into fast, scalable, and responsive digital products.",
      icon: Code2,
      accent: "from-emerald-500/15 via-teal-500/10 to-transparent",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      number: "04",
      title: "Test",
      desc: "We refine functionality, fix issues, and ensure a smoother final experience.",
      icon: ShieldCheck,
      accent: "from-orange-500/15 via-amber-500/10 to-transparent",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      number: "05",
      title: "Launch",
      desc: "We go live with confidence and provide support for a better rollout.",
      icon: Rocket,
      accent: "from-blue-500/15 via-indigo-500/10 to-transparent",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:py-20">
      <FlowCorner side="right" />

      {/* Background effects */}
      <div className="pointer-events-none absolute right-0 top-10 h-[300px] w-[300px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[260px] w-[260px] rounded-full bg-[#1E4171]/6 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(22,54,95,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.6)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3BD0CA]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-[#16365F] md:text-5xl">
              A simple process from idea to launch
            </h2>

            <p className="mt-5 text-base leading-7 text-[#61758A] md:text-lg">
              We keep every project structured, collaborative, and focused on
              quality so you get clarity at every stage.
            </p>
          </div>

          {/* Side summary */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E2EBF2]/90 bg-white/85 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm">
              <div className="text-2xl font-extrabold tracking-[-0.03em] text-[#16365F]">
                5
              </div>
              <p className="mt-1 text-sm text-[#61758A]">Clear project stages</p>
            </div>

            <div className="rounded-2xl border border-[#E2EBF2]/90 bg-white/85 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm">
              <div className="text-2xl font-extrabold tracking-[-0.03em] text-[#16365F]">
                100%
              </div>
              <p className="mt-1 text-sm text-[#61758A]">Transparent workflow</p>
            </div>

            <div className="rounded-2xl border border-[#E2EBF2]/90 bg-white/85 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm">
              <div className="text-2xl font-extrabold tracking-[-0.03em] text-[#16365F]">
                Fast
              </div>
              <p className="mt-1 text-sm text-[#61758A]">From strategy to delivery</p>
            </div>
          </div>
        </div>

        {/* Process timeline/cards */}
        <div className="relative mt-12">
          {/* desktop connector line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-[#DCE7F0] via-[#C9D9E7] to-[#DCE7F0] lg:block" />

          <div className="grid gap-5 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-[26px] border border-[#E2EBF2]/90 bg-white/88 p-6 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(22,54,95,0.12)]"
                >
                  {/* soft top sheen */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/70 to-transparent" />

                  {/* hover gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />

                  {/* corner orb */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3BD0CA]/8 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-[#1E4171]/10" />

                  {/* inner border */}
                  <div className="pointer-events-none absolute inset-[1px] rounded-[25px] border border-white/55" />

                  {/* step number ghost */}
                  <div className="absolute right-4 top-3 text-4xl font-extrabold tracking-[-0.04em] text-[#16365F]/6 transition duration-500 group-hover:text-[#16365F]/10">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    {/* top */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.iconBg} ${step.iconColor} shadow-[0_10px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition duration-500 group-hover:scale-110 group-hover:-translate-y-1`}
                      >
                        <Icon size={24} strokeWidth={2.1} />
                      </div>

                      <div className="hidden rounded-full border border-[#D8E4EE] bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1E4171] shadow-sm md:inline-flex">
                        Step {index + 1}
                      </div>
                    </div>

                    {/* content */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3BD0CA]">
                        {step.number}
                      </p>

                      <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#16365F]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#61758A]">
                        {step.desc}
                      </p>
                    </div>

                    {/* tiny depth lines */}
                    <div className="mt-5 space-y-2 opacity-55 transition duration-500 group-hover:opacity-80">
                      <div className="h-[6px] w-20 rounded-full bg-[#E7EEF5]" />
                      <div className="h-[6px] w-12 rounded-full bg-[#EEF3F8]" />
                    </div>
                  </div>

                  {/* bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] transition-all duration-500 group-hover:w-full" />
                </article>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[#E2EBF2]/90 bg-white/85 px-6 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl md:px-8">
          <div>
            <h3 className="text-lg font-bold text-[#16365F] md:text-xl">
              Ready to start your project?
            </h3>
            <p className="mt-1 text-sm text-[#61758A] md:text-base">
              Let’s turn your idea into a clean, scalable digital product.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(30,65,113,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(30,65,113,0.24)]"
          >
            Let’s Talk About Your Project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}