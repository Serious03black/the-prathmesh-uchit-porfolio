import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, PenTool, Lightbulb, Rocket, Award, BookOpen, Database, Server, Github, Layout, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  characterReference?: string;
}

const skills: Skill[] = [
  { 
    name: 'JavaScript (ES6+)', 
    level: 85, 
    icon: <Code />, 
    color: '#F0DB4F',
    characterReference: "With Tony Stark's genius-level mastery"
  },
  { 
    name: 'React.js', 
    level: 80, 
    icon: <Rocket />, 
    color: '#61DAFB',
    characterReference: "Wielding it like Thor's hammer"
  },
  { 
    name: 'HTML5/CSS3', 
    level: 90, 
    icon: <Layout />, 
    color: '#E34F26',
    characterReference: "Structured like Dom Toretto's perfect heist plan"
  },
  { 
    name: 'GSAP/Animations', 
    level: 75, 
    icon: <PenTool />, 
    color: '#31A54F',
    characterReference: "Creating magic worthy of Dr. Strange"
  },
  { 
    name: 'Locomotive.js', 
    level: 65, 
    icon: <Rocket />, 
    color: '#7047EB',
    characterReference: "Smooth as Lucifer's charm"
  },
  { 
    name: 'Core Java', 
    level: 70, 
    icon: <Code />,
    color: '#007396',
    characterReference: "Built with Captain America's reliability"
  },
  { 
    name: 'UI/UX Design', 
    level: 75, 
    icon: <Lightbulb />, 
    color: '#FDBA74',
    characterReference: "Crafted with Harry Potter's attention to detail"
  },
  { 
    name: 'Git/GitHub', 
    level: 80, 
    icon: <Github />, 
    color: '#F05033',
    characterReference: "Tracking changes like Heimdall watches the Bifrost"
  },
  { 
    name: 'Data Structures & Algorithms', 
    level: 65, 
    icon: <Code />, 
    color: '#3178C6',
    characterReference: "Solving problems with Hermione's logical approach"
  },
  { 
    name: 'MySQL/JDBC', 
    level: 60, 
    icon: <Database />, 
    color: '#4479A1',
    characterReference: "Storing data like Dumbledore's Pensieve"
  },
  { 
    name: 'PHP', 
    level: 55, 
    icon: <Server />, 
    color: '#777BB4',
    characterReference: "Handling back-end like Nick Fury manages S.H.I.E.L.D."
  },
  { 
    name: 'Tools & Development', 
    level: 75, 
    icon: <Wrench />, 
    color: '#CB3837',
    characterReference: "Equipped like Iron Man's workshop"
  },
];

const SkillShowcase = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (skillsRef.current) {
      // Animate skill bars
      const skillItems = skillsRef.current.querySelectorAll('.skill-progress');
      skillItems.forEach((item) => {
        const bar = item.querySelector('.progress-bar');
        if (bar instanceof HTMLElement) {
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: bar.dataset.level + '%',
              duration: 1.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true, margin: "-50px" }}
          className="skill-item glass-card"
        >
          <div className="flex items-start gap-4">
            <div 
              className="p-3 rounded-md flex-shrink-0"
              style={{ backgroundColor: `${skill.color}20` }}
            >
              <span style={{ color: skill.color }}>{skill.icon}</span>
            </div>
            
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${skill.color}30`, color: skill.color }}>{skill.level}%</span>
              </div>
              
              <div className="h-2 w-full bg-secondary/30 rounded-full overflow-hidden mb-2">
                <div
                  className="progress-bar h-full rounded-full"
                  data-level={skill.level}
                  style={{
                    width: '0%',
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}80`,
                  }}
                ></div>
              </div>
              
              {skill.characterReference && (
                <p className="text-xs text-muted-foreground italic">
                  {skill.characterReference}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillShowcase;
