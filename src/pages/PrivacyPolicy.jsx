import React from "react"

import LegalPageLayout from "../components/LegalPageLayout"

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect personal information you choose to share with us when you contact NIKAITH, submit a project inquiry, request a proposal, or communicate with us by email, phone, or social channels.",
    ],
    items: [
      "Name, email address, phone number, company name, and project details submitted through our forms or direct communication.",
      "General technical information such as browser type, device information, pages visited, and approximate usage behavior when you browse our website.",
      "Any additional information you voluntarily provide during discovery calls, client onboarding, or project collaboration.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use the information we collect to operate our website, respond to inquiries, and deliver our services in a professional and secure way.",
    ],
    items: [
      "To reply to your questions, proposals, and support requests.",
      "To evaluate project requirements and prepare service recommendations or quotations.",
      "To improve website performance, user experience, and business communication.",
      "To manage client relationships, project delivery, billing, and internal operations.",
    ],
  },
  {
    title: "Cookies And Analytics",
    paragraphs: [
      "Our website may use cookies or similar technologies to understand site traffic, improve performance, and provide a smoother browsing experience. These tools may collect non-sensitive usage data such as session behavior and page interactions.",
      "You can manage or disable cookies through your browser settings, although some parts of the site may not function as expected if cookies are restricted.",
    ],
  },
  {
    title: "How We Share Information",
    paragraphs: [
      "We do not sell your personal information. We only share information when it is necessary to run our business, provide services, or comply with legal obligations.",
    ],
    items: [
      "With trusted service providers who support hosting, analytics, communication, or operations.",
      "With internal team members or project partners only when needed to deliver agreed services.",
      "When required by law, regulation, legal process, or to protect our rights and business interests.",
    ],
  },
  {
    title: "Data Retention And Security",
    paragraphs: [
      "We keep information only for as long as it is reasonably necessary for inquiries, project delivery, legal compliance, record keeping, or legitimate business purposes.",
      "We take appropriate administrative and technical steps to protect the information we handle. However, no internet-based transmission or storage system can be guaranteed as fully secure.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Depending on your location, you may have rights related to your personal information, including the ability to request access, correction, deletion, or restriction of certain processing activities.",
      "To make a privacy-related request, please contact us and we will respond within a reasonable timeframe.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "Our website may include links to third-party websites, platforms, or tools. We are not responsible for the privacy practices, content, or policies of those third-party services, and we encourage you to review their policies separately.",
    ],
  },
  {
    title: "Policy Updates",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect operational, legal, or service changes. Updated versions will be posted on this page with the revised effective date.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how your information is handled, you can contact NIKAITH at hello@nikaith.com or through the contact form on our website.",
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      pageTitle="Privacy Policy | NIKAITH"
      metaDescription="Read the NIKAITH Privacy Policy to understand how we collect, use, and protect your information when you browse our website or contact our team."
      canonicalPath="/privacy-policy"
      heroBadge="Privacy Policy"
      heroTitle="Privacy Policy"
      heroDescription="This page explains how NIKAITH collects, uses, stores, and protects information shared through our website and business communications."
      intro="Effective date: April 29, 2026. This Privacy Policy applies to information collected through the NIKAITH website and direct communication related to our design, development, branding, and digital service offerings."
      sections={sections}
    />
  )
}
