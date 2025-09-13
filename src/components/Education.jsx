"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Education = () => {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and achievements in Computer Science and
              Engineering
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden md:block"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={cardVariants}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      {/* Institution */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {edu.institution}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {edu.degree}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                          {edu.current && (
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>

                        {edu.percentage && (
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>Percentage: {edu.percentage}</span>
                          </div>
                        )}
                      </div>

                      {/* Type Badge */}
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                          {edu.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for timeline alignment */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  95.6%
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  SSC Percentage
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  94.6%
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  HSC Percentage
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  2024-28
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Engineering Degree
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
