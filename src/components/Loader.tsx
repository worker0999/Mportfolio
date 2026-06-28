import { useEffect, useState } from 'react';

export default function Loader() {
  const [status, setStatus] = useState<'visible' | 'exit' | 'hide'>('visible');

  useEffect(() => {
    // Keep loader visible for 2.5 seconds to showcase the cinematic fade
    const timerExit = setTimeout(() => {
      setStatus('exit');
    }, 2500);

    // Fully hide/unmount/remove loader after fade transition (takes 1.2s in CSS transition)
    const timerHide = setTimeout(() => {
      setStatus('hide');
    }, 3700);

    return () => {
      clearTimeout(timerExit);
      clearTimeout(timerHide);
    };
  }, []);

  if (status === 'hide') return null;

  return (
    <div id="loader" className={status === 'exit' ? 'exit' : ''}>
      <div className="loader-bg" style={{ backgroundImage: "url('/assets/13.jpeg')" }} />
      <div className="loader-overlay" />
      <div className="content">
        <div className="loader-portrait-wrapper">
          <img src="/assets/13.jpeg" alt="Mohammad Ashiq" className="loader-portrait" />
        </div>
        <div className="loader-text-group">
          <div className="bismillah">﷽</div>
          <div className="loader-name">Mohammad Ashiq</div>
        </div>
      </div>
    </div>
  );
}
