import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="navbar" className={`fixed top-0 w-full z-50 glass-nav ambient-glow transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav className="flex justify-between items-center px-6 md:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tighter gradient-text select-none">
          MANUEL.DEV
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#projects" className="nav-link text-white/60 hover:text-white transition-colors duration-300">Projects</Link>
          <Link href="#experience" className="nav-link text-white/60 hover:text-white transition-colors duration-300">Experience</Link>
          <Link href="#skills" className="nav-link text-white/60 hover:text-white transition-colors duration-300">Skills</Link>
          <Link href="#about" className="nav-link text-white/60 hover:text-white transition-colors duration-300">About</Link>
          <Link href="#contact" className="nav-link text-white/60 hover:text-white transition-colors duration-300">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Download CV */}
          <a href="#" className="btn-primary hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold">
            <span className="material-symbols-outlined text-lg">download</span>
            Download CV
          </a>
          {/* Mobile hamburger */}
          <button 
            id="menu-btn" 
            className="md:hidden text-white/70 hover:text-white transition-colors" 
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined text-3xl" id="menu-icon">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div id="mobile-menu" className={`md:hidden bg-[#131313]/95 px-6 pb-4 overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 pt-2 text-sm font-medium text-white/70">
          <Link href="#projects" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#experience" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link href="#skills" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="#about" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#contact" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="#" className="btn-primary inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold w-fit">
            <span className="material-symbols-outlined text-lg">download</span>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
