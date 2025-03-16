import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaFacebook } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 sm:p-8 text-white relative overflow-hidden">
      {/* Background Blurred Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://f.ptcdn.info/529/026/000/1418543374-4y-o.jpg"
          alt="Background"
          className="w-full h-full object-cover filter blur-2xl opacity-20"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl w-full bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)] p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 border-2 border-gray-700 relative z-10 mt-11"
      >
        {/* Outer Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.3)] -z-10" />

        {/* Left Column: Profile Image and Name */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotateY: 15 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative"
          >
            <img
              src="https://media.discordapp.net/attachments/1191034802246258869/1350502713049481246/IMG_5837.jpg?ex=67d6f929&is=67d5a7a9&hm=e4ef7fe4d53b0652acbcb0a0c03c097508cd7509132ab8e96d85185fac5fd63d&=&format=webp&width=600&height=800"
              alt="Profile Picture of Sirinapha"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl animate-pulse" />
          </motion.div>
          <motion.h1
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="text-3xl sm:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Sirinapha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base text-gray-400"
          >
            Passionate about Web Development & IoT
          </motion.p>

          {/* DaisyUI Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="https://github.com/kst07"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm sm:btn-md bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 text-white"
            >
              ดูผลงานบน GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-outline btn-sm sm:btn-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              ดาวน์โหลดเรซูเม่
            </a>
          </div>
        </div>

        {/* Right Column: About and Contact */}
        <div className="space-y-8 sm:space-y-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4 sm:mb-6">
              About Me
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Age: 22 years old",
                "Vocational Certificate: Computer Techniques",
                "Bachelor's Degree: Computer Engineering",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="card bg-gray-800/70 backdrop-blur-sm shadow-md border border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all"
                >
                  <div className="card-body p-3 sm:p-4">
                    <p className="text-sm sm:text-base text-gray-300">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4 sm:mb-6">
              Contact Me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "sirinapha0262@gmail.com" },
                { icon: <FaPhone />, label: "Phone", value: "123 456 789" },
                { icon: <FaGithub />, label: "GitHub", value: "https://github.com/kst07" },
                { icon: <FaFacebook />, label: "Facebook", value: "https://www.facebook.com/tong.sirinapha.5/" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="card bg-gray-800/70 backdrop-blur-sm shadow-md border border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all min-w-0"
                >
                  <div className="card-body p-3 sm:p-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <span className="text-blue-500 text-xl sm:text-2xl flex-shrink-0">{item.icon}</span>
                      {item.label === "Email" || item.label === "Phone" ? (
                        <span className="text-sm sm:text-base text-gray-300 truncate">{item.value}</span>
                      ) : (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-gray-300 hover:text-blue-500 transition-colors truncate"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Border Effect */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-xl rounded-full" />
      </motion.div>
    </div>
  );
};

export default ProfilePage;