export default function Lifestyle() {
  return (
    <section id="lifestyle">
      <div className="wrap">
        <div className="eyebrow reveal">
          <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
          </svg>
          How I Live
        </div>
        <h2 className="section-title reveal">My <em>Lifestyle</em></h2>
        <p className="lede reveal">
          I enjoy spending time with family, exploring new places, reading beneficial content, maintaining fitness, and engaging in meaningful conversations with friends.
        </p>
        <div className="life-grid reveal-stagger">
          {/* Card 1: Travel Image */}
          <div className="life-card">
            <img src="/assets/7.jpeg" alt="Travel" />
            <div className="tag">Travel</div>
          </div>

          {/* Card 2: Fitness Image */}
          <div className="life-card">
            <img src="/assets/16.jpeg" alt="Fitness" />
            <div className="tag">Fitness</div>
          </div>

          {/* Card 3: Cultures Image */}
          <div className="life-card">
            <img src="/assets/1.jpeg" alt="Cultures" />
            <div className="tag">Cultures</div>
          </div>

          {/* Card 4: Family Time Image */}
          <div className="life-card">
            <img src="/assets/14.jpeg" alt="Family Time" />
            <div className="tag">Family Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
