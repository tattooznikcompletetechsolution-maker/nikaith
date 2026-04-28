import React from "react"
import {
  Figma,
  Palette,
  Monitor,
  Smartphone,
  Database,
  Globe,
  Code2,
  Layers3,
} from "lucide-react"

export default function Technologies() {
  const groups = [
    {
      title: "Design",
      desc: "Tools we use to plan interfaces, build systems, and shape product experiences.",
      icon: Figma,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      items: ["Figma", "Photoshop", "Illustrator", "Canva"],
      accent: "from-violet-500/12 via-fuchsia-500/8 to-transparent",
    },
    {
      title: "Frontend",
      desc: "Modern technologies for responsive websites, product interfaces, and web apps.",
      icon: Monitor,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      accent: "from-cyan-500/12 via-sky-500/8 to-transparent",
    },
    {
      title: "Backend",
      desc: "Flexible foundations for APIs, integrations, and scalable application logic.",
      icon: Database,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      items: ["Node.js", "Express", "Firebase", "REST APIs"],
      accent: "from-emerald-500/12 via-teal-500/8 to-transparent",
    },
    {
      title: "Platforms",
      desc: "Solutions built across business websites, mobile products, dashboards, and systems.",
      icon: Layers3,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      items: ["Web Apps", "Mobile Apps", "Dashboards", "CMS"],
      accent: "from-orange-500/12 via-amber-500/8 to-transparent",
    },
  ]

  const miniStack = [
    { label: "UI Systems", icon: Palette },
    { label: "Responsive Web", icon: Globe },
    { label: "Mobile UX", icon: Smartphone },
    { label: "Clean Code", icon: Code2 },
  ]

  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] px-6 py-16 md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-[#1E4171]/6 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(22,54,95,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.6)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          {/* Left */}
          <div className="relative max-w-xl">
            {/* soft glass backing */}
            <div className="absolute inset-0 -z-10 rounded-[34px] border border-white/60 bg-gradient-to-br from-white/70 via-white/40 to-transparent shadow-[0_28px_70px_rgba(15,23,42,0.05)] backdrop-blur-[8px]" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3BD0CA]">
              Technologies We Use
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-[#16365F] md:text-5xl">
              Modern tools for clean, scalable digital products
            </h2>

            <p className="mt-5 text-base leading-7 text-[#61758A] md:text-lg">
              We use reliable technologies across design, frontend, backend,
              and product delivery to build experiences that perform well and
              stay easy to scale.
            </p>

            {/* Mini stack pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              {miniStack.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E2EBF2]/90 bg-white/90 px-4 py-2 text-sm font-medium text-[#1E4171] shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-[2px]"
                  >
                    <Icon size={16} className="text-[#3BD0CA]" />
                    {item.label}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-5 md:grid-cols-2">
            {groups.map((group) => {
              const Icon = group.icon

              return (
                <article
                  key={group.title}
                  className="group relative overflow-hidden rounded-[28px] border border-[#E2EBF2]/90 bg-white/88 p-6 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(22,54,95,0.12)]"
                >
                  {/* soft top sheen */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/70 to-transparent" />

                  {/* Hover wash */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />

                  {/* soft orb */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3BD0CA]/10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-[#1E4171]/10" />

                  {/* inner border */}
                  <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/55" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${group.iconBg} ${group.iconColor} shadow-[0_10px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition duration-300 group-hover:scale-105 group-hover:-translate-y-1`}
                      >
                        <Icon size={24} strokeWidth={2.1} />
                      </div>

                      <div className="rounded-full border border-white/70 bg-[#EEF8F7]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1E4171] shadow-sm">
                        Stack
                      </div>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-[#16365F]">
                      {group.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#61758A]">
                      {group.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#E2EBF2] bg-[#F7FAFC]/90 px-3 py-2 text-xs font-medium text-[#1E4171] shadow-sm transition duration-300 group-hover:bg-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* decorative depth lines */}
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