import React from "react"
import { MousePointer2, Sparkles } from "lucide-react"

export default function PageHero({
  badge,
  title,
  description,
}) {
  return (
    <section className="relative overflow-hidden bg-[#FCFDFF] px-6 pb-20 pt-32 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.9),transparent_36%),radial-gradient(circle_at_top_right,rgba(204,251,241,0.85),transparent_32%),linear-gradient(180deg,#F9FCFF_0%,#F4F8FC_100%)]" />

      <div className="absolute inset-0 overflow-hidden opacity-90">
        <div className="absolute -left-[10%] top-[-12%] h-[28rem] w-[28rem] rounded-full bg-[#BFDBFE]/70 blur-[90px]" />
        <div className="absolute right-[-6%] top-[4%] h-[24rem] w-[24rem] rounded-full bg-[#CCFBF1]/75 blur-[90px]" />
        <div className="absolute bottom-[-18%] left-[22%] h-[20rem] w-[20rem] rounded-full bg-[#DBEAFE]/80 blur-[80px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="absolute animate-[pageCursor_14s_ease-in-out_infinite]">
          <div className="relative flex h-14 w-14 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/65 bg-white/18 shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm" />
            <MousePointer2
              size={28}
              className="relative z-10 fill-[#16365F] text-white drop-shadow-[0_10px_18px_rgba(15,23,42,0.18)]"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mx-auto mt-2 inline-flex items-center gap-2 rounded-full border border-[#D8E4EE] bg-white/90 px-4 py-2 text-sm font-medium text-[#5D728D] shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-md">
          <Sparkles size={16} className="text-[#3BD0CA]" />
          {badge}
        </div>

        <div className="relative mt-7">
          <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-[32rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#3BD0CA]/12 via-[#D6F9F4]/40 to-[#BFDBFE]/28 blur-3xl" />
          <h1 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-[#16365F] sm:text-5xl md:text-6xl lg:text-[66px]">
            {title}
          </h1>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[#61758A] md:text-[18px]">
          {description}
        </p>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          @keyframes pageCursor {
            0% { left: 50%; top: 100%; opacity: 0; transform: scale(1); }
            8% { left: 42%; top: 22%; opacity: 1; transform: scale(1); }
            10% { transform: scale(0.86); }
            12% { transform: scale(1); }
            28% { left: 32%; top: 74%; opacity: 1; transform: scale(1); }
            30% { transform: scale(0.86); }
            32% { transform: scale(1); }
            48% { left: 44%; top: 80%; opacity: 1; transform: scale(1); }
            50% { transform: scale(0.86); }
            52% { transform: scale(1); }
            68% { left: 58%; top: 74%; opacity: 1; transform: scale(1); }
            70% { transform: scale(0.86); }
            72% { transform: scale(1); }
            86% { left: 68%; top: 80%; opacity: 1; transform: scale(1); }
            88% { transform: scale(0.86); }
            90% { transform: scale(1); }
            100% { left: 50%; top: 100%; opacity: 0; transform: scale(1); }
          }
        }

        @media (max-width: 1023px) {
          @keyframes pageCursor {
            0% { left: 50%; top: 100%; opacity: 0; transform: scale(1); }
            8% { left: 40%; top: 18%; opacity: 1; transform: scale(1); }
            10% { transform: scale(0.86); }
            12% { transform: scale(1); }
            30% { left: 24%; top: 82%; opacity: 1; transform: scale(1); }
            32% { transform: scale(0.86); }
            34% { transform: scale(1); }
            52% { left: 46%; top: 88%; opacity: 1; transform: scale(1); }
            54% { transform: scale(0.86); }
            56% { transform: scale(1); }
            74% { left: 68%; top: 82%; opacity: 1; transform: scale(1); }
            76% { transform: scale(0.86); }
            78% { transform: scale(1); }
            100% { left: 50%; top: 100%; opacity: 0; transform: scale(1); }
          }
        }
      `}</style>
    </section>
  )
}
