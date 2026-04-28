import React, { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import ScrollToTopButton from "./components/ScrollToTopButton"

// Lazy load pages
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const ServicesPage = lazy(() => import("./pages/ServicesPage"))
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const CaseStudy = lazy(() => import("./pages/CaseStudy"))
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"))
const TermsOfService = lazy(() => import("./pages/TermsOfService"))

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center text-[#16365F]">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
