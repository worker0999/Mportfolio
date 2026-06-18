export default function Partner() {
  const cards = [
    {
      title: 'Good Character',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="1.6" className="w-8 h-8">
          <path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12c-2.5 4.65-9.5 9-9.5 9z" />
        </svg>
      ),
    },
    {
      title: 'Respectful Nature',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="1.6" className="w-8 h-8">
          <path d="M12 2l2.4 6.6L21 10l-5 4.3L17.5 21 12 17.3 6.5 21 8 14.3 3 10l6.6-1.4z" />
        </svg>
      ),
    },
    {
      title: 'Family Values',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="1.6" className="w-8 h-8">
          <path d="M4 21v-6a4 4 0 014-4h8a4 4 0 014 4v6M8 11V7a4 4 0 118 0v4" />
        </svg>
      ),
    },
    {
      title: 'Islamic Mindset',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="1.6" className="w-8 h-8">
          <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z" />
        </svg>
      ),
    },
    {
      title: 'Emotional Maturity',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="1.6" className="w-8 h-8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: 'Positive Communication',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="1.6" className="w-8 h-8">
          <path d="M21 11.5a8.4 8.4 0 01-8.4 8.4 8.6 8.6 0 01-3.8-.9L3 20l1.1-5.6a8.4 8.4 0 1116.9-2.9z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="qualities">
      <div className="wrap">
        <div className="eyebrow reveal">
          <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
          </svg>
          What I'm Looking For
        </div>
        <h2 className="section-title reveal">Desired <em>Qualities</em></h2>
        <p className="q-quote reveal">
          "I seek a practicing Muslimah who values faith, kindness, family relationships, and personal growth. More than perfection, I value sincerity, good character, and a willingness to build a life together through mutual understanding and support."
        </p>
        <div className="q-grid reveal-stagger">
          {cards.map((card, idx) => (
            <div key={idx} className="q-card">
              {card.icon}
              <span>{card.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
