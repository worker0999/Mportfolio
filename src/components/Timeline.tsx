import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const start = vh * 0.85; // trigger fill line when 15% from bottom of screen
      const filled = start - rect.top;
      const pct = Math.max(0, Math.min(1, filled / total));
      setFillPercent(pct * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    { yr: '2023', ttl: 'Graduation', desc: 'Completed Bachelor of Engineering in Environmental Engineering.' },
    { yr: '2024', ttl: 'First Job', desc: 'Started career as an HSE Junior Engineer.' },
    { yr: '2024', ttl: 'Career Growth', desc: 'Expanded professional role, earning crucial safety certifications.' },
    { yr: '2026', ttl: 'Working in KSA', desc: 'Currently working as an HSE Engineer in the Kingdom of Saudi Arabia.' },
    { yr: 'Future', ttl: 'Building Family & Home', desc: 'Settle down, establishing a peaceful and blessed household.' },
  ];

  return (
    <section id="journey" className="timeline-section dark" style={{ background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle Background Accent Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          opacity: 0.03, 
          mixBlendMode: 'screen',
          backgroundImage: 'repeating-linear-gradient(45deg, var(--gold) 0 1px, transparent 1px 26px), repeating-linear-gradient(-45deg, var(--gold) 0 1px, transparent 1px 26px)' 
        }}
      />
      
      <div className="wrap relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Intro */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow on-dark">
                <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
                </svg>
                Career Path
              </div>
              <h2 className="section-title" style={{ marginTop: '1.2rem', fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', lineHeight: 1.05 }}>
                Professional <br/><em style={{ color: 'var(--gold-soft)' }}>Journey</em>
              </h2>
              <p className="lede" style={{ marginTop: '1.8rem', fontSize: '1.05rem', color: '#cfe0de', lineHeight: 1.6, maxWidth: '90%' }}>
                Currently employed in Saudi Arabia, with options to continue building professional skills abroad or settle in Bangalore. Financial responsibility and stable career growth are important parts of preparing for marriage and family life.
              </p>
              
              {/* Decorative Icon Box */}
              <div 
                className="mt-10 p-5 rounded-2xl hidden md:inline-flex"
                style={{ background: 'rgba(200,162,74,0.06)', border: '1px solid rgba(200,162,74,0.15)' }}
              >
                <Briefcase size={28} color="var(--gold-soft)" strokeWidth={1.5} />
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Timeline */}
          <div className="md:col-span-7 pt-8 md:pt-0">
            <div
              className="timeline"
              id="journeyTimeline"
              ref={timelineRef}
              style={{ '--fill': `${fillPercent}%`, marginTop: 0 } as React.CSSProperties}
            >
              {milestones.map((m, idx) => {
                // Calculate dynamic glow threshold (dots are spaced roughly evenly)
                const isGlowing = fillPercent > (idx * 23);
                
                return (
                  <motion.div 
                    key={idx} 
                    className={`t-item ${isGlowing ? 'in' : ''}`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ delay: idx * 0.15, duration: 0.7 }}
                  >
                    <div className="yr" style={{ fontSize: '1.8rem', transition: 'color 0.4s' }}>
                      {m.yr}
                    </div>
                    <div className="ttl" style={{ fontSize: '1.25rem', color: 'var(--cream)', fontWeight: 600, marginTop: '0.3rem' }}>
                      {m.ttl}
                    </div>
                    <p style={{ color: '#9fb6b3', fontSize: '0.95rem', marginTop: '0.6rem', lineHeight: 1.6, maxWidth: '420px' }}>
                      {m.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
