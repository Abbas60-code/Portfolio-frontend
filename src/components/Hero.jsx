import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 flex flex-col md:flex-row items-center gap-12 min-h-screen relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="flex-1 space-y-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-2"
        >
          Full-Stack Developer
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primaryText to-secondaryText"
        >
          I build modern web applications.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-secondaryText max-w-lg leading-relaxed"
        >
          MERN Stack Developer focused on building fast, responsive and scalable web applications.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap gap-4 pt-6"
        >
          <a href="#projects" className="bg-accent text-background px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            View Projects
          </a>
          <a href="#contact" className="border border-border bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:text-accent px-8 py-3.5 rounded-full font-medium transition-all duration-300">
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="pt-12 flex items-center gap-4 text-sm text-secondaryText font-medium"
        >
          <span className="hover:text-accent transition-colors">React</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
          <span className="hover:text-accent transition-colors">Node.js</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
          <span className="hover:text-accent transition-colors">Express.js</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
          <span className="hover:text-accent transition-colors">MongoDB</span>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 40, rotate: -2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="flex-1 w-full max-w-md hidden md:block relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-transparent blur-3xl -z-10 rounded-full"></div>
        <div className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-accent/50 transition-colors duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500"></div>
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <pre className="text-sm text-secondaryText font-mono leading-loose overflow-x-auto">
            <code>
              <span className="text-accent">const</span> <span className="text-primaryText">developer</span> = {'{'}{'\n'}
              {'  '}name: <span className="text-[#a5d6ff]">'Abbas'</span>,{'\n'}
              {'  '}role: <span className="text-[#a5d6ff]">'MERN Stack Developer'</span>,{'\n'}
              {'  '}skills: [<span className="text-[#a5d6ff]">'MongoDB'</span>, <span className="text-[#a5d6ff]">'Express'</span>, <span className="text-[#a5d6ff]">'React'</span>, <span className="text-[#a5d6ff]">'Node.js'</span>],{'\n'}
              {'  '}passionate: <span className="text-[#ff7b72]">true</span>{'\n'}
              {'}'};{'\n'}
              {'\n'}
              <span className="text-primaryText">developer</span>.<span className="text-[#d2a8ff]">buildAwesomeWebApps</span>();
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
