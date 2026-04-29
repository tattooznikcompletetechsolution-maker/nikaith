let analyticsLoaded = false
let marketingLoaded = false

export function loadAnalytics() {
  if (analyticsLoaded) return
  analyticsLoaded = true
  console.log("Analytics Enabled")
}

export function loadMarketing() {
  if (marketingLoaded) return
  marketingLoaded = true
  console.log("Marketing Enabled")
}
