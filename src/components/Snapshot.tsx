import { useEffect, useRef, useState } from 'react';

export default function Snapshot() {
  const [age, setAge] = useState(0);
  const ageRef = useRef<HTMLDivElement>(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countedRef.current) {
            countedRef.current = true;
            let current = 0;
            const target = 26;
            const duration = 1000; // 1 second total animation
            const stepTime = Math.floor(duration / target);

            const timer = setInterval(() => {
              current += 1;
              setAge(current);
              if (current >= target) {
                clearInterval(timer);
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (ageRef.current) {
      observer.observe(ageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="snapshot">
      <div className="wrap">
        <div className="eyebrow reveal">
          <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
          </svg>
          At a Glance
        </div>
        <h2 className="section-title reveal">Quick <em>Snapshot</em></h2>
      </div>
      <div className="wrap">
        <div className="snap-grid reveal-stagger" ref={ageRef}>
          {/* Age Counter */}
          <div className="snap-card">
            <div className="num" id="ageCounter">
              {age}
            </div>
            <div className="lbl">Years Old</div>
          </div>
          {/* Education */}
          <div className="snap-card">
            <div className="num">
              BE <span className="text-[1.1rem] font-medium text-gold-dim">· Env. Eng.</span>
            </div>
            <div className="lbl">Education</div>
          </div>
          {/* Work Location */}
          <div className="snap-card">
            <div className="num">KSA</div>
            <div className="lbl">Currently Working In</div>
          </div>
          {/* Place of Origin */}
          <div className="snap-card">
            <div className="num">Bangalore</div>
            <div className="lbl">Place of Origin</div>
          </div>
        </div>
      </div>
    </section>
  );
}
