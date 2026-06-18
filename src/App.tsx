import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Verse from './components/Verse';
import Snapshot from './components/Snapshot';
import About from './components/About';
import Values from './components/Values';
import Family from './components/Family';
import Timeline from './components/Timeline';
import Lifestyle from './components/Lifestyle';
import Gallery from './components/Gallery';
import Partner from './components/Partner';
import VisionFacts from './components/VisionFacts';
import ConnectForm from './components/ConnectForm';
import BiodataModal from './components/BiodataModal';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isBiodataOpen, setIsBiodataOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Bar Tracker
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const totalHeight = h.scrollHeight - h.clientHeight;
      if (totalHeight <= 0) return;
      const pct = (window.scrollY / totalHeight) * 100;
      setScrollProgress(pct);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reveal scroll animation observer
  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.12 } // Trigger slightly earlier for better flow
    );

    // Watch all elements marked for scroll reveal
    const elements = document.querySelectorAll('.reveal, .reveal-stagger');
    elements.forEach((el) => revealObs.observe(el));

    return () => {
      revealObs.disconnect();
    };
  }, []);

  // Active section highlights observer
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = {
      root: null,
      threshold: 0.2,
      rootMargin: '-30% 0px -30% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      {/* Page Loader */}
      <Loader />

      {/* Top Scroll Indicator */}
      <div id="progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation Header */}
      <Header
        activeSection={activeSection}
        onOpenBiodata={() => setIsBiodataOpen(true)}
      />

      {/* Layout Main Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero onOpenBiodata={() => setIsBiodataOpen(true)} />

        {/* Section 2: Verse */}
        <Verse />

        {/* Section 3: Snapshot */}
        <Snapshot />

        {/* Section 4: About */}
        <About />

        {/* Section 5: Values */}
        <Values />

        {/* Section 6: Family */}
        <Family />

        {/* Section 7: Timeline (Career Journey) */}
        <Timeline />

        {/* Section 8: Lifestyle */}
        <Lifestyle />

        {/* Section 9: Gallery */}
        <Gallery />

        {/* Section 10: Desired Qualities */}
        <Partner />

        {/* Section 11: Future Vision & Facts */}
        <VisionFacts />

        {/* Section 12: Contact Form */}
        <ConnectForm />
      </main>

      {/* Layout Footer */}
      <Footer />

      {/* Biodata Generator Modal Popup */}
      <BiodataModal
        isOpen={isBiodataOpen}
        onClose={() => setIsBiodataOpen(false)}
      />
    </div>
  );
}
