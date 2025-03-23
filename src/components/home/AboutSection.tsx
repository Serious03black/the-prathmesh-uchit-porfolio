
import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart } from 'lucide-react';

// Experience data
const experienceData = [
  {
    title: "Frontend Developer",
    company: "Monospace",
    period: "Jan 2025 to Present",
    description: "Working on an AI-based wedding functions management and decor platform. Like Dr. Strange manipulating multiple realities, I juggle complex UI states and animations.",
    icon: <Calendar />
  },
  {
    title: "Web Developer",
    company: "Micro Gemini",
    period: "Feb 2025 to Present",
    description: "Contributing to web services providing company. With the precision of Iron Man's suit engineering, I create responsive interfaces.",
    icon: <Calendar />
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2024 to 2025",
    description: "Taking on various projects independently. Like Thor wielding Mjolnir, I handle diverse projects with strength and adaptability.",
    icon: <Calendar />
  }
];

const AboutSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent inline-block mb-4">
            My Origin Story
          </span>
          <h2 className="section-heading">About Me</h2>
          <p className="text-muted-foreground">
            "Even Lucifer himself needed a good backstory" - Crafting digital experiences with a devilish attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card h-full space-y-6">
              <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground">
                Enthusiastic Student with a strong foundation in JavaScript and web development. Proficient in React.js, HTML, and CSS, with experience building responsive web applications. Eager to contribute to a dynamic team as a JavaScript Developer while continuously learning and growing.
              </p>
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3">Personal Information</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Skim no. 2, Hanumanta Nagar, Jail Road, Nashik (422101), Maharashtra</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">DOB: 25/09/2003</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Hobbies: Reading, writing poetry, public speaking, exploring tech, singing or listening to music</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card relative h-full overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#3D0740_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
            
            <div className="relative space-y-6">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              
              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-0 before:bottom-0 before:w-[1px] before:bg-border">
                    <div className="absolute left-0 top-0 p-1.5 rounded-full bg-accent/20 z-10">
                      {item.icon}
                    </div>
                    
                    <div className="mb-1 space-y-1">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm">
                        <span className="text-muted-foreground">{item.company}</span>
                        <span className="hidden sm:block mx-2 text-muted-foreground">•</span>
                        <span className="text-accent">{item.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
