import React from 'react';
import { LayoutTemplate, Layers, Server, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible, and fast user interfaces using React and modern CSS frameworks.",
      icon: <LayoutTemplate className="text-accent" size={28} />
    },
    {
      title: "Full-Stack Web Applications",
      description: "End-to-end development of custom web applications with seamless frontend and backend integration.",
      icon: <Layers className="text-accent" size={28} />
    },
    {
      title: "REST API Development",
      description: "Designing and building secure, scalable, and well-documented RESTful APIs using Node.js and Express.",
      icon: <Server className="text-accent" size={28} />
    },
    {
      title: "Admin Dashboards",
      description: "Creating comprehensive admin panels and internal tools for data management and visualization.",
      icon: <LayoutDashboard className="text-accent" size={28} />
    }
  ];

  return (
    <section id="services" className="py-32 border-t border-border/30 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent -z-10 blur-3xl"></div>
      
      <div className="mb-20 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primaryText to-secondaryText">What I can build.</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-10 hover:border-accent/40 transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="mb-8 bg-accent/10 border border-accent/20 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primaryText">{service.title}</h3>
              <p className="text-secondaryText leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
