import React, { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { projects } from "../data/projects"

const caseStudyVisuals = {
  "spotscape-property-finder": {
    hero: "/works/spotscape.jpg",
    screens: [
      "/works/ssr.jpg",
      "/works/ssp.jpg",
    ],
  },
  "nikaith-wallet": {
    hero: "/works/fintech.jpg",
    screens: [
      "/works/fintech1.jpg",
      "/works/fintech2.jpg",
    ],
  },
  "hospital-management-system": {
    hero: "/works/saas.jpg",
    screens: [
      "/works/saas1.jpg",
      "/works/saas2.jpg",
    ],
  },
}

function ImagePlaceholder({ label, src, className = "h-full w-full object-cover" }) {
  const placeholderSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#EFF6FF" />
          <stop offset="55%" stop-color="#F8FBFD" />
          <stop offset="100%" stop-color="#E6FFFB" />
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3BD0CA" />
          <stop offset="100%" stop-color="#1E4171" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" rx="32" fill="url(#bg)" />
      <rect x="64" y="64" width="1072" height="672" rx="28" fill="#FFFFFF" opacity="0.88" />
      <rect x="116" y="132" width="300" height="18" rx="9" fill="#D7E6F3" />
      <rect x="116" y="176" width="520" height="54" rx="16" fill="#183B67" opacity="0.92" />
      <rect x="116" y="252" width="420" height="16" rx="8" fill="#8AA0B8" opacity="0.75" />
      <rect x="116" y="284" width="380" height="16" rx="8" fill="#8AA0B8" opacity="0.55" />
      <rect x="116" y="362" width="968" height="250" rx="24" fill="#F4F8FC" />
      <rect x="156" y="404" width="200" height="150" rx="18" fill="#FFFFFF" />
      <rect x="388" y="404" width="300" height="150" rx="18" fill="#FFFFFF" />
      <rect x="720" y="404" width="324" height="150" rx="18" fill="#FFFFFF" />
      <rect x="156" y="646" width="120" height="8" rx="4" fill="url(#accent)" opacity="0.9" />
      <text x="600" y="708" text-anchor="middle" fill="#5B6F89" font-size="32" font-family="Arial, sans-serif">
        Replace with final project image
      </text>
    </svg>
  `)

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#E2EBF2] bg-[#F4F8FC] shadow-sm">
      <img
        src={src || `data:image/svg+xml;charset=UTF-8,${placeholderSvg}`}
        alt={label}
        className={className}
      />
      <div className="border-t border-[#E2EBF2] bg-white/90 px-5 py-4 text-center text-sm font-medium text-[#5B6F89]">
        {label}
      </div>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const caseStudies = projects.filter((project) => project.type === "case-study")
  const projectIndex = caseStudies.findIndex((p) => p.slug === slug)
  const project = caseStudies[projectIndex]

  const nextProject = useMemo(() => {
    if (projectIndex === -1) return null
    return caseStudies[(projectIndex + 1) % caseStudies.length]
  }, [projectIndex, caseStudies])

  const prevProject = useMemo(() => {
    if (projectIndex === -1) return null
    return caseStudies[(projectIndex - 1 + caseStudies.length) % caseStudies.length]
  }, [projectIndex, caseStudies])

  const projectVisuals = caseStudyVisuals[slug] || {}
  const processLabels = [
    "Discover",
    "Structure",
    "Design",
    "Refine",
    "Optimize",
    "Launch",
  ]

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="bg-white px-6 py-32 text-center text-[#0B2546]">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-[#5B6F89]">
            The project you are trying to view is unavailable or the link may have changed.
          </p>
          <Link
            to="/portfolio"
            className="mt-6 inline-flex items-center gap-2 text-[#21B8C6]"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} Case Study | Nikaith`}</title>
        <meta name="description" content={project.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href={`https://nikaith.com/portfolio/${project.slug}`}
        />
        <meta property="og:title" content={`${project.title} Case Study | Nikaith`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://nikaith.com/portfolio/${project.slug}`}
        />
        <meta
          property="og:image"
          content={`https://nikaith.com${projectVisuals.hero || "/works/fintech.jpg"}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${project.title} Case Study | Nikaith`}
        />
        <meta name="twitter:description" content={project.description} />
        <meta
          name="twitter:image"
          content={`https://nikaith.com${projectVisuals.hero || "/works/fintech.jpg"}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            headline: `${project.title} Case Study`,
            description: project.description,
            url: `https://nikaith.com/portfolio/${project.slug}`,
            image: `https://nikaith.com${projectVisuals.hero || "/works/fintech.jpg"}`,
            author: {
              "@type": "Organization",
              name: "Nikaith",
              url: "https://nikaith.com",
            },
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="bg-white text-[#0B2546]">
        {/* =====================================================
            HERO
            TODO:
            - Add year / role / tools / duration if needed
            - Replace hero visual with real project mockup later
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#FCFDFF] px-6 pb-24 pt-32 md:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.9),transparent_34%),radial-gradient(circle_at_top_right,rgba(204,251,241,0.85),transparent_30%),linear-gradient(180deg,#F9FCFF_0%,#F4F8FC_100%)]" />
          <div className="absolute -left-[8%] top-[2%] h-[280px] w-[280px] rounded-full bg-[#BFDBFE]/70 blur-[90px]" />
          <div className="absolute right-[-5%] top-[10%] h-[240px] w-[240px] rounded-full bg-[#CCFBF1]/80 blur-[90px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5D728D] transition hover:text-[#21B8C6]"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                  {project.heroLabel || project.category}
                </p>

                <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-[#16365F] sm:text-5xl md:text-6xl lg:text-[64px]">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#61758A]">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2">
                <div className="rounded-[24px] border border-[#DCE6EF] bg-white/88 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7A8CA5]">
                    Category
                  </p>
                  <p className="mt-3 text-base font-semibold text-[#16365F]">
                    {project.category}
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#DCE6EF] bg-white/88 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7A8CA5]">
                    Type
                  </p>
                  <p className="mt-3 text-base font-semibold text-[#16365F]">
                    Case Study
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#DCE6EF] bg-white/88 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm md:col-span-1 lg:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7A8CA5]">
                    Focus
                  </p>
                  <p className="mt-3 text-base font-semibold text-[#16365F]">
                    Product thinking, visual clarity, and scalable UX systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HERO VISUAL
            TODO:
            Replace placeholder with:
            <img
              src={project.details.heroImage}
              alt={`${project.title} hero preview`}
              className="h-full w-full object-cover"
            />
        ===================================================== */}
        <section className="-mt-10 px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[30px] shadow-[0_18px_60px_rgba(22,54,95,0.08)]">
              <img
                src={projectVisuals.hero}
                alt={`${project.title} hero preview`}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT + SIDE NAV
        ===================================================== */}
        <section className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-16 lg:items-start lg:grid-cols-[1fr_260px]">
            <div className="space-y-24">
              <div id="overview">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  Project Overview
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Overview</h2>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-[#5B6F89]">
                  {project.details.overview}
                </p>
              </div>

              <div id="challenge">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  Problem Definition
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Challenge</h2>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-[#5B6F89]">
                  {project.details.challenge}
                </p>
              </div>

              <div id="solution">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  Design Direction
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Solution</h2>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-[#5B6F89]">
                  {project.details.solution}
                </p>
              </div>

              <div id="process">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  Workflow & Execution
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Process</h2>

                <div className="mt-8 hidden overflow-x-auto pb-2 lg:block">
                  <div className="min-w-[780px]">
                    <div className="relative grid gap-6" style={{ gridTemplateColumns: `repeat(${project.details.process?.length || 1}, minmax(0, 1fr))` }}>
                      <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-[#F2B84B] via-[#E766AF] via-[#7A8CFF] to-[#46C7C6]" />

                      {project.details.process?.map((item, i) => (
                        <div key={i} className="relative">
                          <div className="relative flex items-center justify-start">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(22,54,95,0.08)] ring-1 ring-[#E2EBF2]">
                              <span className="h-4 w-4 rounded-full bg-gradient-to-r from-[#F2B84B] via-[#E766AF] to-[#46C7C6]" />
                            </span>
                          </div>

                          <div className="mt-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A8CA5]">
                              Step {String(i + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mt-2 text-lg font-bold uppercase tracking-[0.06em] text-[#16365F]">
                              {processLabels[i] || `Phase ${i + 1}`}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#5B6F89]">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4 lg:hidden">
                  {project.details.process?.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-[22px] border border-[#E2EBF2] bg-[#F8FBFD] p-5 shadow-sm"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#21B8C6]">
                        Step {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-[#16365F]">
                        {processLabels[i] || `Phase ${i + 1}`}
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-[#4F647E]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="features">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  Product Highlights
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Key Features</h2>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.details.features?.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[#DDE7F0] bg-white px-4 py-2.5 text-sm font-medium text-[#16365F] shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* =====================================================
                  UI SCREENS
                  TODO:
                  Replace placeholders with real images from
                  project.details.screens
              ===================================================== */}
              <div id="screens">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  Visual Showcase
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">UI Screens</h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {(projectVisuals.screens || [null, null, null, null]).map(
                    (screen, index) => (
                      <ImagePlaceholder
                        key={index}
                        label={`Replace screen ${index + 1} later`}
                        src={screen}
                        className="h-full w-full object-cover"
                      />
                    )
                  )}
                </div>

                {/*
                Later you can replace the placeholders with:

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {project.details.screens?.map((screen, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-[24px] border border-[#E2EBF2] bg-[#F4F8FC]"
                    >
                      <img
                        src={screen}
                        alt={`${project.title} screen ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                */}
              </div>

              <div id="results">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  Outcome
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Results</h2>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-[#5B6F89]">
                  {project.details.results}
                </p>
              </div>
            </div>

            <aside className="hidden lg:sticky lg:top-[8.5rem] lg:block lg:self-start">
              <div className="h-fit w-[260px] rounded-[26px] border border-[#E2EBF2] bg-white p-6 shadow-[0_14px_35px_rgba(22,54,95,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  On this page
                </p>

                <div className="mt-5 h-px w-full bg-[#E8EEF5]" />

                <div className="mt-5 space-y-2 text-sm font-medium text-[#5B6F89]">
                  <a
                    href="#overview"
                    className="block rounded-full px-3 py-2 transition hover:bg-[#F4F8FC] hover:text-[#21B8C6]"
                  >
                    Overview
                  </a>
                  <a
                    href="#challenge"
                    className="block rounded-full px-3 py-2 transition hover:bg-[#F4F8FC] hover:text-[#21B8C6]"
                  >
                    Challenge
                  </a>
                  <a
                    href="#solution"
                    className="block rounded-full px-3 py-2 transition hover:bg-[#F4F8FC] hover:text-[#21B8C6]"
                  >
                    Solution
                  </a>
                  <a
                    href="#process"
                    className="block rounded-full px-3 py-2 transition hover:bg-[#F4F8FC] hover:text-[#21B8C6]"
                  >
                    Process
                  </a>
                  <a
                    href="#features"
                    className="block rounded-full px-3 py-2 transition hover:bg-[#F4F8FC] hover:text-[#21B8C6]"
                  >
                    Key Features
                  </a>
                  <a
                    href="#screens"
                    className="block rounded-full px-3 py-2 transition hover:bg-[#F4F8FC] hover:text-[#21B8C6]"
                  >
                    UI Screens
                  </a>
                  <a
                    href="#results"
                    className="block rounded-full px-3 py-2 transition hover:bg-[#F4F8FC] hover:text-[#21B8C6]"
                  >
                    Results
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            PREVIOUS / NEXT PROJECT NAVIGATION
        ===================================================== */}
        <section className="border-t border-[#E9EFF5] bg-[#F8FBFD] px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <Link
              to={`/portfolio/${prevProject.slug}`}
              className="group rounded-[28px] border border-[#E2EBF2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A8CA5]">
                Previous Project
              </p>
              <div className="mt-4 flex items-center gap-3">
                <ArrowLeft
                  size={18}
                  className="text-[#16365F] transition group-hover:-translate-x-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#16365F]">
                    {prevProject.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#5B6F89]">
                    {prevProject.category}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to={`/portfolio/${nextProject.slug}`}
              className="group rounded-[28px] border border-[#E2EBF2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A8CA5]">
                Next Project
              </p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[#16365F]">
                    {nextProject.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#5B6F89]">
                    {nextProject.category}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-[#16365F] transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-white px-6 pb-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-[#E2EBF2]/90 bg-[#F7FAFD] p-8 text-center shadow-[0_14px_35px_rgba(22,54,95,0.06)] md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
              Let's Build Something Strong
            </p>

            <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              Looking for a product experience that feels premium and performs with clarity?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5B6F89]">
              From product strategy to interface systems, we craft digital experiences
              designed to look refined, work clearly, and grow with your brand.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-8 py-4 font-semibold text-white shadow-[0_14px_30px_rgba(30,65,113,0.18)] transition-all duration-300 hover:scale-[1.03]"
            >
              Start Project
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

