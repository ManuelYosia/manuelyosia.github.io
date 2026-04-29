import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-[#131313]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 max-w-7xl mx-auto gap-6">
        <div>
          <div className="gradient-text font-black text-lg tracking-tighter mb-1">LUME.DEV</div>
          <div className="text-xs text-white/30 uppercase tracking-[0.1em]">© 2024 The Digital Architect. Engineered with Precision.</div>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-xs text-white/30 hover:text-white/80 transition-colors uppercase tracking-[0.1em]">GitHub</a>
          <a href="#" className="text-xs text-white/30 hover:text-white/80 transition-colors uppercase tracking-[0.1em]">LinkedIn</a>
          <a href="#" className="text-xs text-white/30 hover:text-white/80 transition-colors uppercase tracking-[0.1em]">Twitter</a>
          <a href="#" className="text-xs text-white/30 hover:text-white/80 transition-colors uppercase tracking-[0.1em]">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
