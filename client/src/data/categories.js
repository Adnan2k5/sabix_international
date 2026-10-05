/**
 * SABIX INTERNATIONAL — CATEGORIES / PRODUCT DOMAINS
 * ─────────────────────────────────────────────────────────────
 * Three primary business domains with product families.
 *
 * NOTE: These are illustrative categories structured for easy
 * replacement. The client should review and update product
 * families and descriptions before launch.
 * ─────────────────────────────────────────────────────────────
 */

export const categories = [
  {
    id: 'aluminium-glass-accessories',
    number: '01',
    slug: '/aluminium-glass-accessories',
    title: 'Aluminium & Glass Accessories',
    subtitle: 'Hardware and accessories for aluminium and glass applications.',
    description:
      'From architectural handles and hinges to glass fittings and connectors — SABIX supplies the hardware components that aluminium and glass projects require.',
    image: '/assets/images/aluminium-accessories.jpg',
    imageAlt: 'Aluminium hardware accessories on a clean surface',
    accentLabel: 'Aluminium · Glass · Hardware',
    families: [
      {
        id: 'handles',
        name: 'Handles',
        description: 'Architectural and functional handles for aluminium and glass door and window systems.',
      },
      {
        id: 'hinges',
        name: 'Hinges',
        description: 'Heavy-duty and precision hinges for a range of aluminium and glass applications.',
      },
      {
        id: 'glass-fittings',
        name: 'Glass Fittings',
        description: 'Brackets, clamps, spiders and connectors for structural and decorative glass installations.',
      },
      {
        id: 'locks',
        name: 'Locks & Latches',
        description: 'Locking mechanisms and latches for aluminium frame and glass door systems.',
      },
      {
        id: 'profiles',
        name: 'Aluminium Profiles',
        description: 'Standard and project-specific aluminium profiles and extrusions.',
      },
      {
        id: 'sliding-hardware',
        name: 'Sliding Hardware',
        description: 'Rollers, tracks and accessories for sliding aluminium and glass systems.',
      },
      {
        id: 'architectural-accessories',
        name: 'Architectural Accessories',
        description: 'Finishing and installation accessories for architectural glazing and aluminium façade projects.',
      },
      {
        id: 'bars',
        name: 'Aluminium Bars',
        description: 'Aluminium bars and structural components for project fabrication requirements.',
      },
    ],
  },
  {
    id: 'tools-hardware',
    number: '02',
    slug: '/tools-hardware',
    title: 'Tools & Hardware',
    subtitle: 'Tools, factory hardware and supporting components for industrial and project requirements.',
    description:
      'SABIX supplies tools and factory hardware to support operational and project requirements — from hand tools and power tools to factory hardware and supporting components.',
    image: '/assets/images/tools-hardware.jpg',
    imageAlt: 'Industrial tools arranged on a workshop surface',
    accentLabel: 'Tools · Factory Hardware · Components',
    families: [
      {
        id: 'hand-tools',
        name: 'Hand Tools',
        description: 'A range of hand tools for installation, fabrication and operational use.',
      },
      {
        id: 'power-tools',
        name: 'Power Tools',
        description: 'Electrical and battery-powered tools for industrial and site applications.',
      },
      {
        id: 'factory-hardware',
        name: 'Factory Hardware',
        description: 'Hardware components and fittings for factory floor and production environments.',
      },
      {
        id: 'installation-equipment',
        name: 'Installation Equipment',
        description: 'Equipment and tools supporting the installation of aluminium and glass systems.',
      },
      {
        id: 'supporting-components',
        name: 'Supporting Components',
        description: 'Fasteners, fixings and supporting components for industrial applications.',
      },
    ],
  },
  {
    id: 'tapes-sealants',
    number: '03',
    slug: '/tapes-sealants',
    title: 'Tapes & Sealants',
    subtitle: 'Industrial tapes and sealants for construction, aluminium, glass and project requirements.',
    description:
      'SABIX International provides a comprehensive range of high-quality tapes and sealants for industrial, construction, aluminium, glass, and general project requirements. We also offer customization options based on specific project and customer requirements, ensuring the right product specifications and solutions for every application.',
    image: '/assets/images/tapes-sealants.jpg',
    imageAlt: 'Industrial tapes and sealants — SABIX International supply range',
    accentLabel: 'Tapes · Silicones · Sealants · Custom Options',
    families: [
      {
        id: 'tapes',
        name: 'Industrial Tapes',
        description: 'Clear Tape, Masking Tape, Duct Tape, Aluminium FSK Tape, and Protection Tape — for construction, aluminium and glass project applications.',
      },
      {
        id: 'silicones',
        name: 'Silicone Sealants',
        description: 'GP Silicone, Weatherproof Silicone and specialist silicone sealants for aluminium, glass and external building applications.',
      },
      {
        id: 'acrylic-sealants',
        name: 'Acrylic Sealants & Back-Rod',
        description: 'Acrylic sealants and Back-Rod backer rods for joint sealing in construction and industrial applications.',
      },
      {
        id: 'customization',
        name: 'Customization Available',
        description: 'Project-specific tape and sealant specifications sourced and supplied to match the exact requirements of your application or project.',
      },
    ],
  },
];

/**
 * Helper to find a category by slug
 */
export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug || c.slug === `/${slug}`);
