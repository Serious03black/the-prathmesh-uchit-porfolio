import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { animateText } from '../../lib/animation';
import { ThreeScene, createMagicParticles, createGlowingSphere } from '../../lib/three-scene';
import * as THREE from 'three';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const sceneRef = useRef<ThreeScene | null>(null);

  // Initialize Three.js scene
  useEffect(() => {
    if (canvasRef.current && !sceneRef.current) {
      const scene = new ThreeScene({
        canvas: canvasRef.current,
        backgroundColor: '#0A0A0B',
        cameraPosition: [0, 0, 5],
      });

      const { particles, animateParticles } = createMagicParticles(2000, 0.03, 0xC8102E);
      scene.addObject(particles);
      scene.animationFunctions.push(animateParticles);

      const { sphere, animateSphere } = createGlowingSphere(1.2, 0x3D0740);
      sphere.position.set(-2, -1, -5);
      scene.addObject(sphere);
      scene.animationFunctions.push(animateSphere);

      const pointLight = new THREE.PointLight(0xC8102E, 1, 10);
      pointLight.position.set(2, 1, 2);
      scene.addObject(pointLight);

      const pulseLight = (time: number) => {
        pointLight.intensity = 1 + Math.sin(time * 2) * 0.5;
      };
      scene.animationFunctions.push(pulseLight);

      sceneRef.current = scene;

      return () => {
        scene.dispose();
        sceneRef.current = null;
      };
    }
  }, []);

  // Animate hero text
  useEffect(() => {
    if (heroTextRef.current) {
      setTimeout(() => {
        animateText(heroTextRef.current, 0.5);
      }, 500);
    }
  }, []);

  // Cinematic fade-scale animation
  const textVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0, // Immediate
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Hero Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-block mb-4"
        >
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent backdrop-blur-sm">
            Frontend Developer
          </span>
        </motion.div>

        {/* Professional, bright "I Am The Prathmesh Uchit" */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-bold mb-3 tracking-wider animate-glow max-w-[30vw] mx-auto"
          style={{
            backgroundImage: 'linear-gradient(45deg, #E5E5E5, #00C4B4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.4)',
            textShadow: `
              0 0 8px rgba(0, 196, 180, 0.5),
              0 0 12px rgba(229, 229, 229, 0.3)
            `,
            fontFamily: '"Orbitron", Montserrat, sans-serif',
          }}
        >
         I am ,
         Who is creater Of this Multiverce
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-bold mb-3 tracking-wider animate-glow max-w-[25vw] mx-auto"
          style={{
            backgroundImage: 'linear-gradient(45deg, #E5E5E5, #00C4B4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.4)',
            textShadow: `
              0 0 8px rgba(0, 196, 180, 0.5),
              0 0 12px rgba(229, 229, 229, 0.3)
            `,
            fontFamily: '"Orbitron", Montserrat, sans-serif',
          }}
        >
         I am
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-5xl font-bold mb-3 tracking-wider animate-glow max-w-[50vw] mx-auto"
          style={{
            backgroundImage: 'linear-gradient(45deg, #E5E5E5, #00C4B4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.4)',
            textShadow: `
              0 0 8px rgba(0, 196, 180, 0.5),
              0 0 12px rgba(229, 229, 229, 0.3)
            `,
            fontFamily: '"Orbitron", Montserrat, sans-serif',
          }}
        > 
         The Prathmesh Uchit
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl font-light mb-4"
        >
          <span className="italic">
            "With great power comes great <span className="text-accent">responsibility</span>"
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-6"
        >
          JavaScript Developer crafting immersive digital experiences with React.js, GSAP, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <a
            href="mailto:prathmeshuchit@gmail.com"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary/50 text-white text-sm hover:bg-secondary/70 transition-all"
          >
            <Mail size={16} /> prathmeshuchit@gmail.com
          </a>
          <a
            href="tel:+919699925064"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary/50 text-white text-sm hover:bg-secondary/70 transition-all"
          >
            <Phone size={16} /> +91 9699925064
          </a>
          <a
            href="http://www.linkedin.com/in/prathmesh-uchit-884a36222"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary/50 text-white text-sm hover:bg-secondary/70 transition-all"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/Serious03black"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary/50 text-white text-sm hover:bg-secondary/70 transition-all"
          >
            <Github size={16} /> GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/projects" className="btn-primary group">
            View Projects
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-md bg-secondary/50 hover:bg-secondary/70 text-white font-medium transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-[bounce_1.5s_infinite]"></div>
          </div>
        </motion.div>
      </div>

      {/* CSS for subtle glow pulse */}
      <style>
        {`
          @keyframes glow {
            0%, 100% {
              text-shadow: 
                0 0 8px rgba(0, 196, 180, 0.5),
                0 0 12px rgba(229, 229, 229, 0.3);
            }
            50% {
              text-shadow: 
                0 0 12px rgba(0, 196, 180, 0.7),
                0 0 18px rgba(229, 229, 229, 0.5);
            }
          }
          .animate-glow {
            animation: glow 2s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
