import React from "react"

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute left-[-150px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#3BD0CA]/20 blur-[140px]" />
      <div className="absolute right-[-140px] top-[60px] h-[500px] w-[500px] rounded-full bg-[#198DE5]/20 blur-[140px]" />
      <div className="absolute bottom-[-180px] left-[35%] h-[450px] w-[450px] rounded-full bg-[#1E4171]/40 blur-[140px]" />
    </div>
  )
}