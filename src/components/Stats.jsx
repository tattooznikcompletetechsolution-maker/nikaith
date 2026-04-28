import React, { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

function Counter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(to)
    }
  }, [motionValue, isInView, to])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0)) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>{from}{suffix}</span>
}

export default function Stats() {
  const stats = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 100, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 25, suffix: "+", label: "Industry Partners" }
  ]

  return (
    <section className="relative px-6 pt-4 md:pt-8 pb-16 md:pb-24 bg-[#F7FAFC] overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute left-[10%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#3BD0CA]/10 blur-3xl pointer-events-none" />
      <div className="absolute right-[12%] bottom-[10%] h-[160px] w-[160px] rounded-full bg-[#1E4171]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Frosted Tech Panel container */}
        <div className="relative grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-4 rounded-3xl border border-[#0B2546]/5 bg-white/40 backdrop-blur-2xl px-6 py-12 md:p-14 shadow-[0_20px_60px_rgba(30,65,113,0.05)] overflow-hidden">
          {/* Subtle inner grid lines */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0B2546 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

          {stats.map((item) => (
            <div
              key={item.label}
              className="group relative z-10 text-center transition duration-500 hover:-translate-y-1"
            >
              
              {/* Soft hover glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-[#3BD0CA]/0 to-[#3BD0CA]/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

              {/* Value */}
              <div className="relative text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0B2546] to-[#21CFC7]">
                <Counter from={0} to={item.value} suffix={item.suffix} />
              </div>

              {/* Label */}
              <p className="mt-4 text-[13px] md:text-[15px] text-[#1E4171]/80 font-bold tracking-wide uppercase">
                {item.label}
              </p>

              {/* Bottom accent line */}
              <div className="mx-auto mt-5 h-[3px] w-6 rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] opacity-40 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}