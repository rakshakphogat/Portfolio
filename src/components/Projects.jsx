"use client";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Database,
  Globe,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Projects = () => {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack":
        return MessageSquare;
      case "E-commerce":
        return ShoppingCart;
      case "CMS":
        return Globe;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Full Stack":
        return "from-blue-500 to-cyan-500";
      case "E-commerce":
        return "from-green-500 to-emerald-500";
      case "CMS":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work in web development, featuring
              full-stack applications with modern technologies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              const gradientColor = getCategoryColor(project.category);

              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div
                      className={`h-2 bg-gradient-to-r ${gradientColor}`}
                    ></div>

                    <div className="p-8">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 bg-gradient-to-r ${gradientColor} rounded-xl`}
                          >
                            <CategoryIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {project.title}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium mt-2">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Project Links */}
                        <div className="flex gap-3">
                          {project.sourceCode && project.sourceCode !== "#" && (
                            <motion.a
                              href={project.sourceCode}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                              title="View Source Code"
                            >
                              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </motion.a>
                          )}
                          {project.sourceCode === "#" && (
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg opacity-50 cursor-not-allowed"
                              title="Source code not available"
                            >
                              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </motion.div>
                          )}
                          {project.liveDemo && project.liveDemo !== "#" && (
                            <motion.a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                              title="View Live Demo"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </motion.a>
                          )}
                          {project.liveDemo === "#" && (
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg opacity-50 cursor-not-allowed"
                              title="Live demo not available"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Key Features & Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features
                            .slice(0, 6)
                            .map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                        </div>

                        {project.features.length > 6 && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                          >
                            View {project.features.length - 6} more features →
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div variants={cardVariants} className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
