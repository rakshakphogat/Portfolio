"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const About = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Hello! I'm {personal.name}
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate Computer Science Engineering student at the
                  University Institute of Engineering and Technology,
                  Chandigarh, with a strong foundation in full-stack web
                  development and emerging technologies.
                </p>

                <p>
                  My journey in programming began with a curiosity about how
                  things work behind the scenes of the web. Since then, I've
                  been dedicated to mastering both front-end and back-end
                  technologies, always staying up-to-date with the latest
                  industry trends and best practices.
                </p>

                <p>
                  I specialize in the MERN stack and have hands-on experience
                  building scalable web applications with modern frameworks like
                  Next.js and React. My projects range from real-time chat
                  applications to comprehensive e-commerce platforms, each
                  showcasing different aspects of my technical expertise.
                </p>

                <p>
                  When I'm not coding, I enjoy exploring new technologies,
                  contributing to open-source projects, and sharing knowledge
                  with the developer community. I believe in continuous learning
                  and am always excited to take on new challenges that push the
                  boundaries of what's possible.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Chandigarh, India
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Focus
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack Development
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Profile Image Placeholder */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-400 dark:text-gray-600">
                      {personal.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-20"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
