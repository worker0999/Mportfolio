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
            <img src="/assets/6.jpeg" alt="Travel" />
            <div className="tag">Travel</div>
          </div>

          {/* Card 2: Fitness Dumbbell Icon */}
          <div className="life-card icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gold-soft)"
              strokeWidth="1.6"
              className="w-[54px] h-[54px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 7v10M2 9v6M18 7v10M22 9v6M6 12h12" />
            </svg>
            <span>Fitness</span>
          </div>

          {/* Card 3: Cultures Image */}
          <div className="life-card">
            <img src="/assets/1.jpeg" alt="Cultures" />
            <div className="tag">Cultures</div>
          </div>

          {/* Card 4: Family Time Icon */}
          <div className="life-card icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gold-soft)"
              strokeWidth="1.6"
              className="w-[54px] h-[54px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 21v-6a4 4 0 014-4h8a4 4 0 014 4v6M8 11V7a4 4 0 118 0v4" />
            </svg>
            <span>Family Time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
