/**
 * SABIX INTERNATIONAL — NAVIGATION DATA
 * Primary navigation structure. Update here to change menus site-wide.
 *
 * type: 'route' → NavLink with active-state highlighting (actual page routes)
 * type: 'hash'  → plain <a href> (hash-scroll, no active highlighting)
 */

export const mainNav = [
  { label: 'Solutions',    href: '/solutions',     type: 'route' },
  { label: 'Partnerships', href: '/partnerships',  type: 'route' },
  { label: 'Home',         href: '/',              type: 'route' },
  { label: 'About',        href: '/about',         type: 'route' },
  { label: 'Contact',      href: '/contact',       type: 'route' },
];

export const productDomains = [
  {
    number: '01',
    label: 'Aluminium & Glass Accessories',
    href: '/aluminium-glass-accessories',
  },
  {
    number: '02',
    label: 'Tools & Hardware',
    href: '/tools-hardware',
  },
  {
    number: '03',
    label: 'Spare Parts',
    href: '/spare-parts',
  },
];

export const footerNav = {
  company: [
    { label: 'About',        href: '/about' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Contact',      href: '/contact' },
  ],
  products: [
    { label: 'Aluminium & Glass Accessories', href: '/aluminium-glass-accessories' },
    { label: 'Tools & Hardware',              href: '/tools-hardware' },
    { label: 'Spare Parts',                   href: '/spare-parts' },
  ],
};
