import React from "react"

export default function CookieBanner({
  onAcceptAll,
  onRejectAll,
  onManagePreferences,
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="pointer-events-auto mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/55 bg-white/92 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl animate-[fadeInUp_0.45s_ease-out]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3BD0CA] to-transparent opacity-80" />

        <div className="flex flex-col gap-6 px-5 py-5 sm:px-7 sm:py-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#21B8C6]">
              Cookie Preferences
            </p>

            <h3 className="mt-2 text-xl font-bold leading-tight text-[#16365F] sm:text-2xl">
              We use cookies to enhance your experience, analyze traffic, and
              improve our services.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5B6F89] sm:text-[15px]">
              Essential cookies keep the website secure and working properly.
              Analytics and marketing cookies will only run after you choose to
              allow them.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <button
              type="button"
              onClick={onRejectAll}
              className="inline-flex items-center justify-center rounded-full border border-[#D6E2EC] bg-white px-5 py-3 text-sm font-semibold text-[#16365F] transition hover:border-[#BFD2E1] hover:bg-[#F7FAFD]"
            >
              Reject All
            </button>

            <button
              type="button"
              onClick={onManagePreferences}
              className="inline-flex items-center justify-center rounded-full border border-[#D6E2EC] bg-[#F8FBFD] px-5 py-3 text-sm font-semibold text-[#16365F] transition hover:border-[#BFD2E1] hover:bg-white"
            >
              Manage Preferences
            </button>

            <button
              type="button"
              onClick={onAcceptAll}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(30,65,113,0.22)] transition hover:-translate-y-0.5"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
