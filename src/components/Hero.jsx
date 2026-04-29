import React, { useEffect, useState } from "react"
import { ArrowUpRight, MousePointer2, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15, delay: 0.2 } }
}

const lateVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15, delay: 1.4 } }
}

const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, delay = 2000) => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    let timer
    const currentWord = words[loopNum % words.length]
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1))
      }, deletingSpeed)
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1))
      }, typingSpeed)
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delay)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setLoopNum((prev) => prev + 1)
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, delay])

  return text
}

const useTypewriterOnce = (word, typingSpeed = 100, delay = 500) => {
  const [text, setText] = useState("")
  
  useEffect(() => {
    let timer
    const startTimer = setTimeout(() => {
      let index = 0
      timer = setInterval(() => {
        setText(word.substring(0, index + 1))
        index++
        if (index === word.length) clearInterval(timer)
      }, typingSpeed)
    }, delay)
    
    return () => {
      clearTimeout(startTimer)
      clearInterval(timer)
    }
  }, [word, typingSpeed, delay])
  
  return text
}

export default function Hero() {
  const searchWords = ["UI/UX Design...", "Mobile Apps...", "Web Development...", "Digital Growth..."]

  const mainText = useTypewriterOnce("Digital Products", 60, 400)
  const searchText = useTypewriter(searchWords, 80, 40, 2000)

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-[#0B2546]">
      {/* Silk Mesh Background (Option B) */}
      <div className="absolute inset-0 overflow-hidden bg-[#FCFDFF]">
        {/* Large, slow-moving blurred orbs acting as a fluid mesh gradient */}
        <div className="absolute -left-[10%] -top-[10%] h-[70vw] w-[70vw] max-h-[800px] max-w-[800px] rounded-full bg-[#E0F2FE] mix-blend-multiply blur-[100px] sm:blur-[140px] animate-[floatSlow_18s_ease-in-out_infinite]" />
        <div className="absolute -right-[5%] top-[5%] h-[60vw] w-[60vw] max-h-[700px] max-w-[700px] rounded-full bg-[#CCFBF1] mix-blend-multiply blur-[100px] sm:blur-[140px] animate-[floatSlow_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute -bottom-[15%] left-[15%] h-[80vw] w-[80vw] max-h-[900px] max-w-[900px] rounded-full bg-[#E1EFFE] mix-blend-multiply blur-[100px] sm:blur-[140px] animate-[floatSlow_25s_ease-in-out_infinite]" />
        <div className="absolute bottom-[5%] -right-[10%] h-[65vw] w-[65vw] max-h-[750px] max-w-[750px] rounded-full bg-[#D1FAE5] mix-blend-multiply blur-[100px] sm:blur-[140px] animate-[floatSlow_19s_ease-in-out_infinite_reverse]" />
      </div>

      {/* 3D Tech Data Grid Floor */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[52vh] w-full overflow-hidden opacity-[0.12] mix-blend-multiply lg:h-[70vh] lg:opacity-30" style={{ perspective: "1000px" }}>
        {/* Fading mask to blend grid into the mesh background */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#FCFDFF] via-[#FCFDFF]/85 to-[#FCFDFF] lg:via-transparent" />

        {/* Animated Grid */}
        <div className="absolute left-[-50%] top-0 h-[200%] w-[200%] animate-[gridMove_10s_linear_infinite]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(59,208,202,0.32) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,65,113,0.2) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            transformOrigin: "center top",
            transform: "rotateX(75deg) translateY(0)"
          }}
        />
      </div>

      {/* Floating chips */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.2, duration: 1 }}
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden text-[10px] sm:text-[12px]"
      >
        <div className="absolute max-lg:left-[5%] max-lg:top-[9%] lg:left-[20%] lg:top-[23%] animate-[float_6.5s_ease-in-out_infinite]">
          <div className="highlight-1 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 font-medium text-[#0B2546]/50 backdrop-blur-md max-lg:scale-90 lg:px-5 lg:py-2">
            Product &amp; Thinking
          </div>
        </div>

        <div className="absolute max-lg:left-[4%] max-lg:top-[55%] lg:left-[14.5%] lg:top-[54%] animate-[float_6.8s_ease-in-out_infinite]">
          <div className="highlight-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 font-medium text-[#0B2546]/50 backdrop-blur-md max-lg:origin-left max-lg:scale-90 lg:px-5 lg:py-2">
            Web &amp; App Builds
          </div>
        </div>

        <div className="absolute max-lg:right-[4%] max-lg:top-[12%] lg:right-[15%] lg:top-[27%] animate-[float_7.2s_ease-in-out_infinite]">
          <div className="highlight-3 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 font-medium text-[#0B2546]/50 backdrop-blur-md max-lg:origin-right max-lg:scale-90 lg:px-5 lg:py-2">
            Branding &amp; Growth
          </div>
        </div>

        <div className="absolute max-lg:right-[4%] max-lg:top-[76%] lg:right-[21%] lg:top-[79%] animate-[float_7.3s_ease-in-out_infinite]">
          <div className="highlight-4 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 font-medium text-[#0B2546]/50 backdrop-blur-md max-lg:origin-right max-lg:scale-90 lg:px-5 lg:py-2">
            Design Systems
          </div>
        </div>

        {/* Automated Cursor */}
        <div className="absolute z-50 animate-[autoCursor_16s_ease-in-out_infinite]" style={{ left: '50%', top: '100%', opacity: 0 }}>
          <MousePointer2 size={32} className="max-lg:w-7 max-lg:h-7 fill-[#0B2546] text-white drop-shadow-[0_8px_16px_rgba(11,37,70,0.3)]" />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pb-14 pt-36 text-center sm:pt-32"
      >
        {/* Search Bar Eyebrow (Reveals Late) */}
        <motion.div variants={lateVariants} className="mx-auto flex w-full max-w-[280px] items-center gap-3 rounded-full border border-[#0B2546]/10 bg-white/95 px-5 py-2.5 text-sm text-[#536A86] shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur-md sm:max-w-xs">
          <Search size={16} className="text-[#3BD0CA]" />
          <span className="flex-1 text-left whitespace-nowrap overflow-hidden">
            <span className="opacity-70">Find </span>
            <span className="font-semibold text-[#1E4171]">{searchText}</span>
            <span className="ml-[1px] inline-block h-3.5 w-[2px] animate-pulse bg-[#1E4171] align-middle" />
          </span>
        </motion.div>

        {/* Heading (Reveals Early) */}
        <motion.h1 variants={textVariants} className="relative mt-6 max-w-[360px] text-5xl font-extrabold leading-[0.94] tracking-[-0.05em] sm:mt-6 sm:max-w-none sm:text-5xl md:text-6xl lg:text-[66px]">
          <span className="absolute left-1/2 top-[45%] -z-10 h-[180px] w-[620px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-[#3BD0CA]/10 via-[#7CEAE5]/16 to-[#1E4171]/8 blur-3xl" />
          <span className="block">We Build</span>

          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-2 top-2 -z-10 rounded-2xl bg-gradient-to-r from-[#3BD0CA]/18 via-[#7CEAE5]/20 to-[#1E4171]/8 blur-2xl" />

            <span className="inline-block bg-gradient-to-r from-[#0B2546] via-[#1E4171] to-[#21CFC7] bg-clip-text text-transparent">
              {mainText}
              <span className="ml-[2px] sm:ml-[4px] inline-block h-[32px] sm:h-[48px] md:h-[58px] w-[3px] sm:w-[5px] animate-pulse bg-gradient-to-t from-[#21CFC7] to-[#0B2546] align-middle" />
            </span>
          </span>

          <span className="block">That Grow</span>
          <span className="block">Businesses</span>
        </motion.h1>

        {/* Description (Reveals Early) */}
        <motion.p variants={textVariants} className="mt-6 max-w-[360px] text-[15px] leading-8 text-[#5B6F89] sm:mt-8 sm:max-w-4xl sm:text-base md:text-[18px]">
          From UI/UX design and website development to mobile apps, branding,
          and digital marketing, we create product-driven experiences that help
          companies launch faster and scale smarter.
        </motion.p>

        {/* Buttons (Reveals Late) */}
        <motion.div variants={lateVariants} className="mt-8 flex w-full max-w-[320px] flex-col justify-center gap-4 sm:mt-10 sm:max-w-none sm:w-auto sm:flex-row sm:flex-wrap sm:gap-5">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-8 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(30,65,113,0.18)] transition-all hover:scale-[1.03] hover:shadow-[0_24px_60px_rgba(30,65,113,0.3)]"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B2546]/12 bg-white/95 px-8 py-4 font-semibold text-[#16365F] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-[1px] hover:bg-[#F4F8FC]"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Focused row (Reveals Late) */}
        <motion.div variants={lateVariants} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm md:text-[15px]">
          <span className="font-semibold text-[#324B6B]">Focused on</span>
          <span className="text-[#7C8EA6]">Business Websites</span>
          <span className="text-[#7C8EA6]">Mobile Apps</span>
          <span className="text-[#7C8EA6]">UI/UX Design</span>
          <span className="text-[#7C8EA6]">Brand Identity</span>
          <span className="text-[#7C8EA6]">Marketing Campaigns</span>
        </motion.div>
      </motion.div>




      <style>{`
        @media (min-width: 1024px) {
          @keyframes autoCursor {
            0% { left: 50%; top: 100%; opacity: 0; transform: scale(1); }
            5% { opacity: 1; transform: scale(1); }
            
            10% { left: 24%; top: 25%; transform: scale(1); }
            11% { transform: scale(0.85); }
            13% { transform: scale(1); }
            18% { left: 24%; top: 25%; transform: scale(1); }

            28% { left: 19%; top: 56%; transform: scale(1); }
            29% { transform: scale(0.85); }
            31% { transform: scale(1); }
            36% { left: 19%; top: 56%; transform: scale(1); }

            50% { left: 77%; top: 29%; transform: scale(1); }
            51% { transform: scale(0.85); }
            53% { transform: scale(1); }
            58% { left: 77%; top: 29%; transform: scale(1); }

            68% { left: 72%; top: 81%; transform: scale(1); }
            69% { transform: scale(0.85); }
            71% { transform: scale(1); }
            76% { left: 72%; top: 81%; transform: scale(1); }

            90% { left: 50%; top: 100%; opacity: 1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(1); }
          }
        }
        @media (max-width: 1023px) {
          @keyframes autoCursor {
            0% { left: 50%; top: 100%; opacity: 0; transform: scale(1); }
            5% { opacity: 1; transform: scale(1); }
            
            10% { left: 15%; top: 12%; transform: scale(1); }
            11% { transform: scale(0.85); }
            13% { transform: scale(1); }
            18% { left: 15%; top: 12%; transform: scale(1); }

            28% { left: 15%; top: 92%; transform: scale(1); }
            29% { transform: scale(0.85); }
            31% { transform: scale(1); }
            36% { left: 15%; top: 92%; transform: scale(1); }

            50% { left: 80%; top: 22%; transform: scale(1); }
            51% { transform: scale(0.85); }
            53% { transform: scale(1); }
            58% { left: 80%; top: 22%; transform: scale(1); }

            68% { left: 80%; top: 85%; transform: scale(1); }
            69% { transform: scale(0.85); }
            71% { transform: scale(1); }
            76% { left: 80%; top: 85%; transform: scale(1); }

            90% { left: 50%; top: 100%; opacity: 1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(1); }
          }
        }

        .highlight-1 { animation: h1 16s ease-in-out infinite; }
        .highlight-2 { animation: h2 16s ease-in-out infinite; }
        .highlight-3 { animation: h3 16s ease-in-out infinite; }
        .highlight-4 { animation: h4 16s ease-in-out infinite; }

        @keyframes h1 {
          0%, 9%, 17%, 100% { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); color: rgba(11,37,70,0.5); transform: scale(1); box-shadow: none; }
          11%, 14% { background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.9); color: rgba(11,37,70,1); transform: scale(1.1); box-shadow: 0 12px 30px rgba(15,23,42,0.08); }
        }
        @keyframes h2 {
          0%, 27%, 35%, 100% { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); color: rgba(11,37,70,0.5); transform: scale(1); box-shadow: none; }
          29%, 32% { background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.9); color: rgba(11,37,70,1); transform: scale(1.1); box-shadow: 0 12px 30px rgba(15,23,42,0.08); }
        }
        @keyframes h3 {
          0%, 49%, 57%, 100% { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); color: rgba(11,37,70,0.5); transform: scale(1); box-shadow: none; }
          51%, 54% { background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.9); color: rgba(11,37,70,1); transform: scale(1.1); box-shadow: 0 12px 30px rgba(15,23,42,0.08); }
        }
        @keyframes h4 {
          0%, 67%, 75%, 100% { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); color: rgba(11,37,70,0.5); transform: scale(1); box-shadow: none; }
          69%, 72% { background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.9); color: rgba(11,37,70,1); transform: scale(1.1); box-shadow: 0 12px 30px rgba(15,23,42,0.08); }
        }

        @keyframes gridMove {
          0% { transform: rotateX(75deg) translateY(0); }
          100% { transform: rotateX(75deg) translateY(80px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.03); }
        }

        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-scroll-dot {
          animation: scrollDot 1.6s ease-in-out infinite;
        }
      `}</style>




    </section>
  )
}
