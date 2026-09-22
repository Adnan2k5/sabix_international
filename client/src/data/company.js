/**
 * SABIX INTERNATIONAL — COMPANY DATA
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all company/contact information.
 * Update this file ONLY — changes propagate site-wide.
 *
 * Fields marked [REPLACE] must be updated before launch.
 * ─────────────────────────────────────────────────────────────
 */

export const company = {
  name: 'SABIX International Co. Ltd.',
  shortName: 'SABIX',
  tagline: 'International Industrial Supply',
  yearsOfExcellence: 30,

  // ── Sales Team Contact ─────────────────────────────────────
  sales: {
    email: 'sales@sabixinternational.com', // [REPLACE] with actual sales email
    phone: '+966 11 000 0000',             // [REPLACE] with actual sales phone
  },

  description:
    'SABIX International Co. Ltd. is an international trading and supply company specialising in aluminium, glass hardware, tools, spare parts and project-specific industrial requirements. Serving contractors, factories, government projects and industrial businesses across international markets.',

  // ── Headquarters ────────────────────────────────────────────
  headquarters: {
    label: 'Headquarters',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    address: null,                     // [REPLACE] Full address string
    phone: null,                     // [REPLACE] e.g. '+966 11 XXX XXXX'
    email: null,                     // [REPLACE] e.g. 'info@sabix.com'
    coordinates: { lat: 24.7136, lng: 46.6753 },
  },

  // ── Branch Offices ───────────────────────────────────────────
  branches: [
    {
      label: 'Branch',
      city: null,                   // [REPLACE] US city
      country: 'United States',
      address: null,                   // [REPLACE]
      phone: null,                   // [REPLACE]
      email: null,                   // [REPLACE]
    },
    {
      label: 'Branch',
      city: null,                   // [REPLACE] India city
      country: 'India',
      address: null,                   // [REPLACE]
      phone: null,                   // [REPLACE]
      email: null,                   // [REPLACE]
    },
  ],

  // ── Social Media ────────────────────────────────────────────
  social: {
    linkedin: null,                    // [REPLACE] Full LinkedIn URL
    twitter: null,                    // [REPLACE] Full X/Twitter URL
    instagram: null,                   // [REPLACE] Full Instagram URL
  },

  // ── Legal ───────────────────────────────────────────────────
  legal: {
    privacyPolicyUrl: '#',             // [REPLACE] with actual page route
    termsUrl: '#',             // [REPLACE] with actual page route
    get copyright() {
      return `© ${new Date().getFullYear()} SABIX International Co. Ltd. All rights reserved.`;
    },
  },

  // ── Partnership ─────────────────────────────────────────────
  partnership: {
    name: 'LAVAAL International',
    tagline: 'Trusted Aluminium Accessory Solutions',
    description:
      'SABIX International is partnered with LAVAAL International, strengthening its ability to provide trusted aluminium accessory solutions to projects and businesses.',
    logoPlaceholder: true,             // Set to false and provide logoSrc when official asset is ready
    logoSrc: null,                     // [REPLACE] e.g. '/assets/lavaal-logo.svg'
    website: null,                     // [REPLACE] LAVAAL website URL if applicable
  },
};

/**
 * USAGE MAP — where company.js is consumed across the codebase:
 *
 * Header.jsx          — company.shortName (wordmark)
 * Footer.jsx          — company.name, description, headquarters, branches,
 *                       legal.copyright, legal.privacyPolicyUrl, legal.termsUrl, social
 * LocationSection.jsx — company.headquarters, company.branches
 * Home.jsx            — company.headquarters, company.branches (International Presence)
 *                       company.partnership (LAVAAL Section)
 * QuoteForm.jsx       — company.headquarters.email (form submission note)
 * SpareParts.jsx      — company.headquarters.email (enquiry CTA)
 * index.html          — company.name, company.description (static title + meta, set manually)
 *
 * Future pages:
 * Contact.jsx         — All fields
 * About.jsx           — company.description, company.headquarters
 */
