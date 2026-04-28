import React from "react"
import { Helmet } from "react-helmet-async"

import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollProgress from "./ScrollProgress"
import FlowCorner from "./FlowCorner"
import PageHero from "./PageHero"

function LegalSection({ title, paragraphs = [], items = [] }) {
  return (
    <section className="rounded-[28px] border border-[#E2EBF2]/90 bg-white/92 p-7 shadow-[0_14px_35px_rgba(22,54,95,0.05)] md:p-9">
      <h2 className="text-2xl font-bold text-[#0B2546]">{title}</h2>

      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-[#5B6F89]">
            {paragraph}
          </p>
        ))}

        {items.length > 0 && (
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-8 text-[#5B6F89]"
              >
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#21B8C6]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default function LegalPageLayout({
  pageTitle,
  metaDescription,
  canonicalPath,
  heroBadge,
  heroTitle,
  heroDescription,
  intro,
  sections,
}) {
  const canonicalUrl = `https://nikaith.com${canonicalPath}`

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content="https://nikaith.com/works/fintech.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
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
            badge={heroBadge}
            title={heroTitle}
            description={heroDescription}
          />

          <section className="relative overflow-hidden bg-[#F7FAFD] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
            <FlowCorner side="left" />
            <div className="pointer-events-none absolute left-0 top-10 h-[240px] w-[240px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-[#1E4171]/6 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(22,54,95,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.55)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="relative mx-auto max-w-5xl">
              <div className="rounded-[28px] border border-[#E2EBF2]/90 bg-white/90 p-7 shadow-[0_14px_35px_rgba(22,54,95,0.05)] md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21B8C6]">
                  Important Information
                </p>
                <p className="mt-4 text-base leading-8 text-[#5B6F89]">
                  {intro}
                </p>
              </div>

              <div className="mt-8 space-y-6">
                {sections.map((section) => (
                  <LegalSection key={section.title} {...section} />
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
