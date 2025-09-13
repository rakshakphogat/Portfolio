"use client";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Palette,
  Server,
  GitBranch,
  Code2,
  Atom,
  Zap,
  ArrowRight,
  FileCode,
  Shield,
  Layout,
  Layers,
  Github,
  Figma,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Skills = () => {
  const { skills } = portfolioData;

  // Icon mapping function
  const getIconComponent = (iconName) => {
    const iconMap = {
      Code,
      Code2,
      Database,
      Globe,
      Palette,
      Server,
      GitBranch,
      Atom,
      Zap,
      ArrowRight,
      FileCode,
      Shield,
      Layout,
      Layers,
      Github,
      Figma,
    };
    return iconMap[iconName] || Code;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.languages,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      skills: skills.frameworks,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: skills.webDev,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Databases",
      icon: Database,
      skills: skills.databases,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      skills: skills.tools,
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-50 dark:bg-gray-900/20",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: skills.uiux,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My technical expertise spans across various domains of software
              development
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;

              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div
                    className={`${category.bgColor} p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300`}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon =
                          typeof skill === "object"
                            ? getIconComponent(skill.icon)
                            : null;
                        const skillName =
                          typeof skill === "object" ? skill.name : skill;

                        return (
                          <motion.span
                            key={skillName}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600"
                          >
                            {SkillIcon && <SkillIcon className="w-4 h-4" />}
                            {skillName}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Experience Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  3+
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Major Projects Completed
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  15+
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Technologies Mastered
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  2+
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Years Learning & Building
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
