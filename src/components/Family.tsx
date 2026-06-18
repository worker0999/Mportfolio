export default function Family() {
  return (
    <section id="family">
      <div className="wrap">
        <div className="eyebrow reveal">
          <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
          </svg>
          Roots
        </div>
        <h2 className="section-title reveal">My <em>Family</em></h2>
        <div className="family-card reveal">
          {/* Custom family SVG */}
          <div className="family-icon">
            <svg viewBox="0 0 100 100" fill="none" stroke="var(--gold)" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="30" r="12" />
              <circle cx="65" cy="30" r="12" />
              <path d="M15 85 C15 60 25 50 35 50 C45 50 50 58 50 58 C50 58 55 50 65 50 C75 50 85 60 85 85" />
            </svg>
          </div>
          <div>
            <p className="lede !max-w-[60ch]">
              Alhamdulillah, I come from a respected and supportive family that values education, faith, and strong family bonds. We maintain close relationships and believe in mutual care and respect among family members.
            </p>
            <div className="family-list">
              <div>
                <b>Father's Occupation</b>
                <span>Retired Businessman</span>
              </div>
              <div>
                <b>Mother's Occupation</b>
                <span>Home Maker</span>
              </div>
              <div>
                <b>Siblings</b>
                <span>1 Younger</span>
              </div>
              <div>
                <b>Family Location</b>
                <span>Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
