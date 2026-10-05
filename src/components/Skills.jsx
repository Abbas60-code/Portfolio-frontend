import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MongoDB"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-32 border-t border-border/30 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primaryText to-secondaryText">Tools I work with.</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.1)] transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-6 text-primaryText group-hover:text-accent transition-colors">{category.title}</h3>
            <ul className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-secondaryText text-md font-medium flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent group-hover:scale-125 transition-all"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
