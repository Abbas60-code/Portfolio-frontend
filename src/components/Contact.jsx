import React, { useState } from 'react';
import { Code, Mail, ExternalLink, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: '', error: '' });

    try {
      const res = await fetch('https://portfolio-backend-kappa-khaki.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      setStatus({ loading: false, success: 'Message sent successfully! I will get back to you soon.', error: '' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message });
    }
  };

  return (
    <section id="contact" className="py-32 border-t border-border/30 relative">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-primaryText to-secondaryText">
            Have a project in mind?<br/>
            <span className="text-accent">Let's build it.</span>
          </h2>
          
          <div className="mt-12 space-y-6">
            <a href="https://github.com/Abbas60-code" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondaryText hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                <Code size={20} className="group-hover:text-accent transition-colors" />
              </div>
              <span className="text-lg font-medium">github.com/Abbas60-code</span>
            </a>
            <a href="https://www.fiverr.com/devwithabbas/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondaryText hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                <ExternalLink size={20} className="group-hover:text-accent transition-colors" />
              </div>
              <span className="text-lg font-medium">fiverr.com/devwithabbas</span>
            </a>
            <a href="mailto:muhammadabbas09dec@gmail.com" className="flex items-center gap-4 text-secondaryText hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                <Mail size={20} className="group-hover:text-accent transition-colors" />
              </div>
              <span className="text-lg font-medium">muhammadabbas09dec@gmail.com</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/40 backdrop-blur-xl border border-border/50 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500"></div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-secondaryText uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl px-5 py-4 text-primaryText focus:outline-none focus:border-accent focus:bg-background transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-secondaryText uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl px-5 py-4 text-primaryText focus:outline-none focus:border-accent focus:bg-background transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-secondaryText uppercase tracking-wider">Message</label>
              <textarea 
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl px-5 py-4 text-primaryText focus:outline-none focus:border-accent focus:bg-background transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Success / Error Messages */}
            {status.success && (
              <p className="text-green-400 text-sm font-medium bg-green-400/10 border border-green-400/30 rounded-xl px-4 py-3">
                 {status.success}
              </p>
            )}
            {status.error && (
              <p className="text-red-400 text-sm font-medium bg-red-400/10 border border-red-400/30 rounded-xl px-4 py-3">
                 {status.error}
              </p>
            )}

            <button 
              type="submit"
              disabled={status.loading}
              className="w-full bg-accent text-background font-bold py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
              {!status.loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
