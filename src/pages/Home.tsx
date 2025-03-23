
import { useEffect, useRef } from 'react';
import { pageTransitionIn, setupScrollTrigger } from '../lib/animation';
import HeroSection from '../components/home/HeroSection';
import SkillsSection from '../components/home/SkillsSection';
import AboutSection from '../components/home/AboutSection';
import EducationSection from '../components/home/EducationSection';
import ProjectsSection from '../components/home/ProjectsSection';

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initialize page
  useEffect(() => {
    if (containerRef.current) {
      // Trigger page transition in
      pageTransitionIn(containerRef.current);
      
      // Set up scroll animations
      setupScrollTrigger();
    }
  }, []);
  
  return (
    <div ref={containerRef} className="page-container">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
