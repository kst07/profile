import React from "react";
import { motion, useInView } from "framer-motion";

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
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
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

const AboutText = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      className="transform-style-preserve-3d group"
      whileHover={{ rotateY: 5, rotateX: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        About 
      </motion.h2>

      <motion.div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl relative transform-style-preserve-3d"
        whileHover={{ 
          rotateY: 5,
          rotateX: -3,
          scale: 1.02
        }}
        style={{
          boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
        
        <motion.p 
          className="text-xl md:text-2xl text-cyan-100 leading-relaxed mb-6"
          whileHover={{ translateZ: 5 }}
        >
          A <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors cursor-pointer">computer Engineering student</span> interested in  <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">Web Application Development</span>
        </motion.p>

        <motion.p 
          className="text-lg text-cyan-200 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          Passionate about learning and improving technological skills, aiming to build systems that are practical, efficient, and user-friendly
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const TimelineItem = ({ icon, title, description, date, color }) => {
  return (
    <motion.div 
      className="flex items-start gap-4"
      whileHover={{ translateX: 10 }}
    >
      <div className={`w-12 h-12 ${color}/20 rounded-full flex items-center justify-center`}>
        <span className={`${color} text-2xl`}>{icon}</span>
      </div>
      <div>
        <h3 className={`text-xl font-semibold ${color}`}>{title}</h3>
        <p className="text-cyan-200">{description}</p>
        {date && <p className="text-sm text-cyan-300/80">{date}</p>}
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl relative transform-style-preserve-3d group"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ 
        rotateY: -5,
        rotateX: 3,
        scale: 1.02
      }}
      style={{
        boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
      
      <div className="space-y-8 relative">
        <TimelineItem 
          icon="🎓"
          title="Education"
          description="Graduated with a Diploma in Computer Technology"
          date="2022-2024"
          color="text-cyan-400"
        />
        <TimelineItem 
          icon="🎓"
          title="Education"
          description="Currently pursuing a Bachelor’s degree in Computer Engineering"
          date="2024-Present"
          color="text-cyan-400"
        />
        <TimelineItem 
          icon="🛠️"
          title="Internship Experience"
          description="Technical Service & Internet Installation @ NT Sakon Nakhon"
          date="Phang Khon Branch | 2-month internship"
          color="text-blue-400"
        />
        <TimelineItem 
          icon="💻"
          title="Web Development"
          description="React, Django, HTML, CSS, PHP, Tailwind CSS, DaisyUI"
          color="text-purple-400"
        />
        <TimelineItem 
          icon="🔌"
          title="IoT & Embedded Systems"
          description="Arduino, IoT, Blynk, Arduino Cloud"
          color="text-green-400"
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center perspective-1000"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AboutText />
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
};

export default About;