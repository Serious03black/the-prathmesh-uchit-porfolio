
import { motion } from 'framer-motion';
import SkillShowcase from '../SkillShowcase';

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-dark to-cosmic relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent inline-block mb-4">
            The Multiverse of Skills
          </span>
          <h2 className="section-heading">My Powers & Abilities</h2>
          <p className="text-muted-foreground">
            "I am Iron Man" - With an arsenal of technical skills like Tony Stark's suit collection.
          </p>
        </div>
        
        <SkillShowcase />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute top-20 -left-10 w-40 h-40 rounded-full bg-mystic/10 blur-3xl"></div>
    </section>
  );
};

export default SkillsSection;
