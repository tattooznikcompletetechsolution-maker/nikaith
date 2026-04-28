import React, { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B2546] text-white shadow-[0_10px_24px_rgba(11,37,70,0.3)] transition-all hover:-translate-y-1 hover:bg-[#16365F] hover:shadow-[0_14px_30px_rgba(11,37,70,0.4)]"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}
