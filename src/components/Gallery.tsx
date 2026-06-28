import { useState, useEffect } from 'react';

export default function Gallery() {
  const images = [
    { src: '/assets/3.jpeg', cap: 'Beach Ride', isTall: true },
    { src: '/assets/12.jpeg', cap: 'An Evening Out', isTall: false },
    { src: '/assets/14.jpeg', cap: 'By the Marina', isTall: false },
    { src: '/assets/7.jpeg', cap: 'On the Water', isTall: true },
    { src: '/assets/10.jpeg', cap: 'Quiet Shoreline', isTall: false },
    { src: '/assets/15.jpeg', cap: 'Pier Sunset', isTall: false },
    { src: '/assets/11.jpeg', cap: 'Beach Ride', isTall: true },
    { src: '/assets/16.jpeg', cap: 'Golden Hour', isTall: false },
  ];

  const [selectedImg, setSelectedImg] = useState<{ src: string; cap: string } | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    if (selectedImg) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedImg]);

  return (
    <section id="gallery" className="on-dark">
      <div className="wrap">
        <div className="eyebrow on-dark reveal">
          <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
          </svg>
          Moments
        </div>
        <h2 className="section-title reveal">Portfolio <em>Highlights</em></h2>
        <div className="gallery-grid reveal-stagger">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`g-item ${img.isTall ? 'tall' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.src} alt={img.cap} />
              <div className="cap">{img.cap}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="lb-overlay" onClick={() => setSelectedImg(null)}>
          <button
            className="lb-close"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.src} alt={selectedImg.cap} className="lb-img" />
            <div className="lb-cap">{selectedImg.cap}</div>
          </div>
        </div>
      )}
    </section>
  );
}
