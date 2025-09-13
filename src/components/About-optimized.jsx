"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const About = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Hi, I'm {personal.name}
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a passionate {personal.title} and {personal.subtitle} with
                  a deep love for creating innovative web solutions. I enjoy
                  turning complex problems into simple, beautiful designs.
                </p>

                <p>
                  Currently pursuing my degree in Computer Science Engineering,
                  I'm constantly learning and exploring new technologies to stay
                  at the forefront of web development.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring the latest tech
                  trends, contributing to open-source projects, or working on
                  personal projects that challenge my skills.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {personal.email}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {personal.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats/Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    2024-28
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Engineering Student
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    5+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Projects Completed
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    10+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Technologies
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    95%+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Academic Score
                  </p>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "JavaScript",
                    "Python",
                    "MongoDB",
                    "Express",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
