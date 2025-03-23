
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pageTransitionIn, setupScrollTrigger } from '../lib/animation';
import ProjectCard from '../components/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

// Project data
const projects = [
  {
    id: 1,
    title: "Lucifer's Pentecostal Journey",
    description: "An interactive 3D experience exploring dark aesthetics and supernatural elements from the Lucifer universe.",
    imageUrl: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1470&auto=format&fit=crop",
    tags: ["Three.js", "GSAP", "Lucifer"],
    liveUrl: "#",
    codeUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=X4bF_quwNtw"
  },
  {
    id: 2,
    title: "Hogwarts Legacy Explorer",
    description: "A magical portal into the world of Harry Potter with spellbinding animations and interactive elements.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1469&auto=format&fit=crop",
    tags: ["React", "Three.js", "Harry Potter"],
    liveUrl: "#",
    codeUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=1O6Qstncpnc"
  },
  {
    id: 3,
    title: "Fast & Marvel: Multiverse Collision",
    description: "A high-octane fusion of Fast & Furious action with Marvel universe characters and storytelling.",
    imageUrl: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=1528&auto=format&fit=crop",
    tags: ["React", "GSAP", "Marvel", "Fast & Furious"],
    liveUrl: "#",
    codeUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=oBqqI6NMeaM"
  },
  {
    id: 4,
    title: "Morningstar Dashboard",
    description: "A sleek and elegant dashboard inspired by Lucifer's aesthetic with dark mode and dynamic data visualization.",
    imageUrl: "https://images.unsplash.com/photo-1557682260-96773eb01377?q=80&w=1429&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Lucifer"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 5,
    title: "Wizard's Spell Book",
    description: "An interactive digital spell book inspired by Harry Potter with animated page turns and magical effects.",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1470&auto=format&fit=crop",
    tags: ["GSAP", "Three.js", "Harry Potter"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 6,
    title: "Avengers Initiative",
    description: "A Marvel-inspired interactive team showcase with character profiles and timeline exploration.",
    imageUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1374&auto=format&fit=crop",
    tags: ["React", "GSAP", "Marvel"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 7,
    title: "Furious Racing Simulator",
    description: "A Fast & Furious inspired racing simulator with realistic physics and customizable vehicles.",
    imageUrl: "https://images.unsplash.com/photo-1598586958772-8bf7653b7d2f?q=80&w=1470&auto=format&fit=crop",
    tags: ["Three.js", "GSAP", "Fast & Furious"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 8,
    title: "Multiverse Portal",
    description: "An experimental project that blends elements from all four universes in an interactive 3D space.",
    imageUrl: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=1470&auto=format&fit=crop",
    tags: ["Three.js", "React", "GSAP", "Multiverse"],
    liveUrl: "#",
    codeUrl: "#",
    videoUrl: "#"
  }
];

// Filter categories
const categories = ["All", "Lucifer", "Harry Potter", "Marvel", "Fast & Furious", "Three.js", "GSAP"];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (containerRef.current) {
      // Trigger page transition in
      pageTransitionIn(containerRef.current);
      
      // Set up scroll animations
      setupScrollTrigger();
    }
  }, []);

  // Filter projects by category
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.tags.includes(activeFilter)
        )
      );
    }
  }, [activeFilter]);

  return (
    <div ref={containerRef} className="page-container pt-32 pb-20 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent inline-block mb-4">
            Portfolio
          </span>
          <h1 className="section-heading">Explore My Projects</h1>
          <p className="text-muted-foreground">
            Discover my work spanning multiple creative universes, from dark elegance to magical wonders and high-octane adventures.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-accent text-white"
                  : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
              videoUrl={project.videoUrl}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found with this filter.</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 px-6 py-2 bg-accent text-white rounded-md"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
