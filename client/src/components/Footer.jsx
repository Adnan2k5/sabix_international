/**
 * Footer — SABIX International
 * Four-column desktop grid, stacked on mobile.
 * All content driven from company.js and navigation.js.
 */
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { company } from '../data/company';
import { footerNav } from '../data/navigation';

const Footer = () => {
  const allLocations = [company.headquarters, ...company.branches];

  return (
    <footer
      role="contentinfo"
      className="section-border-top"
      style={{ backgroundColor: 'var(--color-primary)', color: 'rgba(255,255,255,0.7)' }}
    >
      <div className="container">
        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" aria-label="SABIX International — home" className="flex flex-col leading-none mb-6">
              <span className="text-lg font-bold tracking-[0.12em] uppercase text-white">
                {company.shortName}
              </span>
              <span className="text-[0.55rem] font-medium tracking-[0.18em] uppercase mt-0.5 text-white/40">
                International
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              {company.description}
            </p>

            {/* Social links — only rendered if URLs are set */}
            {(company.social.linkedin || company.social.twitter) && (
              <div className="flex items-center gap-4 mt-6">
                {company.social.linkedin && (
                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SABIX on LinkedIn"
                    className="text-white/30 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} strokeWidth={1.5} />
                  </a>
                )}
                {company.social.twitter && (
                  <a
                    href={company.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SABIX on X / Twitter"
                    className="text-white/30 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Col 2 — Company */}
          <div>
            <h3 className="text-eyebrow text-white/30 mb-6">Company</h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Products */}
          <div>
            <h3 className="text-eyebrow text-white/30 mb-6">Products</h3>
            <ul className="space-y-3">
              {footerNav.products.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Locations + Contact */}
          <div>
            <h3 className="text-eyebrow text-white/30 mb-6">Locations</h3>
            <ul className="space-y-5">
              {allLocations.map((loc, i) => (
                <li key={i} className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-white/80">
                    {loc.city || loc.country}
                  </span>
                  <span className="text-xs text-white/35">
                    {loc.country}{loc.label === 'Headquarters' ? ' — HQ' : ''}
                  </span>

                  {loc.phone && (
                    <a href={`tel:${loc.phone}`} className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors mt-1">
                      <Phone size={11} strokeWidth={1.5} />
                      {loc.phone}
                    </a>
                  )}
                  {loc.email && (
                    <a href={`mailto:${loc.email}`} className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors">
                      <Mail size={11} strokeWidth={1.5} />
                      {loc.email}
                    </a>
                  )}
                  {loc.address && (
                    <span className="flex items-start gap-1.5 text-xs text-white/35 mt-0.5">
                      <MapPin size={11} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" />
                      {loc.address}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-[11px] text-white/25">{company.legal.copyright}</p>

          <div className="flex items-center gap-5">
            <a
              href={company.legal.privacyPolicyUrl}
              className="text-[11px] text-white/25 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href={company.legal.termsUrl}
              className="text-[11px] text-white/25 hover:text-white/60 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
