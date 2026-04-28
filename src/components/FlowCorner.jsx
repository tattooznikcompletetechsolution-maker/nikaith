import React from "react"

export default function FlowCorner({ side = "left" }) {
  const isLeft = side === "left"

  return (
    <div
      className={`pointer-events-none absolute top-10 hidden lg:block ${
        isLeft ? "left-6" : "right-6"
      }`}
    >
      <div className="relative h-28 w-28">
        <div
          className={`absolute top-0 h-16 w-px bg-gradient-to-b from-transparent via-[#3BD0CA]/70 to-[#3BD0CA]/70 shadow-[0_0_12px_rgba(59,208,202,0.35)] ${
            isLeft ? "left-0" : "right-0"
          }`}
        />

        <div
          className={`absolute top-[60px] h-3 w-3 rounded-full bg-[#3BD0CA] shadow-[0_0_18px_rgba(59,208,202,0.55)] ${
            isLeft ? "-left-1" : "-right-1"
          }`}
        />

        <div
          className={`absolute top-[66px] h-px w-24 shadow-[0_0_12px_rgba(59,208,202,0.3)] ${
            isLeft
              ? "left-0 bg-gradient-to-r from-[#3BD0CA]/70 to-transparent"
              : "right-0 bg-gradient-to-l from-[#3BD0CA]/70 to-transparent"
          }`}
        />
      </div>
    </div>
  )
}