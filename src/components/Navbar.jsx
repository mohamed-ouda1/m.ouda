import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.certs, href: '#certifications' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      background: 'rgba(10, 10, 15, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 2rem',
      direction: lang === 'ar' ? 'rtl' : 'ltr'
    }}>
      <div className="nav-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <motion.div 
          initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '1.5rem', fontWeight: 800 }}
          className="gradient-text"
        >
          {lang === 'ar' ? 'محمد عودة' : 'M. Ouda'}
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </motion.a>
          ))}
          
          <button 
            onClick={toggleLanguage} 
            className="btn btn-secondary" 
            style={{ padding: '6px 12px', fontSize: '0.9rem', gap: '6px' }}
          >
            <Globe size={16} /> 
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .nav-container {
            justify-content: center !important;
          }
          .desktop-nav { 
            flex-wrap: wrap; 
            justify-content: center;
            gap: 1rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
