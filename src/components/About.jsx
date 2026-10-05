import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 border-t border-border/30 relative overflow-hidden">
      <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primaryText to-secondaryText">
            A developer who likes building things.
          </h2>
          <div className="space-y-6 text-secondaryText text-lg leading-relaxed">
            <p>
              Hi, I'm Abbas. I'm a passionate MERN Stack Developer specializing in building robust, 
              scalable, and visually appealing web applications.
            </p>
            <p>
              I focus on the entire development lifecycle—from designing responsive frontend interfaces 
              with React and Tailwind CSS, to building secure REST APIs and database architectures 
              using Node.js, Express, and MongoDB.
            </p>
            <p>
              Whether it's an e-commerce platform, a real-time application, or an internal dashboard, 
              I enjoy solving complex problems and turning ideas into complete full-stack solutions.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-2xl hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-5xl font-bold mb-2 text-primaryText">10<span className="text-accent">+</span></h3>
            <p className="text-sm font-medium text-secondaryText uppercase tracking-wider">Projects Completed</p>
          </div>
          <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-2xl hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-5xl font-bold mb-2 text-primaryText">100<span className="text-accent">%</span></h3>
            <p className="text-sm font-medium text-secondaryText uppercase tracking-wider">Client Satisfaction</p>
          </div>
          <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-2xl hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 shadow-xl col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-3 text-primaryText">Continuous Learner</h3>
            <p className="text-secondaryText text-lg">Always exploring new technologies, refining my workflow, and applying the latest industry best practices.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
