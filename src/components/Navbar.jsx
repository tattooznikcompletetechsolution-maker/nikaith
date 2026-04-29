import React, { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/nikaithc.svg"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={`overflow-hidden border transition-all duration-200 ${
            mobileOpen 
              ? "rounded-[28px] border-[#E6EEF6] bg-white shadow-xl" 
              : `rounded-[32px] border-[#E6EEF6] ${
                  scrolled
                    ? "bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
                    : "bg-white/70 backdrop-blur-xl"
                }`
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-6">
            {/* Logo */}
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <img
                src={logo}
                alt="NIKAITH"
                width="44"
                height="44"
                className="h-10 w-auto shrink-0 object-contain sm:h-11"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition ${
                      isActive
                        ? "text-[#16365F]"
                        : "text-[#6B7C93] hover:text-[#16365F]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="group relative inline-block">
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#1E4171] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[#1E4171] transition hover:-translate-y-0.5 hover:bg-[#1E4171] hover:text-white"
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E3EDF5] bg-white text-[#16365F] transition hover:bg-[#F4F8FC] lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
              mobileOpen
                ? "max-h-[420px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-[#E6EEF6] bg-white px-5 pb-5 pt-3 sm:px-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-[#F2F7FB] text-[#16365F]"
                          : "text-[#6B7C93] hover:bg-[#F5F9FC] hover:text-[#16365F]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#1E4171] bg-transparent px-5 py-3 text-sm font-semibold text-[#1E4171] transition hover:bg-[#1E4171] hover:text-white"
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
