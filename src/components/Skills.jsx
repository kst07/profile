import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPhp, SiDjango, SiArduino, SiFirebase } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-4xl" />, level: 85 },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-4xl" />, level: 85 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" />, level: 67 },
  { name: "React", icon: <SiReact className="text-cyan-500 text-4xl" />, level: 75 },
  { name: "PHP", icon: <SiPhp className="text-indigo-500 text-4xl" />, level: 60 },
  { name: "Django", icon: <SiDjango className="text-green-500 text-4xl" />, level: 78 },
  { name: "Arduino", icon: <SiArduino className="text-blue-700 text-4xl" />, level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Floating Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 perspective-1000">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                transition: {
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: index * 0.1
                }
              }}
              whileHover={{ 
                rotateY: 10,
                rotateX: -5,
                scale: 1.05,
                translateZ: 20
              }}
              transition={{ 
                type: "spring", 
                stiffness: 150,
                damping: 15,
                mass: 0.5
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl relative transform-style-preserve-3d group"
              style={{
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.2)',
                transformStyle: 'preserve-3d',
                perspective: 1000
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="relative transform-style-preserve-3d">
                <div className="flex justify-center mb-6">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, 15, -15, 0],
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        mass: 0.5
                      }
                    }}
                    className="p-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    {skill.icon}
                  </motion.div>
                </div>
                <motion.p 
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-center"
                  whileHover={{ 
                    translateZ: 10,
                    textShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.name}
                </motion.p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 text-center">{skill.level}%</p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-cyan-400/0"
                whileHover={{
                  borderColor: "rgba(34, 211, 238, 0.3)",
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)"
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

export default Skills;