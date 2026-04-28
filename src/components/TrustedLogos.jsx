import React from "react"

const logos = [
  "/logos/srb.png",
  "/logos/trionet.png",
  "/logos/hpe.png",
  "/logos/hashruja.png",
  "/logos/elmur.png",
  "/logos/swayam.png",
  "/logos/zt.png",
]

export default function TrustedLogos() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] pt-12 md:pt-20 pb-4 md:pb-8">
      {/* soft ambient glow */}
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-[140px] w-[140px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-[140px] w-[140px] rounded-full bg-[#1E4171]/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0B2546]/60">
            Trusted By
          </p>
          <div className="mx-auto mt-2 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] opacity-50" />
        </div>

        {/* Universal Marquee */}
        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-r from-[#F7FAFC] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-l from-[#F7FAFC] to-transparent" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="mx-6 sm:mx-12 flex h-[60px] items-center justify-center"
              >
                <img
                  src={logo}
                  alt="client logo"
                  className="max-h-8 sm:max-h-10 w-auto object-contain opacity-40 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}