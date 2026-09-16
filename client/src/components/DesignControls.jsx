/**
 * DesignControls — SABIX Development Tool
 * Floating color picker widget for brand experimentation.
 *
 * Set ENABLE_DESIGN_CONTROLS = false before production deployment.
 * When false, this component renders nothing and leaves no DOM footprint.
 */
import { useState, useEffect, useRef } from 'react';
import { Copy, Check, RotateCcw, Palette, X } from 'lucide-react';

const ENABLE_DESIGN_CONTROLS = true;

const DEFAULT_COLORS = {
  primary:   '#242424',
  secondary: '#E87524',
};

const STORAGE_KEY = 'sabix_design_colors';

/* ── Helpers ── */
const applyColors = ({ primary, secondary }) => {
  const root = document.documentElement;
  root.style.setProperty('--color-primary',       primary);
  root.style.setProperty('--color-primary-hover',  adjustBrightness(primary, 20));
  root.style.setProperty('--color-secondary',      secondary);
  root.style.setProperty('--color-secondary-hover', adjustBrightness(secondary, -20));
};

const adjustBrightness = (hex, amount) => {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

const isValidHex = (val) => /^#[0-9A-Fa-f]{6}$/.test(val);

/* ── Sub-component: color row ── */
const ColorRow = ({ label, colorKey, colors, setColors, syncedKey, setSyncedKey }) => {
  const [hexInput, setHexInput] = useState(colors[colorKey]);
  const [copied, setCopied]     = useState(false);
  const inputRef = useRef(null);

  // Keep hex input in sync when colors reset externally
  useEffect(() => {
    setHexInput(colors[colorKey]);
  }, [colors[colorKey]]);

  const handlePickerChange = (e) => {
    const val = e.target.value;
    setHexInput(val);
    setColors((prev) => {
      const next = { ...prev, [colorKey]: val };
      applyColors(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const handleHexInput = (e) => {
    const val = e.target.value;
    setHexInput(val);
    if (isValidHex(val)) {
      setColors((prev) => {
        const next = { ...prev, [colorKey]: val };
        applyColors(next);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(colors[colorKey]).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {label}
      </span>
      <div className="flex items-center gap-2">
        {/* Color swatch / native picker */}
        <label className="relative cursor-pointer flex-shrink-0" aria-label={`Pick ${label} color`}>
          <div
            className="w-8 h-8 border border-white/20 flex-shrink-0"
            style={{ backgroundColor: colors[colorKey] }}
            title="Click to pick color"
          />
          <input
            type="color"
            value={colors[colorKey]}
            onChange={handlePickerChange}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            aria-label={`${label} color picker`}
          />
        </label>

        {/* HEX input */}
        <input
          ref={inputRef}
          type="text"
          value={hexInput}
          onChange={handleHexInput}
          maxLength={7}
          spellCheck={false}
          className="flex-1 min-w-0 bg-white/10 border border-white/15 px-2.5 py-1.5 text-[11px] font-mono text-white focus:outline-none focus:border-white/40 transition-colors"
          aria-label={`${label} hex value`}
          style={{ fontFamily: 'ui-monospace, Consolas, monospace' }}
        />

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label} color`}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-white/15 hover:border-white/40 text-white/60 hover:text-white transition-all"
          title="Copy hex"
        >
          {copied
            ? <Check size={12} strokeWidth={2} />
            : <Copy size={12} strokeWidth={1.5} />}
        </button>
      </div>
    </div>
  );
};

/* ── Main component ── */
const DesignControls = () => {
  if (!ENABLE_DESIGN_CONTROLS) return null;

  const [open, setOpen]       = useState(false);
  const [colors, setColors]   = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_COLORS;
    } catch {
      return DEFAULT_COLORS;
    }
  });
  const [syncedKey, setSyncedKey] = useState(null);

  // Apply stored colors on mount
  useEffect(() => {
    applyColors(colors);
  }, []);

  const handleReset = () => {
    setColors(DEFAULT_COLORS);
    applyColors(DEFAULT_COLORS);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      {/* Mobile / collapsed trigger */}
      <div
        className="fixed z-[9999]"
        style={{ bottom: '1.25rem', right: '1.25rem' }}
        role="region"
        aria-label="Design controls"
      >
        {!open && (
          <button
            onClick={() => setOpen(true)}
            aria-label="Open design controls"
            className="flex items-center gap-2 px-3 py-2.5 text-white text-[11px] font-semibold tracking-[0.1em] uppercase transition-all hover:-translate-y-px"
            style={{ backgroundColor: 'var(--color-primary)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Palette size={13} strokeWidth={1.5} />
            <span className="hidden sm:inline">Design</span>
          </button>
        )}

        {open && (
          <div
            className="w-60 shadow-2xl"
            style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2">
                <Palette size={12} strokeWidth={1.5} style={{ color: 'var(--color-secondary)' }} />
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/70">
                  Design Controls
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close design controls"
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>

            {/* Controls */}
            <div className="p-4 space-y-4">
              <ColorRow
                label="Primary"
                colorKey="primary"
                colors={colors}
                setColors={setColors}
                syncedKey={syncedKey}
                setSyncedKey={setSyncedKey}
              />
              <ColorRow
                label="Secondary"
                colorKey="secondary"
                colors={colors}
                setColors={setColors}
                syncedKey={syncedKey}
                setSyncedKey={setSyncedKey}
              />

              {/* Reset */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.1em] uppercase text-white/40 hover:text-white/80 transition-colors"
                >
                  <RotateCcw size={10} strokeWidth={2} />
                  Reset to defaults
                </button>
              </div>

              {/* Dev note */}
              <p className="text-[9px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'ui-monospace' }}>
                Set ENABLE_DESIGN_CONTROLS = false to hide before production.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DesignControls;
