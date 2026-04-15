import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Certifications = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="certifications" className="section" style={{ position: 'relative', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: lang === 'ar' ? 'auto' : '10%',
          right: lang === 'ar' ? '10%' : 'auto',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 60%)',
          zIndex: -1
        }}></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">{t.certs.title}</h2>
          
          <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', marginTop: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
              {t.certs.list.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                >
                  <div style={{ color: 'var(--accent-cyan)', marginTop: '4px' }}>
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {cert.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
