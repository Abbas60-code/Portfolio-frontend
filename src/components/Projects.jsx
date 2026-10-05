import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import alvighaImg from '../assets/alvigha.png.PNG'
import marketlinkImg from '../assets/marketlink.png.PNG'
import carShowroomImg from '../assets/carshowroom.png.PNG'
import caligraphy from '../assets/caligraphy.PNG'

const Projects = () => {
  const projects = [
    {
      id: "01",
      name: "Full-Stack Alvigha Clone Web App",
      description:
        "A comprehensive full-stack application featuring user authentication, real-time database updates, and a responsive modern UI.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      image: alvighaImg,
      liveUrl: "https://alvigha-frontend.vercel.app/",
    },
    {
      id: "02",
      name: "MERN E-Commerce MarketLink",
      description:
        "A robust business platform with product management, shopping cart functionality, payment integration, and an admin dashboard.",
      tech: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      image: marketlinkImg,
      liveUrl: "https://marketlink-frontend-six.vercel.app/",
    },
    {
      id: "03",
      name: "Real-Time Car Showroom Web App",
      description:
        "An interactive real-time messaging application with instant notifications, online status tracking, and group chat support.",
      tech: ["React", "Socket.io", "Express", "MongoDB", "Framer Motion"],
      image: carShowroomImg,
      liveUrl: "https://car-frontend-ivory.vercel.app/",
    },
    {
      id: "04",
      name: "Caligraphy Showcase",
      description:
        "A beautifully crafted web app to showcase stunning digital calligraphy artwork with smooth animations.",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image: caligraphy,
      liveUrl: "#",
    },
  ];
  return (
    <section id="projects" className="py-32 border-t border-border/30">
      <div className="mb-20 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primaryText to-secondaryText">Things I've built.</h2>
      </div>
      
      <div className="space-y-24">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-8 md:gap-16 md:items-center"
          >
            {/* Background Hover Glow */}
            <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            
            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <span className="text-accent/80 text-sm font-mono tracking-widest">{project.id}</span>
              <h3 className="text-3xl font-bold text-primaryText">{project.name}</h3>
              <p className="text-secondaryText leading-relaxed text-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs font-semibold px-3 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-6 pt-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                  Live Demo <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
