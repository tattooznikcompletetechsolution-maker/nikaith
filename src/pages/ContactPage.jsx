import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollProgress from "../components/ScrollProgress"
import FlowCorner from "../components/FlowCorner"
import PageHero from "../components/PageHero"
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
} from "lucide-react"
import { Helmet } from "react-helmet-async"

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+971 52 793 6638",
      secondary: "+91 94813 50539",
      accent: "from-cyan-500/12 via-sky-500/8 to-transparent",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@nikaith.com",
      secondary: "support@nikaith.com",
      accent: "from-violet-500/12 via-fuchsia-500/8 to-transparent",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      icon: MapPin,
      title: "Locations",
      primary: "Dubai, UAE",
      secondary: "Bangalore, India",
      accent: "from-emerald-500/12 via-teal-500/8 to-transparent",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Clock3,
      title: "Working Hours",
      primary: "Mon - Sat",
      secondary: "9:00 AM - 7:00 PM",
      accent: "from-orange-500/12 via-amber-500/8 to-transparent",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]

  const whyPoints = [
    "Strategic UI/UX and product-led design thinking",
    "Modern websites and scalable app experiences",
    "Premium branding with conversion-focused execution",
    "Collaborative process from concept to launch",
  ]

  const faqs = [
    {
      q: "How quickly can we start?",
      a: "We usually respond within 24 hours and can begin project discussions within a few days depending on the project scope.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes, we work with businesses across the UAE, India, and other international markets through a flexible remote-first workflow.",
    },
    {
      q: "What industries do you work with?",
      a: "We work with startups, SaaS, fintech, real estate, product businesses, and modern service brands.",
    },
    {
      q: "Do you offer custom pricing based on scope?",
      a: "Yes. Every project is quoted based on the goals, complexity, deliverables, and timeline, so you get a proposal that fits the actual work instead of a generic package.",
    },
    {
      q: "Can you handle both design and development together?",
      a: "Yes, we can support the full process from strategy, UI/UX, and brand direction through to development and launch, which helps keep execution more consistent and efficient.",
    },
  ]

  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Helmet>
        <title>Contact NIKAITH | UI/UX, Web & Digital Product Design Agency</title>

        <meta
          name="description"
          content="Contact NIKAITH for UI/UX design, website development, mobile apps, branding, and digital product services. We work with clients in Dubai, India, and worldwide."
        />

        <meta
          name="keywords"
          content="contact Nikaith, contact UI UX agency, web design contact, app development agency, branding agency, digital product design contact"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://nikaith.com/contact" />

        <meta
          property="og:title"
          content="Contact NIKAITH | UI/UX, Web & Digital Product Design Agency"
        />
        <meta
          property="og:description"
          content="Get in touch with NIKAITH for websites, apps, branding, and digital product services for businesses in Dubai, India, and worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nikaith.com/contact" />
        <meta
          property="og:image"
          content="https://nikaith.com/works/fintech.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact NIKAITH | UI/UX, Web & Digital Product Design Agency"
        />
        <meta
          name="twitter:description"
          content="Get in touch with NIKAITH for websites, apps, branding, and digital product services for businesses in Dubai, India, and worldwide."
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
            badge="Let's Build Something Exceptional"
            title={
              <>
                Contact{" "}
                <span className="bg-gradient-to-r from-[#6EE7E0] via-[#3BD0CA] to-[#7CC7FF] bg-clip-text text-transparent">
                  NIKAITH
                </span>
              </>
            }
            description="Have a project in mind, need a design partner, or want to discuss development solutions? Reach out and let's create something thoughtful, modern, and impactful together."
            chips={[
              "Dubai, UAE",
              "Bangalore, India",
              "Web & Product Design",
              "Brand Systems",
            ]}
          />

          <section className="relative overflow-hidden bg-[#F7FAFD] px-6 py-12 md:px-10 lg:px-16">
            <FlowCorner side="left" />
            <div className="pointer-events-none absolute left-0 top-10 h-[240px] w-[240px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(22,54,95,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.7)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="relative mx-auto max-w-6xl">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {contactCards.map((item, index) => {
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
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} shadow-[0_10px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition duration-300 group-hover:scale-105 group-hover:-translate-y-1`}
                        >
                          <Icon size={20} />
                        </div>

                        <h3 className="mt-5 text-lg font-semibold text-[#0B2546]">
                          {item.title}
                        </h3>

                        <div className="mt-3 space-y-1">
                          <p className="text-sm font-medium text-[#16365F]">
                            {item.primary}
                          </p>
                          <p className="text-sm text-[#5B6F89]">
                            {item.secondary}
                          </p>
                        </div>

                        <div className="mt-6 h-1 w-12 rounded-full bg-[#E7F7F6] transition-all duration-300 group-hover:w-20 group-hover:bg-[#3BD0CA]" />
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">
            <div className="pointer-events-none absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#1E4171]/6 blur-3xl" />

            <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[32px] border border-[#E2EBF2]/90 bg-white/88 p-7 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl md:p-9 lg:p-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0B2546]/10 bg-[#F4F8FC] px-4 py-2 text-sm font-medium text-[#16365F]">
                    <MessageSquare size={15} className="text-[#21B8C6]" />
                    Send a Message
                  </div>

                  <h2 className="mt-6 text-3xl font-bold leading-tight text-[#0B2546] md:text-4xl">
                    Start Your Project Conversation
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-7 text-[#5B6F89]">
                    Fill out the form below and we'll get back to you with the
                    right approach for your business, product, or brand.
                  </p>
                </div>

                <form className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2.5 block text-sm font-medium text-[#4F6480]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-[#0B2546]/10 bg-[#F8FBFD] px-4 py-3.5 text-[#0B2546] placeholder:text-[#8AA0B8] outline-none transition focus:border-[#21B8C6]/60 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2.5 block text-sm font-medium text-[#4F6480]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-2xl border border-[#0B2546]/10 bg-[#F8FBFD] px-4 py-3.5 text-[#0B2546] placeholder:text-[#8AA0B8] outline-none transition focus:border-[#21B8C6]/60 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2.5 block text-sm font-medium text-[#4F6480]">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="w-full rounded-2xl border border-[#0B2546]/10 bg-[#F8FBFD] px-4 py-3.5 text-[#0B2546] placeholder:text-[#8AA0B8] outline-none transition focus:border-[#21B8C6]/60 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2.5 block text-sm font-medium text-[#4F6480]">
                        Service Required
                      </label>
                      <select className="w-full rounded-2xl border border-[#0B2546]/10 bg-[#F8FBFD] px-4 py-3.5 text-[#0B2546] outline-none transition focus:border-[#21B8C6]/60 focus:bg-white">
                        <option>UI/UX Design</option>
                        <option>Website Development</option>
                        <option>App Development</option>
                        <option>Branding</option>
                        <option>Digital Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2.5 block text-sm font-medium text-[#4F6480]">
                      Project Details
                    </label>
                    <textarea
                      rows="6"
                      placeholder="Tell us about your project, goals, timeline, or requirements..."
                      className="w-full rounded-2xl border border-[#0B2546]/10 bg-[#F8FBFD] px-4 py-3.5 text-[#0B2546] placeholder:text-[#8AA0B8] outline-none transition focus:border-[#21B8C6]/60 focus:bg-white"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(30,65,113,0.18)] transition duration-300 hover:scale-[1.02]"
                    >
                      Send Inquiry
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </form>
              </div>

              <div className="space-y-6">
                <div className="rounded-[32px] border border-[#E2EBF2]/90 bg-white/88 p-7 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl md:p-8">
                  <h3 className="text-2xl font-bold text-[#0B2546]">
                    Why Work With NIKAITH
                  </h3>

                  <div className="mt-6 space-y-4">
                    {whyPoints.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 border-b border-[#DCE6EF] pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center text-[#21B8C6]">
                          <CheckCircle2 size={18} />
                        </div>
                        <p className="text-sm leading-7 text-[#324B6B]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-[#E2EBF2]/90 bg-white/88 p-7 shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl md:p-8">
                  <h3 className="text-2xl font-bold text-[#0B2546]">
                    Office Presence
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div className="rounded-2xl border border-[#E2EBF2]/90 bg-[#F8FBFD] p-5">
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#21B8C6]">
                        UAE
                      </p>
                      <p className="mt-2 text-lg font-bold text-[#16365F]">
                        Dubai Office
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5B6F89]">
                        Serving businesses, startups, and premium brands across
                        the UAE with design, development, and digital solutions.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2EBF2]/90 bg-[#F8FBFD] p-5">
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#21B8C6]">
                        India
                      </p>
                      <p className="mt-2 text-lg font-bold text-[#16365F]">
                        Bangalore Office
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5B6F89]">
                        Supporting product design, engineering, and creative
                        execution with a scalable remote-first workflow.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#0B2546] via-[#10284A] to-[#12335E] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)] md:p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7DD3FC]">
                    Quick Connect
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight">
                    Let's turn your idea into a polished digital experience.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
                    We help brands and businesses build high-quality digital
                    products, brand systems, and user experiences that stand out.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#F5F9FD] px-6 py-20 md:px-10 lg:px-16">
            <FlowCorner side="right" />
            <div className="pointer-events-none absolute left-0 top-10 h-[240px] w-[240px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(22,54,95,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.55)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="relative mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  FAQs
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#0B2546] md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-[#5B6F89]">
                  Quick answers to help you understand how we work.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {faqs.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setOpenFaq((current) => (current === i ? -1 : i))}
                    className="w-full rounded-[24px] border border-[#E2EBF2]/90 bg-white/88 p-5 text-left shadow-[0_12px_35px_rgba(15,23,42,0.04)] backdrop-blur-sm transition duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-semibold text-[#0B2546]">
                        {item.q}
                      </h4>
                      <span
                        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE6EF] bg-[#F8FBFD] text-[#16365F] transition duration-300 ${
                          openFaq === i ? "rotate-180 text-[#21B8C6]" : ""
                        }`}
                      >
                        <ChevronDown size={18} />
                      </span>
                    </div>

                    {openFaq === i && (
                      <p className="mt-4 pr-10 text-sm leading-7 text-[#5B6F89]">
                        {item.a}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
