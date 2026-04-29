import React, { Suspense, lazy, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import ScrollToTopButton from "./components/ScrollToTopButton"
import CookieBanner from "./components/CookieBanner"
import CookiePreferencesModal from "./components/CookiePreferencesModal"
import useCookieConsent from "./hooks/useCookieConsent"
import { loadAnalytics, loadMarketing } from "./lib/analytics"

import Home from "./pages/Home"

// Lazy load inner pages
const About = lazy(() => import("./pages/About"))
const ServicesPage = lazy(() => import("./pages/ServicesPage"))
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const CaseStudy = lazy(() => import("./pages/CaseStudy"))
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"))
const TermsOfService = lazy(() => import("./pages/TermsOfService"))

function App() {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)
  const {
    isReady,
    shouldShowBanner,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    hasConsent,
  } = useCookieConsent()

  useEffect(() => {
    if (!isReady) return

    if (hasConsent("analytics")) {
      loadAnalytics()
    }

    if (hasConsent("marketing")) {
      loadMarketing()
    }
  }, [hasConsent, isReady, preferences.analytics, preferences.marketing])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-[#FCFDFF] px-6 text-center text-[#16365F]">
            <div>
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#DCE6EF] border-t-[#21B8C6]" />
              <p className="mt-4 text-sm font-medium">Loading page...</p>
            </div>
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

      {shouldShowBanner && (
        <CookieBanner
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onManagePreferences={() => setIsPreferencesOpen(true)}
        />
      )}

      <CookiePreferencesModal
        open={isPreferencesOpen}
        preferences={preferences}
        onClose={() => setIsPreferencesOpen(false)}
        onSave={(nextPreferences) => {
          savePreferences(nextPreferences)
          setIsPreferencesOpen(false)
        }}
      />

      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
