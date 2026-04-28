import React from "react"

import LegalPageLayout from "../components/LegalPageLayout"

const sections = [
  {
    title: "Acceptance Of Terms",
    paragraphs: [
      "By accessing or using the NIKAITH website, contacting our team, or engaging our services, you agree to these Terms of Service. If you do not agree, you should discontinue use of the website and related services.",
    ],
  },
  {
    title: "Services",
    paragraphs: [
      "NIKAITH provides digital services including UI/UX design, website development, app development, branding, digital product support, and related creative or technical consulting.",
      "Any project-specific scope, timeline, deliverables, pricing, or commercial terms will be governed by a separate proposal, statement of work, invoice, or written agreement where applicable.",
    ],
  },
  {
    title: "Use Of Website",
    paragraphs: [
      "You agree to use this website only for lawful purposes and in a way that does not interfere with its operation, security, availability, or intended use.",
    ],
    items: [
      "Do not attempt to gain unauthorized access to the site, server, forms, or connected systems.",
      "Do not misuse the website for spam, fraud, scraping, or malicious activity.",
      "Do not submit false, misleading, or unlawful content through contact forms or communications.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, the website content, branding, visuals, text, layouts, and related creative materials on this site are owned by or licensed to NIKAITH and are protected by applicable intellectual property laws.",
      "You may not reproduce, copy, distribute, modify, or republish website content without prior written permission, except where limited personal viewing is inherently required to use the website.",
    ],
  },
  {
    title: "Client Materials And Project Ownership",
    paragraphs: [
      "Clients are responsible for ensuring they have the right to provide any logos, copy, media, product assets, or other materials shared with us for project use.",
      "Ownership of final project deliverables, source files, or licensed assets will follow the terms defined in the relevant proposal or written agreement. Until full payment is received where required, certain usage or ownership rights may remain restricted.",
    ],
  },
  {
    title: "Payments And Approvals",
    paragraphs: [
      "Project fees, payment schedules, revisions, milestones, and delivery expectations will be outlined in project-specific agreements. Delays in approvals, required materials, or payments may affect timelines and delivery commitments.",
      "Unless otherwise agreed in writing, invoices must be paid according to the due dates stated in the quotation or invoice.",
    ],
  },
  {
    title: "Third-Party Tools And Platforms",
    paragraphs: [
      "Our work may involve third-party tools, hosting providers, plugins, APIs, software, domains, or platform services. Their performance, uptime, licensing, and policy changes are outside our direct control.",
      "We are not responsible for failures caused by third-party services, client-managed accounts, or external platform changes after delivery.",
    ],
  },
  {
    title: "Disclaimers",
    paragraphs: [
      "The website and its content are provided on an as-is and as-available basis without warranties of any kind, whether express or implied, except where such disclaimers are not permitted by law.",
      "We do not guarantee uninterrupted site availability, error-free operation, or that the website will always be free from vulnerabilities, although we aim to maintain it responsibly.",
    ],
  },
  {
    title: "Limitation Of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, NIKAITH will not be liable for any indirect, incidental, consequential, special, or loss-of-profit damages arising out of or related to the use of this website or our services.",
      "Where liability cannot be excluded, it will be limited to the amount paid to NIKAITH for the relevant services giving rise to the claim, if applicable.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "We may suspend or restrict access to the website or decline service engagement if we reasonably believe there has been misuse, unlawful conduct, non-payment, abusive behavior, or a material breach of agreed terms.",
    ],
  },
  {
    title: "Governing Terms Updates",
    paragraphs: [
      "We may update these Terms of Service from time to time to reflect legal, operational, or service changes. Continued use of the website after an update means you accept the revised version posted on this page.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions about these Terms of Service, please contact NIKAITH at hello@nikaith.com or through the contact page on our website.",
    ],
  },
]

export default function TermsOfService() {
  return (
    <LegalPageLayout
      pageTitle="Terms of Service | NIKAITH"
      metaDescription="Read the NIKAITH Terms of Service covering website use, project engagement, intellectual property, payments, liability, and service conditions."
      canonicalPath="/terms-of-service"
      heroBadge="Terms of Service"
      heroTitle="Terms of Service"
      heroDescription="These terms explain the rules, responsibilities, and conditions that apply when you use the NIKAITH website or engage our services."
      intro="Effective date: April 29, 2026. These Terms of Service apply to your use of the NIKAITH website and to general business interactions with our team unless a separate written agreement states otherwise."
      sections={sections}
    />
  )
}
