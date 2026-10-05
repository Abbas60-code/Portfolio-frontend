import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <div className="text-xl font-bold tracking-tight mb-1">ABASS.</div>
          <div className="text-sm text-secondaryText">MERN Stack Developer</div>
        </div>
        
        <div className="flex gap-6 text-sm text-secondaryText">
          <a href="https://github.com/Abbas60-code" target="_blank" rel="noopener noreferrer" className="hover:text-primaryText transition-colors">GitHub</a>
          <a href="https://www.fiverr.com/devwithabbas/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer" className="hover:text-primaryText transition-colors">Fiverr</a>
          <a href="mailto:muhammadabbas09dec@gmail.com" className="hover:text-primaryText transition-colors">Email</a>
        </div>
        
        <div className="text-sm text-secondaryText">
          &copy; 2026 Abbas. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
