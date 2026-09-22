/**
 * QuoteForm — SABIX Design System
 * Premium B2B enquiry form.
 * Structured for easy API integration: onSubmit receives all field data.
 * Single-column on mobile, two-column on desktop where appropriate.
 */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { company } from '../data/company';

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  requirement: '',
  quantity: '',
  project: '',
  details: '',
};

const api_Key = import.meta.env.VITE_ACESS_KEY;
const QuoteForm = ({ onSuccess }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const COUNTRIES = [
    t('Saudi Arabia'), t('United States'), t('India'), t('United Arab Emirates'),
    t('Kuwait'), t('Qatar'), t('Bahrain'), t('Oman'), t('Jordan'), t('Egypt'),
    t('United Kingdom'), t('Germany'), t('Other'),
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form_data = {
      access_key: api_Key,
      ...form
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(form_data),

    });
    const data = await res.json();

    if (data.success) {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(form);
    } else {
      setLoading(false);
      alert(data.message);
    }
  };

  /* ── Field helper ── */
  const inputClass =
    'w-full bg-transparent border border-[var(--color-border)] px-4 py-3 text-sm ' +
    'text-[var(--color-text)] placeholder:text-[var(--color-muted)] ' +
    'focus:outline-none focus:border-[var(--color-primary)] ' +
    'transition-colors duration-200';

  const labelClass = 'block text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-[var(--color-muted)] mb-2';

  /* ── Success State ── */
  if (submitted) {
    return (
      <div className="py-16 text-center">
        <div className="inline-block w-10 h-10 border-2 border-[var(--color-secondary)] rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--color-secondary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-subheading mb-3">{t("Requirement received.")}</h3>
        <p className="text-body text-[var(--color-muted)] max-w-md mx-auto">
          {t("Thank you. Our team will review your requirement and be in touch shortly.")}
        </p>
        <button
          className="mt-8 text-eyebrow text-[var(--color-secondary)] hover:underline"
          onClick={() => setSubmitted(false)}
        >
          {t("Submit another requirement")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label={t("Request a quote form")}
      className="space-y-6"
    >
      {/* Row 1 — Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quote-name" className={labelClass}>
            {t("Full Name")} <span aria-hidden="true" className="text-[var(--color-secondary)]">*</span>
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("Your name")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="quote-company" className={labelClass}>
            {t("Company")} <span aria-hidden="true" className="text-[var(--color-secondary)]">*</span>
          </label>
          <input
            id="quote-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            placeholder={t("Company or organisation")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 — Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quote-email" className={labelClass}>
            {t("Email")} <span aria-hidden="true" className="text-[var(--color-secondary)]">*</span>
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("your@email.com")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className={labelClass}>{t("Phone")}</label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3 — Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quote-country" className={labelClass}>{t("Country")}</label>
          <select
            id="quote-country"
            name="country"
            value={form.country}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled>{t("Select country")}</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quote-quantity" className={labelClass}>{t("Quantity / Volume")}</label>
          <input
            id="quote-quantity"
            name="quantity"
            type="text"
            value={form.quantity}
            onChange={handleChange}
            placeholder={t("e.g. 500 units, bulk")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 4 — Product / Requirement */}
      <div>
        <label htmlFor="quote-requirement" className={labelClass}>
          {t("Product / Requirement")} <span aria-hidden="true" className="text-[var(--color-secondary)]">*</span>
        </label>
        <input
          id="quote-requirement"
          name="requirement"
          type="text"
          required
          value={form.requirement}
          onChange={handleChange}
          placeholder={t("e.g. Aluminium handles, glass hinges, spare parts")}
          className={inputClass}
        />
      </div>

      {/* Row 5 — Project / Application */}
      <div>
        <label htmlFor="quote-project" className={labelClass}>{t("Project / Application")}</label>
        <input
          id="quote-project"
          name="project"
          type="text"
          value={form.project}
          onChange={handleChange}
          placeholder={t("e.g. Commercial tower, factory fit-out, government project")}
          className={inputClass}
        />
      </div>

      {/* Row 6 — Additional Details */}
      <div>
        <label htmlFor="quote-details" className={labelClass}>{t("Additional Details")}</label>
        <textarea
          id="quote-details"
          name="details"
          rows={4}
          value={form.details}
          onChange={handleChange}
          placeholder={t("Any further specifications, standards, or context about your requirement.")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="pt-2 border-t border-[var(--color-border)]">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={loading}
          arrow={!loading}
          id="quote-form-submit"
          className="w-full sm:w-auto"
        >
          {loading ? t('Submitting…') : t('Submit Requirement')}
        </Button>
        <p className="text-meta mt-4">
          {t("Your enquiry is handled confidentially. We typically respond within 1–2 business days.")}
        </p>
      </div>
    </form>
  );
};

export default QuoteForm;
