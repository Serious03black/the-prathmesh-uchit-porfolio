
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { Play, ExternalLink } from 'lucide-react';

// Project data
const featuredProjects = [
  {
    id: 1,
    title: "MCQ Quiz App – CET Practice",
    description: "A web app for CET practice with multiple-choice questions. Built using React.js, Express.js, and MySQL. As Lucifer would say, 'What is it you truly desire? Knowledge, perhaps?'",
    videoUrl: "https://www.youtube.com/watch?v=X4bF_quwNtw",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Waste Master – Waste Management",
    description: "An AI-powered waste management automation for Dark Store. Using React.js, Express.js, MongoDB, Node.js, and OpenAI API integration. Dr. Strange would approve of this reality-altering solution.",
    videoUrl: "https://www.youtube.com/watch?v=1O6Qstncpnc",
    thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Event Wallah – Event Management",
    description: "A platform with features for event creation, ticketing, and attendee management. Built with React.js, Express.js, MongoDB, and Node. As fast and furious as Dom Toretto's crew organizing a heist.",
    videoUrl: "https://www.youtube.com/watch?v=oBqqI6NMeaM",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop"
  }
];

const ProjectsSection = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  
  return (
    <section className="py-16 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent inline-block mb-4">
            Featured Projects
          </span>
          <h2 className="section-heading">My Multiversal Creations</h2>
          <p className="text-muted-foreground">
            "Racing through the digital world with Toretto's speed" - Building web applications as fast and powerful as Dom's cars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="featured-project-card"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                {/* Thumbnail */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${playing === project.id ? 'opacity-0' : 'opacity-100'}`}
                  style={{ backgroundImage: `url(${project.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <button
                      onClick={() => setPlaying(project.id)}
                      className="w-16 h-16 rounded-full bg-accent/90 hover:bg-accent text-white flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
                      aria-label="Play video"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </button>
                    
                    <div className="text-center mt-4 p-4">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground max-w-lg mx-auto">{project.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Video Player */}
                {playing === project.id && (
                  <div className="absolute inset-0">
                    <ReactPlayer
                      url={project.videoUrl}
                      width="100%"
                      height="100%"
                      playing
                      controls
                      onEnded={() => setPlaying(null)}
                    />
                    
                    <button
                      onClick={() => setPlaying(null)}
                      className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark/80 text-white flex items-center justify-center hover:bg-dark transition-colors"
                      aria-label="Close video"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center btn-primary"
          >
            View All Projects <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
