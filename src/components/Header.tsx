import { useState, useEffect } from 'react';
import { X, FileText } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onOpenBiodata: () => void;
}

export default function Header({ activeSection, onOpenBiodata }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Family', href: '#family', id: 'family' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Lifestyle', href: '#lifestyle', id: 'lifestyle' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Vision', href: '#vision', id: 'vision' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header id="siteHeader" className={isScrolled ? 'scrolled' : ''}>
      {/* Brand Logo */}
      <a href="#home" className="brand">
        <svg className="rosette rosette-spin" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
        </svg>
        Mohammad Ashiq
      </a>

      {/* Desktop Links */}
      <nav className={`links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={activeSection === item.id ? 'active' : ''}
          >
            {item.label}
          </a>
        ))}
        {/* Biodata Button in Navigation */}
        <button
          onClick={() => {
            setIsMenuOpen(false);
            onOpenBiodata();
          }}
          className="flex items-center gap-1 text-[0.74rem] tracking-[0.16em] uppercase font-medium text-[#cfe0de] hover:text-gold-soft transition-colors cursor-pointer"
          style={{ paddingBottom: '6px' }}
        >
          <FileText className="w-[14px] h-[14px]" /> Biodata
        </button>
      </nav>

      {/* Mobile Toggle */}
      <button
        className="nav-toggle"
        id="navToggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-cream" />
        ) : (
          <div className="flex flex-col gap-[5px]">
            <span className="w-[22px] h-[2px] bg-cream" />
            <span className="w-[22px] h-[2px] bg-cream" />
            <span className="w-[22px] h-[2px] bg-cream" />
          </div>
        )}
      </button>
    </header>
  );
}
