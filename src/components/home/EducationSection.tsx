
import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar } from 'lucide-react';

// Education and certifications data
const educationData = [
  {
    degree: "B. Tech – Computer Science and Engineering",
    institution: "CSMSS Chh. Shahu College of Engineering",
    year: "2022 – 2026 (Expected)",
    description: "Dr. BATU University | CGPA: 7/10 (2nd year)",
    icon: <Calendar />
  },
  {
    degree: "HSC",
    institution: "K.J. Mehta High School & E.Y. Fadol Jr. College, Nashik",
    year: "2019 – 2021",
    description: "Percentage: 76.40%",
    icon: <Calendar />
  },
  {
    degree: "SSC",
    institution: "P.E. School, Nashik",
    year: "2018 – 2019",
    description: "Percentage: 75.67%",
    icon: <Calendar />
  }
];

const certifications = [
  { name: "NPTEL – Java (OOP)", year: "2023" },
  { name: "NPTEL – DBMS", year: "2024" }
];

const EducationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-dark to-cosmic relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent inline-block mb-4">
            Training Grounds
          </span>
          <h2 className="section-heading">Education & Certifications</h2>
          <p className="text-muted-foreground">
            "Like Harry Potter at Hogwarts, I've mastered various schools of knowledge"
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="p-2 rounded-full bg-accent/20 mr-3">
                <BookOpen className="w-5 h-5 text-accent" />
              </span>
              Education
            </h3>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-0 before:bottom-0 before:w-[1px] before:bg-border">
                  <div className="absolute left-0 top-0 p-1.5 rounded-full bg-accent/20 z-10">
                    {item.icon}
                  </div>
                  
                  <div className="mb-1 space-y-1">
                    <h4 className="text-lg font-semibold">{item.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm">
                      <span className="text-muted-foreground">{item.institution}</span>
                      <span className="hidden sm:block mx-2 text-muted-foreground">•</span>
                      <span className="text-accent">{item.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="p-2 rounded-full bg-accent/20 mr-3">
                <Award className="w-5 h-5 text-accent" />
              </span>
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-secondary/30 border border-secondary/50 flex items-center"
                >
                  <div className="p-2 rounded-full bg-accent/10 mr-3">
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
