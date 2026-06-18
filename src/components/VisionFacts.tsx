import { useEffect, useRef, useState } from 'react';

export default function VisionFacts() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const start = vh * 0.85;
      const filled = start - rect.top;
      const pct = Math.max(0, Math.min(1, filled / total));
      setFillPercent(pct * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visionSteps = [
    { yr: 'Year 1', ttl: 'Understanding & Building Trust' },
    { yr: 'Year 2', ttl: 'Travel & Experiences' },
    { yr: 'Year 3', ttl: 'Home & Stability' },
    { yr: 'Year 4', ttl: 'Personal Growth' },
    { yr: 'Year 5', ttl: 'Family Development' },
  ];

  return (
    <section id="vision" className="timeline-section dark">
      <div className="wrap vision-flex">
        {/* Left Column: Future Vision Timeline */}
        <div>
          <div className="eyebrow on-dark reveal">
            <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
            </svg>
            Looking Ahead
          </div>
          <h2 className="section-title reveal">Our Future <em>Vision</em></h2>
          <p className="lede reveal">
            I envision a marriage built upon trust, companionship, and shared goals. Together, I hope we can create a peaceful home, continue growing in our faith, support one another's ambitions, and raise a family grounded in Islamic values.
          </p>

          <div
            className="timeline"
            id="visionTimeline"
            ref={timelineRef}
            style={{ '--fill': `${fillPercent}%`, marginTop: '2.6rem' } as React.CSSProperties}
          >
            {visionSteps.map((step, idx) => (
              <div key={idx} className="t-item">
                <div className="yr">{step.yr}</div>
                <div className="ttl">{step.ttl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Facts Table */}
        <div>
          <table className="facts reveal">
            <tbody>
              <tr>
                <td>Height</td>
                <td>5.5 ft</td>
              </tr>
              <tr>
                <td>Profession</td>
                <td>HSE Engineer</td>
              </tr>
              <tr>
                <td>Religion</td>
                <td>Islam</td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>Never Married</td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>Tamil, English, Hindi, Urdu, Kannada, Arabic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
