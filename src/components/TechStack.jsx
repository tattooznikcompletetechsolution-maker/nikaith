export default function TechStack() {
  const tech = [
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "TailwindCSS",
    "Figma",
    "MongoDB",
    "Firebase"
  ]

  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Technologies We Use
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {tech.map((item)=>(
            <div
              key={item}
              className="border border-white/10 p-6 rounded-xl bg-white/5"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}