"use client";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
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
  Palette,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Skills = () => {
  const { skills } = portfolioData;

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
      transition: { staggerChildren: 0.1 },
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.languages,
      color: "bg-blue-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      skills: skills.frameworks,
      color: "bg-green-500",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: skills.webDev,
      color: "bg-purple-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: skills.databases,
      color: "bg-orange-500",
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      skills: skills.tools,
      color: "bg-indigo-500",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: skills.uiux,
      color: "bg-pink-500",
    },
  ];

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
              Skills & Technologies
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technical expertise and tools I use to build modern applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;

              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = getIconComponent(skill.icon);

                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <SkillIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date
                with the latest technologies in web development, always eager to
                learn new frameworks and tools that can improve the development
                process and user experience.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
