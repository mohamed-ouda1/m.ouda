import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link as LinkIcon, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// We'll use a simple SVG for WhatsApp since lucide doesn't have it explicitly named WhatsApp in standard set sometimes
const WhatsAppIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Contact = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="section" style={{ position: 'relative', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: lang === 'ar' ? 'auto' : '5%',
          left: lang === 'ar' ? '5%' : 'auto',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.08) 0%, transparent 60%)',
          zIndex: -1
        }}></div>

      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">{t.contact.title}</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
            {t.contact.subtitle}
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            
            <a href="mailto:mohamed.ouda.el@gmail.com" className="glass-panel contact-card" style={{ textDecoration: 'none' }}>
              <div style={{ color: 'var(--accent-cyan)' }}><Mail size={32} /></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{t.contact.email}</h4>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>mohamed.ouda.el@gmail.com</span>
              </div>
            </a>
            
            <a href="https://wa.me/201508155746" target="_blank" rel="noreferrer" className="glass-panel contact-card" style={{ textDecoration: 'none' }}>
              <div style={{ color: '#25D366' }}><WhatsAppIcon size={32} /></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{t.contact.whatsapp}</h4>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+20 1508155746</span>
              </div>
            </a>

            <a href="tel:+201508155746" className="glass-panel contact-card" style={{ textDecoration: 'none' }}>
              <div style={{ color: 'var(--accent-purple)' }}><Phone size={32} /></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{t.contact.phone}</h4>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+20 1508155746</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/mohamed-ouda5606" target="_blank" rel="noreferrer" className="glass-panel contact-card" style={{ textDecoration: 'none' }}>
              <div style={{ color: 'var(--accent-cyan)' }}><LinkIcon size={32} /></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{t.contact.linkedin}</h4>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>mohamed-ouda5606</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
        <p>© {new Date().getFullYear()} Mohamed Ouda Elsayed. All Rights Reserved.</p>
      </footer>
      
      <style>{`
        .contact-card {
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
};

export default Contact;
