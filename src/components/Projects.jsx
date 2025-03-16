import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "POS Coffee ",
    description: "A modern POS system for a coffee  using React, MUI, and Framer MotionA modern POS system for a coffee shop using React, MUI, and Framer Motion with a Django backend and SQL database.",
    link: "https://github.com/kst07/cadata-1.git",
    canva: "https://www.canva.com/design/DAGhDZgLG7A/NN_y3780ktShWg3CUc6JHA/edit?utm_content=DAGhDZgLG7A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    image: "https://png.pngtree.com/background/20230519/original/pngtree-cappuccino-in-a-cafe-with-people-gathered-around-picture-image_2655426.jpg",
  },
];

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [imageError, setImageError] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 w-2 h-2 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  delay: index * 0.2
                }
              }}
              whileHover={{ 
                rotateY: 15,
                rotateX: -5,
                scale: 1.03,
                translateZ: 20
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200,
                damping: 15,
                mass: 0.5
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl relative transform-style-preserve-3d group overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.2)',
                transformStyle: 'preserve-3d',
                perspective: 1000
              }}
            >
             
              <motion.div 
                className="h-64 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {!loadedImages[index] && !imageError[index] && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                )}
                {imageError[index] ? (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
                    Image not available
                  </div>
                ) : (
                  <img
                    src={project.image || "https://via.placeholder.com/400x200"}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </motion.div>

            
              <div className="p-4 md:p-8 relative transform-style-preserve-3d">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4"
                  whileHover={{ 
                    translateZ: 10,
                    textShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.name}
                </motion.h3>
                
                <motion.p 
                  className="text-base md:text-lg text-cyan-100 mb-6 leading-relaxed"
                  whileHover={{ translateZ: 5 }}
                >
                  {project.description}
                </motion.p>

                <div className="flex">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="inline-block bg-gradient-to-br from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:rounded-xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View on GitHub</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>

                  <motion.a
                    href={project.canva}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-br from-purple-500 to-pink-600 px-6 py-3 rounded-lg font-semibold hover:rounded-xl transition-all duration-300 relative overflow-hidden group ml-4"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(192, 132, 252, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View on Canva</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-500/30"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </div>

            
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-cyan-400/0"
                whileHover={{
                  borderColor: "rgba(34, 211, 238, 0.3)",
                  boxShadow: "0 0 40px rgba(34, 211, 238, 0.2)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;