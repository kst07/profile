import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section id="home" className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
              opacity: [0, 0.5, 0],
              x: [0, Math.random() * 50 - 25 + '%'],
              y: [0, Math.random() * 50 - 25 + '%']
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12 perspective-1000"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <motion.div 
            className="lg:w-2/3 text-center lg:text-left transform-style-preserve-3d"
            whileHover={{ 
              rotateY: 5, 
              rotateX: -2,
              transition: { type: "spring", stiffness: 200, damping: 15 }
            }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.4,
                ease: "backOut"
              }}
            >
              Innovative Web Solutions
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-cyan-100 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                ease: "circOut"
              }}
            >
              Hi! I'm <span className="text-cyan-400 font-semibold">Sirinapha</span>, a student passionate about learning web development, both front-end and back-end, as well as IoT. I'm dedicated to improving my skills to create seamless and engaging digital experiences.
            </motion.p>

            <motion.button 
              className="btn bg-gradient-to-br from-cyan-500 to-blue-600 text-lg px-8 py-4 rounded-xl hover:rounded-lg transition-all duration-300 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)",
                transition: { 
                  duration: 0.3,
                  type: "spring",
                  bounce: 0.5
                }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/profile")} // Navigate to /profile on click
            >
              <span className="relative z-10">Profile</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/3 w-64 h-64 lg:w-96 lg:h-96 rounded-2xl overflow-hidden relative transform-style-preserve-3d group"
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              rotateY: 0,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.8
              }
            }}
            whileHover={{ 
              rotateY: 15,
              rotateX: -8,
              scale: 1.03,
              translateZ: 20
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200,
              damping: 15,
              mass: 0.5
            }}
            style={{
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.6)',
              transformStyle: 'preserve-3d',
              perspective: 1000
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <img
              src="https://media.discordapp.net/attachments/1191034802246258869/1350502713049481246/IMG_5837.jpg?ex=67d6f929&is=67d5a7a9&hm=e4ef7fe4d53b0652acbcb0a0c03c097508cd7509132ab8e96d85185fac5fd63d&=&format=webp&width=600&height=800"
              alt="Profile"
              className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl group-hover:border-cyan-400/50 transition-all duration-500" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center overflow-hidden">
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-1"
              animate={{ 
                y: [-5, 15],
                opacity: [1, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;