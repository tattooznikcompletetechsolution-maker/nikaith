import React from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpRight,
  Palette,
  MonitorSmartphone,
  Code2,
  BriefcaseBusiness,
  Megaphone,
  Layers3,
  CheckCircle2,
} from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CTASection from "../components/CTASection"
import ScrollProgress from "../components/ScrollProgress"
import FlowCorner from "../components/FlowCorner"
import PageHero from "../components/PageHero"
import { Helmet } from "react-helmet-async"

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "User-focused interface design built for clarity, structure, and premium digital experience.",
      points: [
        "User flows & wireframes",
        "Mobile & web UI design",
        "Dashboard & product UX",
      ],
      tag: "Design Systems",
      accent: "from-violet-500/12 via-fuchsia-500/8 to-transparent",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      icon: MonitorSmartphone,
      title: "Website Design",
      desc: "Modern, responsive website experiences designed to strengthen brand presence and conversions.",
      points: [
        "Corporate websites",
        "Landing pages",
        "Portfolio & business sites",
      ],
      tag: "Web Experience",
      accent: "from-cyan-500/12 via-sky-500/8 to-transparent",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: Code2,
      title: "Website Development",
      desc: "Responsive, scalable builds that turn polished design into fast, functional digital products.",
      points: [
        "Frontend development",
        "Responsive implementation",
        "Performance-focused builds",
      ],
      tag: "Development",
      accent: "from-emerald-500/12 via-teal-500/8 to-transparent",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Layers3,
      title: "Product Design",
      desc: "Structured digital product design for apps, platforms, dashboards, and modern user systems.",
      points: ["Product flows", "App screen design", "Design systems"],
      tag: "Product UX",
      accent: "from-indigo-500/12 via-blue-500/8 to-transparent",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: BriefcaseBusiness,
      title: "Branding",
      desc: "Visual identity and brand-led execution that helps businesses feel sharper, stronger, and more credible.",
      points: ["Brand direction", "Visual identity", "Creative assets"],
      tag: "Brand Identity",
      accent: "from-orange-500/12 via-amber-500/8 to-transparent",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Megaphone,
      title: "Digital Growth",
      desc: "Marketing-focused creative execution that supports visibility, communication, and growth.",
      points: [
        "Campaign creatives",
        "Social media design",
        "Digital brand assets",
      ],
      tag: "Growth Support",
      accent: "from-pink-500/12 via-rose-500/8 to-transparent",
      iconBg: "bg-pink-50",
      iconColor: "text-pink-600",
    },
  ]

  const approach = [
    "Understand the business before building the solution",
    "Shape modern and user-friendly digital experiences",
    "Balance visual polish with strategic functionality",
    "Create scalable systems that support long-term growth",
  ]

  const workflow = [
    {
      number: "01",
      title: "Discover",
      desc: "We understand your business, goals, audience, and the digital opportunity before defining direction.",
    },
    {
      number: "02",
      title: "Structure",
      desc: "We shape the right service approach, content structure, UX logic, and visual system.",
    },
    {
      number: "03",
      title: "Design & Build",
      desc: "We craft polished interfaces, assets, and development outputs aligned with your goals.",
    },
    {
      number: "04",
      title: "Refine",
      desc: "We improve details, optimize execution, and prepare the final experience for launch and growth.",
    },
  ]

  return (
    <>
      <Helmet>
        <title>
          Services | NIKAITH - UI/UX, Web Development, Branding & Growth
        </title>
        <meta
          name="description"
          content="Explore NIKAITH services including UI/UX design, website design, website development, product design, branding, and digital growth support for businesses in Dubai, India, and worldwide."
        />
        <meta
          name="keywords"
          content="UI UX services Dubai, website development services UAE, branding agency India, digital growth services, web design agency global"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://nikaith.com/services" />
        <meta property="og:title" content="NIKAITH Services" />
        <meta
          property="og:description"
          content="UI/UX, website development, branding, product design and digital growth services for Dubai, India and global brands."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nikaith.com/services" />
        <meta
          property="og:image"
          content="https://nikaith.com/works/fintech.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Services | NIKAITH - UI/UX, Web Development, Branding & Growth"
        />
        <meta
          name="twitter:description"
          content="UI/UX, website development, branding, product design and digital growth services for Dubai, India and global brands."
        />
        <meta
          name="twitter:image"
          content="https://nikaith.com/works/fintech.jpg"
        />
      </Helmet>

      <div className="bg-[#FCFDFF] text-[#0B2546]">
        <Navbar />
        <ScrollProgress />

        <main className="overflow-hidden">
          <PageHero
            badge="What We Do"
            title={
              <>
                Services built around
                <br />
                <span className="bg-gradient-to-r from-[#6EE7E0] via-[#3BD0CA] to-[#7CC7FF] bg-clip-text text-transparent">
                  design, technology,
                </span>
                <br />
                and business growth
              </>
            }
            description="NIKAITH helps brands and businesses build modern digital presence through product design, websites, branding, development, and growth-focused creative execution."
            chips={[
              "UI/UX Design",
              "Websites",
              "Development",
              "Branding",
              "Growth Support",
            ]}
            primaryAction={{ to: "/contact", label: "Start Your Project" }}
            secondaryAction={{ to: "/portfolio", label: "View Our Work" }}
          />

          <section className="relative overflow-hidden bg-[#F7FAFD] px-6 py-20 md:px-10 lg:px-16">
            <FlowCorner side="left" />
            <div className="pointer-events-none absolute left-0 top-10 h-[260px] w-[260px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(22,54,95,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.7)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="relative mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                  Core Services
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  Clear service offerings built for modern digital brands
                </h2>
                <p className="mt-4 text-base leading-7 text-[#5B6F89] md:text-lg">
                  A focused set of services designed to help businesses launch
                  faster, communicate better, and grow with more clarity.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => {
                  const Icon = service.icon

                  return (
                    <article
                      key={index}
                      className="group relative overflow-hidden rounded-[28px] border border-[#E2EBF2]/90 bg-white/88 p-7 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4E6F2] hover:shadow-[0_28px_70px_rgba(22,54,95,0.14)]"
                    >
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/70 to-transparent" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                      />
                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3BD0CA]/10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-[#1E4171]/10" />
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background-image:linear-gradient(to_right,rgba(30,65,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,65,113,0.04)_1px,transparent_1px)] [background-size:22px_22px]" />
                      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/55" />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-4">
                          <div className="rounded-full border border-white/70 bg-[#EEF8F7]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1E4171] shadow-sm">
                            {service.tag}
                          </div>

                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} ${service.iconColor} shadow-[0_10px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition duration-300 group-hover:scale-105 group-hover:-translate-y-1`}
                          >
                            <Icon size={24} />
                          </div>
                        </div>

                        <h3 className="mt-6 text-2xl font-bold leading-tight text-[#0B2546]">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-[#5B6F89]">
                          {service.desc}
                        </p>

                        <div className="mt-6 space-y-3">
                          {service.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start gap-3">
                              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF8F7]">
                                <CheckCircle2
                                  size={14}
                                  className="text-[#21B8C6]"
                                />
                              </div>
                              <p className="text-sm text-[#324B6B]">{point}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 h-1 w-12 rounded-full bg-[#E7F7F6] transition-all duration-300 group-hover:w-20 group-hover:bg-[#3BD0CA]" />
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#07111F] px-6 py-20 text-white md:px-10 lg:px-16">
            <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[#3BD0CA]/18 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-[#2A66D0]/18 blur-3xl" />

            <div className="relative mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-12">
              <div className="grid items-start gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3BD0CA]">
                    Our Approach
                  </p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                    We build digital work that feels premium, structured, and
                    aligned with business goals.
                  </h2>
                  <p className="mt-5 leading-8 text-white/70">
                    Every service is shaped through a balance of visual clarity,
                    user experience thinking, and practical execution so the final
                    output is not just attractive, but effective.
                  </p>
                </div>

                <div className="grid gap-4">
                  {approach.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#6EE7E0]">
                        <CheckCircle2 size={20} />
                      </div>
                      <p className="font-medium text-white/85">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#F5F9FD] px-6 py-20 md:px-10 lg:px-16">
            <FlowCorner side="right" />
            <div className="pointer-events-none absolute left-0 top-10 h-[260px] w-[260px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(22,54,95,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.55)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="relative mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                  Service Workflow
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  A clear process from idea to execution
                </h2>
                <p className="mt-4 text-base leading-7 text-[#5B6F89] md:text-lg">
                  A structured workflow that keeps projects focused, collaborative,
                  and ready for delivery.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {workflow.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[28px] border border-[#E2EBF2]/90 bg-white/88 p-6 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(22,54,95,0.12)]"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/70 to-transparent" />
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#3BD0CA]/8 blur-3xl transition duration-500 group-hover:scale-125" />
                    <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/55" />

                    <span className="relative z-10 inline-flex rounded-full bg-[#EAF8F7] px-3 py-1 text-sm font-semibold text-[#18A8B7]">
                      {item.number}
                    </span>

                    <h3 className="relative z-10 mt-4 text-2xl font-bold text-[#0B2546]">
                      {item.title}
                    </h3>

                    <p className="relative z-10 mt-4 text-sm leading-7 text-[#5B6F89]">
                      {item.desc}
                    </p>

                    <div className="relative z-10 mt-6 h-1 w-12 rounded-full bg-[#E7F7F6] transition-all duration-300 group-hover:w-20 group-hover:bg-[#3BD0CA]" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-white px-6 py-16 md:px-10 lg:px-16">
            <div className="pointer-events-none absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#1E4171]/6 blur-3xl" />

            <div className="relative mx-auto max-w-6xl rounded-[32px] border border-[#E2EBF2]/90 bg-[#F7FAFD] p-8 shadow-[0_14px_35px_rgba(22,54,95,0.06)] md:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                    Let's Build
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#0B2546] md:text-3xl">
                    Need a service mix tailored to your business?
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[#5B6F89]">
                    We help brands combine design, development, branding, and
                    growth support into one clear digital direction.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-6 py-4 font-semibold text-white shadow-[0_16px_35px_rgba(30,65,113,0.18)] transition duration-300 hover:-translate-y-0.5"
                >
                  Talk About Your Project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
