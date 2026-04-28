import React from "react"

export default function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* grid */}

      <div className="absolute inset-0 opacity-[0.06] 
      [background-image:linear-gradient(to_right,#16365F_1px,transparent_1px),linear-gradient(to_bottom,#16365F_1px,transparent_1px)]
      [background-size:60px_60px]" />

      {/* glow */}

      <div className="absolute left-[20%] top-[15%] h-[240px] w-[240px] rounded-full bg-[#3BD0CA]/20 blur-3xl animate-pulse"/>

      <div className="absolute right-[15%] bottom-[10%] h-[260px] w-[260px] rounded-full bg-[#1E4171]/20 blur-3xl animate-pulse"/>

      {/* particles */}

      <span className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-[#3BD0CA] opacity-70 animate-ping"/>
      <span className="absolute left-[35%] top-[60%] h-2 w-2 rounded-full bg-[#3BD0CA] opacity-60 animate-ping"/>
      <span className="absolute right-[25%] top-[35%] h-2 w-2 rounded-full bg-[#2A66D0] opacity-70 animate-ping"/>
      <span className="absolute right-[40%] bottom-[25%] h-2 w-2 rounded-full bg-[#3BD0CA] opacity-70 animate-ping"/>
      <span className="absolute left-[55%] top-[10%] h-1.5 w-1.5 rounded-full bg-[#2A66D0] opacity-60 animate-ping"/>

    </div>
  )
}