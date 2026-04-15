import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Bot, Workflow, LineChart, Cpu } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { lang, t } = useLanguage();
  
  // Need to map the icons dynamically based on index since JSON doesn't store JSX component
  const icons = [
    <Bot size={24}/>,
    <Workflow size={24}/>,
    <LineChart size={24}/>,
    <Code2 size={24}/>,
    <Database size={24}/>,
    <Cpu size={24}/>
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">{t.about.title}</h2>
          
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
            <p 
              style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}
              dangerouslySetInnerHTML={{ __html: t.about.summaryHtml }}
            ></p>
          </div>
        </motion.div>

        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>{t.about.technicalSkills}</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
          {t.about.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel skill-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '12px', 
                background: 'rgba(0, 240, 255, 0.1)', 
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {icons[index]}
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 600 }}>{skill.title}</h4>
              <p style={{ color: 'var(--text-secondary)' }}>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-cyan);
        }
      `}</style>
    </section>
  );
};

export default About;
