import React from 'react';
import { motion } from 'framer-motion';
import { Network, MessageSquare, BarChart3, DatabaseZap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Projects = () => {
  const { lang, t } = useLanguage();
  
  const icons = [
    <Network size={28} />,
    <MessageSquare size={28} />,
    <BarChart3 size={28} />,
    <DatabaseZap size={28} />
  ];

  return (
    <section id="projects" className="section" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">{t.projects.title}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
            {t.projects.list.map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel project-card"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative background glow for card */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: lang === 'ar' ? 'auto' : '-50px',
                  left: lang === 'ar' ? '-50px' : 'auto',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>

                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(138, 43, 226, 0.1))',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.05)',
                  zIndex: 1
                }}>
                  {icons[index]}
                </div>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, zIndex: 1, lineHeight: '1.4' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-secondary)', zIndex: 1, flex: 1 }}>{proj.desc}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', zIndex: 1, marginTop: 'auto' }}>
                  {proj.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '4px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      color: 'var(--accent-cyan)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        .project-card {
          transition: all 0.4s ease;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(138, 43, 226, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Projects;
