import React from "react"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] px-6 py-16 md:py-20">
      <div className="pointer-events-none absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[#BFDBFE]/45 blur-[90px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-[#CCFBF1]/55 blur-[90px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-[34px] border border-[#DCE7F0] bg-white/88 px-8 py-10 shadow-[0_20px_55px_rgba(15,23,42,0.06)] backdrop-blur-xl md:px-12 md:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#21B8C6]">
                Let's Build
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#16365F] md:text-5xl">
                Need a service mix tailored to your business?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#61758A] md:text-lg">
                We help brands combine design, development, branding, and
                growth support into one clear digital direction.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_34px_rgba(30,65,113,0.16)] transition duration-300 hover:-translate-y-[1px]"
              >
                Talk About Your Project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
