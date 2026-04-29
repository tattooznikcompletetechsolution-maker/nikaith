import React, { useEffect, useState } from "react"
import { ShieldCheck, BarChart3, Megaphone, X } from "lucide-react"

function Toggle({ checked, disabled = false, onChange }) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      aria-disabled={disabled}
      onClick={() => {
        if (!disabled) onChange(!checked)
      }}
      className={`relative inline-flex h-7 w-12 items-center rounded-full border transition ${
        checked
          ? "border-transparent bg-gradient-to-r from-[#3BD0CA] to-[#1E4171]"
          : "border-[#D6E2EC] bg-[#EAF1F7]"
      } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

function PreferenceRow({
  icon: Icon,
  title,
  description,
  checked,
  disabled,
  onChange,
}) {
  return (
    <div className="rounded-[24px] border border-[#E3EBF2] bg-[#FBFDFF] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8FAF8] to-[#EEF5FF] text-[#1E4171]">
            <Icon size={20} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#16365F]">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#5B6F89]">
              {description}
            </p>
          </div>
        </div>

        <div className="flex justify-end sm:justify-start">
          <Toggle checked={checked} disabled={disabled} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}

export default function CookiePreferencesModal({
  open,
  preferences,
  onClose,
  onSave,
}) {
  const [draft, setDraft] = useState(preferences)

  useEffect(() => {
    setDraft(preferences)
  }, [preferences, open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose, open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close cookie preferences"
        onClick={onClose}
        className="absolute inset-0 bg-[#08111F]/48 backdrop-blur-md"
      />

      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/60 bg-white/95 shadow-[0_28px_100px_rgba(8,17,31,0.24)] backdrop-blur-2xl animate-[modalPop_0.35s_ease-out] sm:rounded-[32px]"
        style={{
          maxHeight: "min(90vh, calc(100dvh - 2rem))",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3BD0CA] to-transparent opacity-80" />

        <div className="flex items-start justify-between gap-4 px-5 pb-4 pt-5 sm:px-8 sm:pb-5 sm:pt-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#21B8C6]">
              Privacy Controls
            </p>
            <h2 className="mt-2 text-[1.9rem] font-bold leading-tight text-[#16365F] sm:text-3xl">
              Manage cookie preferences
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#5B6F89]">
              Choose which optional cookies you want to allow. Essential
              cookies always remain enabled so the website can function
              securely.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE7F0] bg-white text-[#16365F] transition hover:border-[#C6D7E5] hover:bg-[#F8FBFD]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto px-5 pb-5 sm:px-8 sm:pb-8">
          <PreferenceRow
            icon={ShieldCheck}
            title="Essential Cookies"
            description="Required for security, navigation, form handling, and core website functionality."
            checked
            disabled
            onChange={() => {}}
          />

          <PreferenceRow
            icon={BarChart3}
            title="Analytics Cookies"
            description="Help us understand usage patterns and improve performance without enabling them before consent."
            checked={draft.analytics}
            onChange={(value) =>
              setDraft((current) => ({ ...current, analytics: value }))
            }
          />

          <PreferenceRow
            icon={Megaphone}
            title="Marketing Cookies"
            description="Support campaign measurement and future integrations such as ads and remarketing platforms."
            checked={draft.marketing}
            onChange={(value) =>
              setDraft((current) => ({ ...current, marketing: value }))
            }
          />

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-[#D6E2EC] bg-white px-5 py-3 text-sm font-semibold text-[#16365F] transition hover:bg-[#F8FBFD]"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => onSave(draft)}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3BD0CA] to-[#1E4171] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(30,65,113,0.22)] transition hover:-translate-y-0.5"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
