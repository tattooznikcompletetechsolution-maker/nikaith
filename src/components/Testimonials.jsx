import React from "react"

const testimonials = [
  {
    company: "SRB",
    role: "AV & Connectivity Solutions",
    review:
      "NIKAITH helped us present our technical products with clearer design, stronger visual communication, and more refined marketing assets.",
    chip: "S",
    chipGradient: "from-[#198DE5] to-[#1E4171]",
    rating: "4.9",
    brandColor: "text-[#00A870]",
  },
  {
    company: "Trionet",
    role: "Technology Solutions Provider",
    review:
      "Working together has been a smooth and professional experience. Strong design quality, clear execution, and dependable delivery throughout.",
    chip: "T",
    chipGradient: "from-[#198DE5] to-[#3BD0CA]",
    rating: "5.0",
  },
  {
    company: "HP Enterprises",
    role: "Business Services",
    review:
      "Clear understanding of business requirements and a polished final outcome that felt both professional and effective.",
    chip: "H",
    chipGradient: "from-[#A93CFF] to-[#FF3DA8]",
    rating: "4.8",
  },
  {
    company: "Hashruja Techinfra",
    role: "Infrastructure & Technology",
    review:
      "The project was delivered with structure, detail, and a clean product mindset. The final digital presentation aligned well with our brand.",
    chip: "H",
    chipGradient: "from-[#00C853] to-[#00B86B]",
    rating: "4.9",
  },
  {
    company: "Elmur HR Consultancy",
    role: "HR & Business Consulting",
    review:
      "The final design direction felt structured, elegant, and aligned with our business goals.",
    chip: "E",
    chipGradient: "from-[#F59E0B] to-[#F97316]",
    rating: "4.9",
  },
  {
    company: "NIKAITH Clients",
    role: "Design & Digital Partners",
    review:
      "A reliable creative partner for branding, websites, product design, and marketing communication.",
    chip: "N",
    chipGradient: "from-[#16365F] to-[#198DE5]",
    rating: "5.0",
  },
]

function TestimonialCard({ item, index }) {
  const isFirst = index === 0

  return (
    <article
      className={`
        group relative overflow-hidden rounded-[28px] border border-[#E8EEF5]/90 bg-white/88 p-6 md:p-7
        shadow-[0_14px_35px_rgba(22,54,95,0.07)] backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2 hover:rotate-[-1.5deg] hover:shadow-[0_26px_60px_rgba(22,54,95,0.14)]
        ${isFirst ? "-rotate-[1.5deg] scale-[1.02]" : ""}
      `}
    >
      {/* soft top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/75 to-transparent" />

      {/* hover wash */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(59,208,202,0.10),transparent_42%)]" />

      {/* soft orb */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3BD0CA]/10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-[#1E4171]/10" />

      {/* inner border */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/55" />

      <div className="relative z-10">
        {/* top row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[20px] font-bold tracking-[-0.02em] text-[#16365F]">
              {item.company}
            </h3>
            <p className="mt-1 text-xs font-medium text-[#8EA1B5]">{item.role}</p>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-white/70 bg-[#F3F7F6]/90 px-3 py-1 text-sm font-semibold text-[#16365F] shadow-sm">
            {item.rating}
            <span className="text-[#16C47F]">★</span>
          </div>
        </div>

        {/* review */}
        <div className="mt-5">
          <p className="text-[15px] leading-7 text-[#61758A]">
            “{item.review}”
          </p>
        </div>

        {/* subtle depth lines */}
        <div className="mt-5 space-y-2 opacity-55 transition duration-500 group-hover:opacity-80">
          <div className="h-[6px] w-16 rounded-full bg-[#E7EEF5]" />
          <div className="h-[6px] w-10 rounded-full bg-[#EEF3F8]" />
        </div>

        {/* footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#EEF3F7] pt-4">
          <div>
            <p className="text-[16px] font-semibold text-[#16365F]">
              {item.company}
            </p>
            <p className="text-xs text-[#8EA1B5]">Trusted Client</p>
          </div>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${item.chipGradient} text-white font-bold shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition duration-300 group-hover:scale-105`}
          >
            {item.chip}
          </div>
        </div>
      </div>

      {/* bottom hover line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#3BD0CA] via-[#198DE5] to-[#1E4171] transition-all duration-500 group-hover:w-full" />
    </article>
  )
}

export default function TestimonialsPage() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] px-6 py-20">
      {/* background glow */}
      <div className="pointer-events-none absolute left-0 top-10 h-[240px] w-[240px] rounded-full bg-[#3BD0CA]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-[#1E4171]/6 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(22,54,95,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,54,95,0.55)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3BD0CA]">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-[#16365F] md:text-5xl">
            Our Trusted Clients
          </h2>

          <p className="mt-4 text-[#61758A] md:text-lg">
            Real feedback from companies that trusted NIKAITH for design,
            development, and digital execution.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}