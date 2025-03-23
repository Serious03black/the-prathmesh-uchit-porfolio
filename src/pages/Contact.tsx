
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { pageTransitionIn } from '../lib/animation';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone, Clock, Github, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      // Trigger page transition in
      pageTransitionIn(containerRef.current);
    }
  }, []);
  
  return (
    <div ref={containerRef} className="page-container pt-32 pb-20 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="section-heading">Contact Me</h1>
          <p className="text-muted-foreground">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="glass-card h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Metropolis, Universe Earth-199999
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 6pm<br />
                      Weekend: By appointment
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-10 pt-6 border-t border-border/20">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/40 hover:bg-secondary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/40 hover:bg-secondary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/40 hover:bg-secondary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
