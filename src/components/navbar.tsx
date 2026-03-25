"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Lightbulb,Trophy,BadgeCheck, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Achievements", href: "#achievements", icon: Trophy },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Expertise", href: "#expertise", icon: Lightbulb},
  { label: "Cirtification", href: "#certifications", icon: BadgeCheck},
  { label: "Research", href: "#research", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1 left-0 right-0 z-50 flex justify-end px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-fit"
      >
        <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-full p-1.5 shadow-2xl">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all duration-300",
                      isActive
                        ? "bg-white text-black font-semibold shadow-md"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {/* The fix: label only shows on large screens (lg) */}
                    <span className="hidden lg:block whitespace-nowrap">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>
    </div>
  );
}