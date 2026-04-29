import { useCallback, useEffect, useMemo, useState } from "react"

export const COOKIE_CONSENT_KEY = "nikaith_cookie_consent"
export const COOKIE_CONSENT_VERSION = "2026-04-29"

const defaultPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
}

function buildConsent(status, preferences) {
  return {
    version: COOKIE_CONSENT_VERSION,
    status,
    updatedAt: new Date().toISOString(),
    preferences: {
      ...defaultPreferences,
      ...preferences,
      essential: true,
    },
  }
}

function readStoredConsent() {
  if (typeof window === "undefined") return null

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored)
    if (!parsed || parsed.version !== COOKIE_CONSENT_VERSION) return null

    return buildConsent(parsed.status || "custom", parsed.preferences)
  } catch {
    return null
  }
}

export default function useCookieConsent() {
  const [consent, setConsent] = useState(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const storedConsent = readStoredConsent()
    setConsent(storedConsent)
    setIsReady(true)
  }, [])

  const persistConsent = useCallback((nextConsent) => {
    setConsent(nextConsent)

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify(nextConsent)
      )
    }
  }, [])

  const acceptAll = useCallback(() => {
    persistConsent(
      buildConsent("accepted", {
        analytics: true,
        marketing: true,
      })
    )
  }, [persistConsent])

  const rejectAll = useCallback(() => {
    persistConsent(
      buildConsent("rejected", {
        analytics: false,
        marketing: false,
      })
    )
  }, [persistConsent])

  const savePreferences = useCallback(
    (preferences) => {
      const analytics = Boolean(preferences?.analytics)
      const marketing = Boolean(preferences?.marketing)

      const status =
        analytics && marketing
          ? "accepted"
          : !analytics && !marketing
          ? "rejected"
          : "custom"

      persistConsent(
        buildConsent(status, {
          analytics,
          marketing,
        })
      )
    },
    [persistConsent]
  )

  const hasConsent = useCallback(
    (category) => {
      if (category === "essential") return true
      return Boolean(consent?.preferences?.[category])
    },
    [consent]
  )

  const resetConsent = useCallback(() => {
    setConsent(null)

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(COOKIE_CONSENT_KEY)
    }
  }, [])

  return useMemo(
    () => ({
      consent,
      isReady,
      shouldShowBanner: isReady && !consent,
      preferences: consent?.preferences || defaultPreferences,
      acceptAll,
      rejectAll,
      savePreferences,
      hasConsent,
      resetConsent,
    }),
    [
      acceptAll,
      consent,
      hasConsent,
      isReady,
      rejectAll,
      resetConsent,
      savePreferences,
    ]
  )
}
