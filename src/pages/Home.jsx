import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import ServicesPreview from "../components/ServicesPreview"
import ProcessSection from "../components/ProcessSection"
import WhyChoose from "../components/WhyChoose"
import PortfolioPreview from "../components/PortfolioPreview"
import Testimonials from "../components/Testimonials"
import CTASection from "../components/CTASection"
import Footer from "../components/Footer"
import TechnologiesSection from "../components/TechnologiesSection"
import TrustedLogos from "../components/TrustedLogos"
import ScrollProgress from "../components/ScrollProgress"
import { Helmet } from "react-helmet-async"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Nikaith | UI/UX Designer & Web Product Studio</title>

        <meta
          name="description"
          content="Nikaith is a UI/UX design and web product studio creating modern digital experiences, websites, and brand systems for global clients."
        />

        <meta
          name="keywords"
          content="UI UX design, web design, app design, product design, branding, web development, portfolio, Nikaith"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://nikaith.com/" />

        <meta
          property="og:title"
          content="Nikaith | UI/UX Designer & Web Product Studio"
        />
        <meta
          property="og:description"
          content="Modern UI/UX design, websites, digital products, and brand systems crafted for ambitious brands."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nikaith.com/" />
        <meta property="og:image" content="https://nikaith.com/works/fintech.jpg" />
        <meta
          property="og:image:alt"
          content="Nikaith UI/UX and digital product studio preview"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nikaith | UI/UX Designer & Web Product Studio"
        />
        <meta
          name="twitter:description"
          content="Modern UI/UX design, websites, digital products, and brand systems crafted for ambitious brands."
        />
        <meta name="twitter:image" content="https://nikaith.com/works/fintech.jpg" />
        <meta
          name="twitter:image:alt"
          content="Nikaith UI/UX and digital product studio preview"
        />
      </Helmet>

      <div className="bg-[#020817] text-white">
        <Navbar />
        <ScrollProgress />
        <Hero />
        <TrustedLogos />
        <ServicesPreview />
        <ProcessSection />
        <TechnologiesSection />
        <WhyChoose />
        <Testimonials />
        <PortfolioPreview />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}
