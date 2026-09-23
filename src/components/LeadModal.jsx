import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/languageContext';
import { saveLead } from '../lib/leadStorage';

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [niche, setNiche] = useState('');
  const [salesChannel, setSalesChannel] = useState('');
  const [instagram, setInstagram] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-lead-modal', handleOpen);
    return () => window.removeEventListener('open-lead-modal', handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await saveLead({
      name: name.trim(),
      phone: phone.trim(),
      company: company.trim(),
      niche: niche.trim(),
      sales_channel: salesChannel.trim(),
      instagram: instagram.trim(),
    });
    
    // Construct WhatsApp message template
    const template = t('leadForm.waTemplate');
    const formattedMsg = template
      .replace('{name}', name)
      .replace('{phone}', phone)
      .replace('{company}', company)
      .replace('{niche}', niche)
      .replace('{salesChannel}', salesChannel)
      .replace('{instagram}', instagram);

    const WHATSAPP_NUM = "555491484194";
    const waUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(formattedMsg)}`;
    
    // Redirect user to WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    // Close modal & reset fields
    setIsOpen(false);
    setName('');
    setPhone('');
    setCompany('');
    setNiche('');
    setSalesChannel('');
    setInstagram('');
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="lead-modal-overlay" onClick={handleClose}>
      <div
        className="lead-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lead-modal-accent" aria-hidden="true" />
        <button className="lead-modal-close" onClick={handleClose} aria-label={t('leadForm.close')}>
          &times;
        </button>
        <header className="lead-modal-header">
          <span className="lead-modal-eyebrow">{t('leadForm.eyebrow')}</span>
          <h3 id="lead-modal-title">{t('leadForm.title')}</h3>
          <p>{t('leadForm.description')}</p>
        </header>
        <form className="lead-modal-form" onSubmit={handleSubmit}>
          <div className="lead-modal-field">
            <label htmlFor="lead-name">{t('leadForm.name')}</label>
            <input
              type="text"
              id="lead-name"
              required
              autoComplete="name"
              placeholder={t('leadForm.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="lead-modal-input"
              autoFocus
            />
          </div>

          <div className="lead-modal-field">
            <label htmlFor="lead-phone">{t('leadForm.phone')}</label>
            <input
              type="tel"
              id="lead-phone"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder={t('leadForm.phonePlaceholder')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="lead-modal-input"
            />
          </div>

          <div className="lead-modal-field">
            <label htmlFor="lead-company">{t('leadForm.company')}</label>
            <input
              type="text"
              id="lead-company"
              required
              autoComplete="organization"
              placeholder={t('leadForm.companyPlaceholder')}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="lead-modal-input"
            />
          </div>

          <div className="lead-modal-field">
            <label htmlFor="lead-niche">{t('leadForm.niche')}</label>
            <input
              type="text"
              id="lead-niche"
              required
              placeholder={t('leadForm.nichePlaceholder')}
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="lead-modal-input"
            />
          </div>

          <div className="lead-modal-field">
            <label htmlFor="lead-sales-channel">{t('leadForm.salesChannel')}</label>
            <input
              type="text"
              id="lead-sales-channel"
              required
              placeholder={t('leadForm.salesChannelPlaceholder')}
              value={salesChannel}
              onChange={(e) => setSalesChannel(e.target.value)}
              className="lead-modal-input"
            />
          </div>

          <div className="lead-modal-field">
            <label htmlFor="lead-instagram">{t('leadForm.instagram')}</label>
            <input
              type="text"
              id="lead-instagram"
              required
              autoComplete="off"
              placeholder={t('leadForm.instagramPlaceholder')}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="lead-modal-input"
            />
          </div>

          <div className="lead-modal-action">
            <button type="submit" className="lead-modal-submit" disabled={isSubmitting}>
              <span>{isSubmitting ? t('leadForm.submitting') : t('leadForm.submit')}</span>
              <span aria-hidden="true">↗</span>
            </button>
            <p>{t('leadForm.privacy')}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
