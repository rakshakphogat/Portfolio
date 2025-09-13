"use client";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "../data/portfolio";

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              {personal.name}
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative web
              solutions and exploring cutting-edge technologies.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>using Next.js & Framer Motion</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Skills", href: "/skills" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.label} href={link.href}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>{personal.email}</p>
              <p>{personal.phone}</p>
              <p>{personal.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personal.name}. All rights reserved.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
