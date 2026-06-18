export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        {/* Left Column: Photo with Corner Frames */}
        <div className="about-photo reveal">
          <div className="frame">
            <img src="/assets/1.jpeg" alt="Mohammad Ashiq" />
          </div>
          <div className="corner tl" />
          <div className="corner br" />
        </div>

        {/* Right Column: Text & Traits */}
        <div className="about-text reveal">
          <div className="eyebrow">
            <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
            </svg>
            Who I Am
          </div>
          <h2 className="section-title">A Life Built on <em>Faith &amp; Family</em></h2>
          <p>
            I am a 26-year-old Muslim professional currently working in the Kingdom of Saudi Arabia. I strive to maintain a balanced life centered around faith, family, personal growth, and professional development.
          </p>
          <p>
            Those who know me describe me as respectful, responsible, calm-natured, and family-oriented — values I carry into every part of my life, including the one I hope to build next.
          </p>
          <div className="trait-row">
            <div className="trait">Respectful</div>
            <div className="trait">Responsible</div>
            <div className="trait">Calm-Natured</div>
            <div className="trait">Family-Oriented</div>
          </div>
        </div>
      </div>
    </section>
  );
}
