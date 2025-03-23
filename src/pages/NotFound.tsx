
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransitionIn } from "../lib/animation";

const NotFound = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    if (containerRef.current) {
      // Trigger page transition in
      pageTransitionIn(containerRef.current);
    }
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="page-container min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-cosmic">
      <div className="container px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-4 text-accent">404</h1>
          <p className="text-2xl md:text-3xl font-medium mb-8 text-glow">
            Lost in the Multiverse
          </p>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            The universe you're looking for might exist, but not on this timeline. Let's get you back to a familiar reality.
          </p>
          
          <Link
            to="/"
            className="btn-primary inline-flex items-center"
          >
            <span className="mr-2">↩</span> Return to Home Universe
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
