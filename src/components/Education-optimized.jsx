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
      transition: { staggerChildren: 0.2 },
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey in Computer Science and Engineering
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      {edu.current && (
                        <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.percentage && (
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span>{edu.percentage}</span>
                        </div>
                      )}
                    </div>

                    {/* Type Badge */}
                    <div className="mt-3">
                      <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                95.6%
              </div>
              <p className="text-gray-600 dark:text-gray-400">SSC Score</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                94.6%
              </div>
              <p className="text-gray-600 dark:text-gray-400">HSC Score</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                2024-28
              </div>
              <p className="text-gray-600 dark:text-gray-400">Engineering</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
