import React from "react"
import {
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Phone,
} from "lucide-react"
import { Link } from "react-router-dom"
import assets from "../assets/nikaithw.svg"

export default function Footer() {
  const services = [
    "App Development",
    "Website Development",
    "UI/UX Design",
    "Branding",
    "Digital Marketing",
  ]

  const technologies = [
    "React & React Native",
    "Next.js",
    "Node.js",
    "Flutter",
    "WordPress",
  ]

  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/112881483/admin/dashboard/",
    },
    { name: "Twitter", icon: Twitter, href: "https://x.com/Nikaith_" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/nikaith__/",
    },
    { name: "GitHub", icon: Github, href: "https://github.com/nikaith" },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0B2546] to-[#04101F] px-6 pb-10 pt-20 text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#3BD0CA]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#1E4171]/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={assets}
                alt="NIKAITH"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  const fallback = e.currentTarget.nextElementSibling
                  if (fallback) fallback.style.display = "flex"
                }}
              />
              <div
                style={{ display: "none" }}
                className="h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3BD0CA] to-[#1E4171] text-sm font-extrabold text-white"
              >
                N
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-base leading-8 text-[#A3B8CC]">
              Building powerful digital products that help businesses scale
              through modern design and technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#3BD0CA]/50 hover:bg-[#3BD0CA]/10 hover:text-[#3BD0CA] hover:shadow-[0_10px_20px_rgba(59,208,202,0.15)]"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-widest text-white">
              Services
            </h4>

            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-[#A3B8CC] transition duration-300 hover:text-[#3BD0CA]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-widest text-white">
              Technologies
            </h4>

            <ul className="space-y-4">
              {technologies.map((item) => (
                <li key={item} className="text-base text-[#A3B8CC]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-widest text-white">
              Get In Touch
            </h4>

            <div className="space-y-6">
              <div className="group space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3BD0CA]/10 text-[#3BD0CA] transition group-hover:bg-[#3BD0CA] group-hover:text-white">
                    <Phone size={14} />
                  </div>
                  <span className="text-base text-white/90">
                    +971-527936638
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E4171]/40 text-[#A3B8CC] transition group-hover:text-white">
                    <MapPin size={14} />
                  </div>
                  <span className="text-base text-[#A3B8CC]">Dubai, UAE</span>
                </div>
              </div>

              <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-white/10 to-transparent" />

              <div className="group space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3BD0CA]/10 text-[#3BD0CA] transition group-hover:bg-[#3BD0CA] group-hover:text-white">
                    <Phone size={14} />
                  </div>
                  <span className="text-base text-white/90">
                    +91-9481350539
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E4171]/40 text-[#A3B8CC] transition group-hover:text-white">
                    <MapPin size={14} />
                  </div>
                  <span className="text-base text-[#A3B8CC]">
                    Bangalore, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-[#A3B8CC] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} NIKAITH. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
