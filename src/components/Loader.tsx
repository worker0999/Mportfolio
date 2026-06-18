import { useEffect, useState } from 'react';

export default function Loader() {
  const [status, setStatus] = useState<'visible' | 'exit' | 'hide'>('visible');

  useEffect(() => {
    // Keep loader visible for 2 seconds to showcase the animation
    const timerExit = setTimeout(() => {
      setStatus('exit');
    }, 2000);

    // Fully hide/unmount/remove loader after panels slide open (takes 1.1s in CSS transition)
    const timerHide = setTimeout(() => {
      setStatus('hide');
    }, 3100);

    return () => {
      clearTimeout(timerExit);
      clearTimeout(timerHide);
    };
  }, []);

  if (status === 'hide') return null;

  return (
    <div id="loader" className={status === 'exit' ? 'exit' : ''}>
      <div className="panel left" />
      <div className="panel right" />
      <div className="content">
        <svg className="rosette-draw" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            className="rosette"
            d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z"
          />
        </svg>
        <div className="bismillah">﷽</div>
        <div className="loader-name">Mohammad Ashiq</div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
