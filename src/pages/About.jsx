import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpRight,
  Lightbulb,
  Layers3,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Palette,
  MonitorSmartphone,
  Code2,
  BriefcaseBusiness,
} from "lucide-react"
import { Helmet } from "react-helmet-async"
import { useInView, useMotionValue, useSpring } from "framer-motion"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import TrustedLogos from "../components/TrustedLogos"
import CTASection from "../components/CTASection"
import ScrollProgress from "../components/ScrollProgress"
import FlowCorner from "../components/FlowCorner"
import PageHero from "../components/PageHero"

function Counter({ to, suffix = "" }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(to)
    }
  }, [isInView, motionValue, to])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function AboutPage() {
  // =====================================================
  // CONTENT DATA
  // Easy to update later
  // =====================================================
  const values = [
    {
      icon: Lightbulb,
      title: "Creative Clarity",
      desc: "We turn ideas into digital experiences that are easier to understand, stronger in presentation, and better aligned with real business goals.",
      accent: "from-cyan-500/12 via-sky-500/8 to-transparent",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: Layers3,
      title: "Structured Systems",
      desc: "From websites to digital products, we build with scalable thinking, consistency, and long-term usability in mind.",
      accent: "from-violet-500/12 via-fuchsia-500/8 to-transparent",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      icon: ShieldCheck,
      title: "Refined Execution",
      desc: "We focus on polished interfaces, responsive builds, and the kind of detail that makes digital work feel premium.",
      accent: "from-emerald-500/12 via-teal-500/8 to-transparent",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Rocket,
      title: "Growth Focus",
      desc: "Our work is shaped to improve visibility, strengthen perception, and support meaningful business growth.",
      accent: "from-orange-500/12 via-amber-500/8 to-transparent",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]

  const principles = [
    "Understand the business before designing the experience",
    "Keep interfaces modern, clear, and easy to use",
    "Balance design quality with practical functionality",
    "Build systems that can grow with the brand",
  ]

  const capabilities = [
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Modern interface design focused on clarity, usability, and premium digital presence.",
      accent: "from-violet-500/12 via-fuchsia-500/8 to-transparent",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      icon: MonitorSmartphone,
      title: "Web & Product Design",
      desc: "Websites, apps, and digital products designed to feel structured, intuitive, and conversion-aware.",
      accent: "from-cyan-500/12 via-sky-500/8 to-transparent",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: Code2,
      title: "Development",
      desc: "Responsive, performance-focused development that transforms polished design into working digital products.",
      accent: "from-emerald-500/12 via-teal-500/8 to-transparent",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: BriefcaseBusiness,
      title: "Brand-Led Execution",
      desc: "Creative digital communication that helps brands feel sharper, stronger, and more credible.",
      accent: "from-orange-500/12 via-amber-500/8 to-transparent",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Discover",
      desc: "We begin by understanding your brand, audience, business goals, and the real problem we need to solve.",
    },
    {
      number: "02",
      title: "Strategize",
      desc: "We define structure, experience direction, visual language, and the right digital approach before execution.",
    },
    {
      number: "03",
      title: "Design & Build",
      desc: "We shape the interface, interactions, and development flow into a polished and modern digital experience.",
    },
    {
      number: "04",
      title: "Refine & Launch",
      desc: "We optimize details, improve responsiveness, and deliver a solution that feels complete and ready to perform.",
    },
  ]

  const introStats = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 100, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 25, suffix: "+", label: "Industry Partners" },
  ]

  return (
    <>
      {/* =====================================================
          SEO
          IMPORTANT:
          - Helmet must be inside returned JSX
          - Replace og:image/twitter:image with real image later
      ===================================================== */}
      <Helmet>
        <title>About NIKAITH | UI/UX, Web & Digital Product Design Agency</title>

        <meta
          name="description"
          content="Learn about NIKAITH, a modern digital agency combining design, development, and product thinking to help brands build websites, products, and digital experiences with clarity and purpose."
        />

        <meta
          name="keywords"
          content="about Nikaith, UI UX agency, digital agency, web design agency, product design studio, branding and development"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://nikaith.com/about" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About NIKAITH | UI/UX, Web & Digital Product Design Agency"
        />
        <meta
          property="og:description"
          content="A modern digital agency creating websites, products, and brand experiences with clarity, structure, and premium execution."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nikaith.com/about" />
        <meta
          property="og:image"
          content="https://nikaith.com/works/fintech.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About NIKAITH | UI/UX, Web & Digital Product Design Agency"
        />
        <meta
          name="twitter:description"
          content="A modern digital agency creating websites, products, and brand experiences with clarity, structure, and premium execution."
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
            badge="About NIKAITH"
            title={
              <>
                We create digital experiences
                <br />
                <span className="bg-gradient-to-r from-[#6EE7E0] via-[#3BD0CA] to-[#7CC7FF] bg-clip-text text-transparent">
                  that feel modern, clear,
                </span>
                <br />
                and built for growth
              </>
            }
            description="At NIKAITH, we combine design, development, and product thinking to help brands build stronger digital presence. From websites and interfaces to scalable systems, we create work that feels premium and performs with purpose."
            chips={[
              "Design-led Thinking",
              "Development",
              "Brand Systems",
              "Product Structure",
            ]}
            primaryAction={{ to: "/contact", label: "Start Your Project" }}
            secondaryAction={{ to: "/portfolio", label: "View Portfolio" }}
          />

          {/* =====================================================
              INTRO / STORY
          ===================================================== */}
          <section className="relative overflow-hidden bg-[#F7FAFD] px-6 py-20 md:px-10 lg:px-16">
            <FlowCorner side="left" />
            <div className="pointer-events-none absolute left-0 top-10 h-[260px] w-[260px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(22,54,95,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.7)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[32px] border border-[#E2EBF2]/90 bg-white/88 p-8 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                  Who We Are
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  A modern creative partner for brands that want stronger digital
                  presence, smarter structure, and sharper execution.
                </h2>

                <p className="mt-6 leading-8 text-[#5B6F89]">
                  We work across design, development, and digital communication to
                  help businesses present themselves with more clarity and more
                  confidence.
                </p>

                <p className="mt-4 leading-8 text-[#5B6F89]">
                  Our approach blends visual refinement, functional thinking, and
                  product-minded structure. The result is work that not only looks
                  premium, but also supports growth, usability, and long-term
                  consistency.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(30,65,113,0.18)] transition duration-300 hover:-translate-y-0.5"
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

              <div className="grid grid-cols-2 gap-4">
                {introStats.map((item) => (
                  <div
                    key={item.label}
                    className="group min-h-[150px] rounded-[24px] border border-[#E2EBF2]/90 bg-white/88 px-4 py-4 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:min-h-[190px] md:px-5"
                  >
                    <p className="text-3xl font-black tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-[#16365F] to-[#21B8C6] md:text-[52px]">
                      <Counter to={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C7190] md:text-sm">
                      {item.label}
                    </p>
                    <div className="mt-4 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] opacity-60 transition-all duration-300 group-hover:w-14" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              VALUES
          ===================================================== */}
          <section className="relative overflow-hidden bg-[#F5F9FD] px-6 py-20 md:px-10 lg:px-16">
            <FlowCorner side="right" />
            <div className="pointer-events-none absolute left-0 top-10 h-[260px] w-[260px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(22,54,95,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.55)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="relative mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                  What We Believe
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  Strong digital work happens when clarity, structure, and
                  execution move together
                </h2>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {values.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <article
                      key={index}
                      className="group relative overflow-hidden rounded-[28px] border border-[#E2EBF2]/90 bg-white/88 p-6 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(22,54,95,0.12)]"
                    >
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
                          <Icon size={24} />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-[#0B2546]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#5B6F89]">
                          {item.desc}
                        </p>

                        <div className="mt-6 h-1 w-12 rounded-full bg-[#E7F7F6] transition-all duration-300 group-hover:w-20 group-hover:bg-[#3BD0CA]" />
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          {/* =====================================================
              HOW WE WORK
          ===================================================== */}
          <section className="relative overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">
            <div className="pointer-events-none absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="mx-auto max-w-6xl rounded-[32px] border border-[#E2EBF2]/90 bg-[#F7FAFD] p-8 shadow-[0_14px_35px_rgba(22,54,95,0.06)] md:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                    How We Work
                  </p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                    We keep every project collaborative, practical, and focused on
                    meaningful outcomes.
                  </h2>
                  <p className="mt-5 leading-8 text-[#5B6F89]">
                    Our process is shaped to reduce confusion and improve clarity.
                    We think through the brand, user, and business together so the
                    final experience feels visually strong and functionally sound.
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/70 bg-white/75 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm md:p-7">
                  <div className="grid gap-5">
                  {principles.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-[#DCE6EF] pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="text-lg font-medium leading-8 text-[#324B6B]">
                        {item}
                      </p>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              CAPABILITIES
          ===================================================== */}
          <section className="relative overflow-hidden bg-[#F7FAFD] px-6 py-20 md:px-10 lg:px-16">
            <FlowCorner side="left" />
            <div className="pointer-events-none absolute left-0 top-10 h-[260px] w-[260px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(22,54,95,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.7)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="relative mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                  Capabilities
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  Design, development, and digital execution under one creative
                  direction
                </h2>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {capabilities.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <article
                      key={index}
                      className="group relative overflow-hidden rounded-[28px] border border-[#E2EBF2]/90 bg-white/88 p-6 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(22,54,95,0.12)]"
                    >
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
                          <Icon size={24} />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-[#0B2546]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#5B6F89]">
                          {item.desc}
                        </p>

                        <div className="mt-6 h-1 w-12 rounded-full bg-[#E7F7F6] transition-all duration-300 group-hover:w-20 group-hover:bg-[#3BD0CA]" />
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          {/* =====================================================
              WORKFLOW
          ===================================================== */}
          <section className="relative overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">
            <FlowCorner side="right" />
            <div className="pointer-events-none absolute left-0 top-10 h-[240px] w-[240px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-[#1E4171]/6 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                  Our Workflow
                </p>
                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  A clear path from idea to launch
                </h2>
                <p className="mt-4 text-[#5B6F89]">
                  A structured roadmap that ensures clarity, speed, and premium
                  execution at every stage.
                </p>
              </div>

              {/* Desktop */}
              <div className="relative mt-16 hidden lg:block">
                <div className="absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-transparent via-[#3BD0CA] to-transparent opacity-40" />

                <div className="grid grid-cols-4 gap-6">
                  {process.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                        <div className="absolute inset-0 rounded-full bg-[#3BD0CA]/20 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] text-sm font-bold text-white">
                          {item.number}
                        </div>
                      </div>

                      <div className="mt-8 rounded-[28px] border border-[#E2EBF2]/90 bg-white/90 p-6 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(22,54,95,0.15)]">
                        <div className="absolute inset-x-0 top-0 h-16 rounded-t-[28px] bg-gradient-to-b from-white/60 to-transparent" />

                        <h3 className="text-xl font-bold text-[#0B2546]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#5B6F89]">
                          {item.desc}
                        </p>

                        <div className="mx-auto mt-6 h-[2px] w-12 bg-[#E7F7F6] transition-all duration-300 group-hover:w-20 group-hover:bg-[#3BD0CA]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile */}
              <div className="relative mt-12 space-y-6 lg:hidden">
                <div className="absolute bottom-0 left-[22px] top-0 w-[2px] bg-gradient-to-b from-transparent via-[#3BD0CA] to-transparent opacity-40" />

                {process.map((item, index) => (
                  <div key={index} className="group relative pl-16">
                    <div className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] text-sm font-bold text-white shadow-[0_12px_24px_rgba(30,65,113,0.16)]">
                      {item.number}
                    </div>

                    <div className="rounded-[24px] border border-[#E2EBF2]/90 bg-white/90 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(22,54,95,0.12)]">
                      <h3 className="text-lg font-bold text-[#0B2546]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#5B6F89]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <TrustedLogos />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  )
}
