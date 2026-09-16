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
    id:       'aluminium-glass-accessories',
    number:   '01',
    slug:     '/aluminium-glass-accessories',
    title:    'Aluminium & Glass Accessories',
    subtitle: 'Hardware and accessories for aluminium and glass applications.',
    description:
      'From architectural handles and hinges to glass fittings and connectors — SABIX supplies the hardware components that aluminium and glass projects require.',
    image:    '/assets/images/aluminium-accessories.jpg',
    imageAlt: 'Aluminium hardware accessories on a clean surface',
    accentLabel: 'Aluminium · Glass · Hardware',
    families: [
      {
        id:          'handles',
        name:        'Handles',
        description: 'Architectural and functional handles for aluminium and glass door and window systems.',
      },
      {
        id:          'hinges',
        name:        'Hinges',
        description: 'Heavy-duty and precision hinges for a range of aluminium and glass applications.',
      },
      {
        id:          'glass-fittings',
        name:        'Glass Fittings',
        description: 'Brackets, clamps, spiders and connectors for structural and decorative glass installations.',
      },
      {
        id:          'locks',
        name:        'Locks & Latches',
        description: 'Locking mechanisms and latches for aluminium frame and glass door systems.',
      },
      {
        id:          'profiles',
        name:        'Aluminium Profiles',
        description: 'Standard and project-specific aluminium profiles and extrusions.',
      },
      {
        id:          'sliding-hardware',
        name:        'Sliding Hardware',
        description: 'Rollers, tracks and accessories for sliding aluminium and glass systems.',
      },
      {
        id:          'architectural-accessories',
        name:        'Architectural Accessories',
        description: 'Finishing and installation accessories for architectural glazing and aluminium façade projects.',
      },
      {
        id:          'bars',
        name:        'Aluminium Bars',
        description: 'Aluminium bars and structural components for project fabrication requirements.',
      },
    ],
  },
  {
    id:       'tools-hardware',
    number:   '02',
    slug:     '/tools-hardware',
    title:    'Tools & Hardware',
    subtitle: 'Tools, factory hardware and supporting components for industrial and project requirements.',
    description:
      'SABIX supplies tools and factory hardware to support operational and project requirements — from hand tools and power tools to factory hardware and supporting components.',
    image:    '/assets/images/tools-hardware.jpg',
    imageAlt: 'Industrial tools arranged on a workshop surface',
    accentLabel: 'Tools · Factory Hardware · Components',
    families: [
      {
        id:          'hand-tools',
        name:        'Hand Tools',
        description: 'A range of hand tools for installation, fabrication and operational use.',
      },
      {
        id:          'power-tools',
        name:        'Power Tools',
        description: 'Electrical and battery-powered tools for industrial and site applications.',
      },
      {
        id:          'factory-hardware',
        name:        'Factory Hardware',
        description: 'Hardware components and fittings for factory floor and production environments.',
      },
      {
        id:          'installation-equipment',
        name:        'Installation Equipment',
        description: 'Equipment and tools supporting the installation of aluminium and glass systems.',
      },
      {
        id:          'supporting-components',
        name:        'Supporting Components',
        description: 'Fasteners, fixings and supporting components for industrial applications.',
      },
    ],
  },
  {
    id:       'spare-parts',
    number:   '03',
    slug:     '/spare-parts',
    title:    'Spare Parts',
    subtitle: 'Replacement components and spare parts supporting project and operational requirements.',
    description:
      'SABIX sources and supplies spare parts to help maintain operational continuity — from replacement hardware components to project-specific parts across aluminium, glass and industrial applications.',
    image:    '/assets/images/spare-parts.jpg',
    imageAlt: 'Precision mechanical spare parts and components',
    accentLabel: 'Spare Parts · Replacement · Sourcing',
    families: [
      {
        id:          'aluminium-spares',
        name:        'Aluminium System Spares',
        description: 'Replacement parts for aluminium door, window and façade systems.',
      },
      {
        id:          'glass-hardware-spares',
        name:        'Glass Hardware Spares',
        description: 'Replacement fittings and components for glass hardware systems.',
      },
      {
        id:          'mechanical-parts',
        name:        'Mechanical Components',
        description: 'General mechanical spare parts for factory and industrial operational requirements.',
      },
      {
        id:          'project-parts',
        name:        'Project-Specific Parts',
        description: 'Sourcing support for project-specific spare parts and replacement components.',
      },
    ],
  },
];

/**
 * Helper to find a category by slug
 */
export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug || c.slug === `/${slug}`);
