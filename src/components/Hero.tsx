import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';

interface HeroProps {
  onOpenBiodata: () => void;
}

export default function Hero({ onOpenBiodata }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home">
      {/* Parallax background image */}
      <div
        className="bg"
        style={{
          backgroundImage: "url('/assets/4.jpeg')",
          transform: `scale(1.12) translateY(${scrollY * 0.18}px)`,
        }}
      />
      <div className="pattern" />
      <div className="overlay" />

      <div className="hero-inner">
        {/* Rosette Eyebrow */}
        <div className="eyebrow on-dark">
          <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
          </svg>
          Marriage Portfolio
        </div>

        {/* Name Title with delay reveal */}
        <h1>
          <span className="word" style={{ animationDelay: '0.1s' }}>Mohammad</span>
          <br />
          <span className="word" style={{ animationDelay: '0.28s' }}>Ashiq</span>
        </h1>

        {/* Subtitle/Role */}
        <div className="role">HSE Engineer · Kingdom of Saudi Arabia</div>

        {/* Metadata row */}
        <div className="meta-row">
          <div>
            <strong>26</strong>Years Old
          </div>
          <div>
            <strong>Bangalore</strong>Place of Origin
          </div>
          <div>
            <strong>Never Married</strong>Marital Status
          </div>
          <div>
            <strong>Islam</strong>Religion
          </div>
          {/* Action button for Biodata Modal */}
          <button
            onClick={onOpenBiodata}
            className="flex items-center gap-1.5 font-sans text-[0.78rem] font-bold uppercase tracking-[0.08em] text-gold-soft hover:text-gold transition-colors cursor-pointer border border-gold-soft/30 hover:border-gold-soft/80 px-4 py-1.5 rounded-full mt-2"
          >
            <FileText className="w-3.5 h-3.5" /> View Biodata
          </button>
        </div>
      </div>

      {/* Down Scroll Cue */}
      <a href="#about" className="scroll-cue">
        <span>Scroll</span>
        <div className="line" />
      </a>
    </section>
  );
}
