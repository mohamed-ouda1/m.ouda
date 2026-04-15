import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link as LinkIcon, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '100px',
      direction: lang === 'ar' ? 'rtl' : 'ltr'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '4rem',
        flexWrap: 'wrap-reverse'
      }}>
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 500px' }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '6px 16px', 
              background: 'rgba(0, 240, 255, 0.1)',
              borderRadius: '50px',
              color: 'var(--accent-cyan)',
              fontWeight: 600,
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}
          >
            <MapPin size={16} /> {t.hero.location}
          </motion.div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            {t.hero.hi} <br />
            <span className="gradient-text">{t.hero.name}</span>
          </h1>
          
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 500, 
            color: 'var(--text-secondary)',
            textAlign: lang === 'ar' ? 'right' : 'left',
            marginBottom: '1.5rem'
          }}>
            {t.hero.title}
          </h2>
          
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '2.5rem',
            maxWidth: '600px'
          }}>
            {t.hero.summary}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              <Mail size={18} /> {t.hero.contactBtn}
            </a>
            <a href="https://linkedin.com/in/mohamed-ouda5606" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <LinkIcon size={18} /> {t.hero.linkedinBtn}
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: '-10px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              borderRadius: '50%',
              filter: 'blur(20px)',
              opacity: 0.6,
              animation: 'pulse 4s infinite alternate'
            }}></div>
            <img 
              src="/profile-pic.png" 
              alt="Mohamed Ouda" 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '4px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                zIndex: 1
              }} 
            />
          </div>
        </motion.div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
