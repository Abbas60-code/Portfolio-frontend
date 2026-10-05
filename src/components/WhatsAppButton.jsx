import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = '923371273619'; // 03371273619 with country code
  const waUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1a1a1a] text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg whitespace-nowrap border border-white/10"
          >
            Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          boxShadow: '0 0 20px rgba(37, 211, 102, 0.45)',
        }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative"
      >
        {/* Ping ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.655 4.8 1.795 6.817L2 30l7.38-1.772A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.538a11.49 11.49 0 0 1-5.86-1.603l-.42-.25-4.38 1.05 1.084-4.27-.274-.44A11.497 11.497 0 0 1 4.46 16.003c0-6.37 5.174-11.543 11.543-11.543S27.546 9.633 27.546 16.003c0 6.37-5.174 11.535-11.543 11.535zm6.326-8.64c-.347-.174-2.054-1.014-2.373-1.13-.32-.115-.553-.174-.786.174-.233.347-.9 1.13-1.104 1.363-.203.232-.406.26-.753.087-.347-.174-1.464-.54-2.788-1.72-1.03-.918-1.726-2.052-1.93-2.4-.203-.347-.022-.535.153-.708.157-.156.347-.406.52-.61.174-.203.232-.347.347-.58.116-.232.058-.435-.029-.61-.087-.173-.786-1.895-1.077-2.594-.283-.682-.572-.59-.786-.6-.203-.01-.435-.013-.668-.013-.232 0-.61.087-.93.435-.32.347-1.22 1.19-1.22 2.9 0 1.71 1.25 3.362 1.424 3.595.174.232 2.46 3.754 5.963 5.263.833.36 1.483.575 1.99.736.836.265 1.598.228 2.2.138.67-.1 2.054-.84 2.345-1.652.29-.812.29-1.508.203-1.652-.087-.145-.32-.232-.668-.406z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
