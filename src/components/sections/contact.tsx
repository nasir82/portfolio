"use client";

import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-6 px-2 relative">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 mb-4">
            <MessageSquare size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-lg">
            Whether you want to discuss <strong>Flutter architecture</strong>, 
            {" "}<strong>Jetpack Compose</strong>, or a full-stack collaboration, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { 
              label: "Email", 
              value: personalInfo.email, 
              icon: Mail, 
              href: `mailto:${personalInfo.email}`,
              color: "text-blue-400"
            },
            { 
              label: "GitHub", 
              value: "View my code", 
              icon: Github, 
              href: personalInfo.github,
              color: "text-white"
            },
            { 
              label: "LinkedIn", 
              value: "Connect with me", 
              icon: Linkedin, 
              href: personalInfo.linkedin,
              color: "text-blue-600"
            },
            { 
              label: "LeetCode", 
              value: "View my profile", 
              icon: Code, 
              href: personalInfo.leetcode,
              color: "text-amber-400"
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative border border-white/10 rounded-2xl p-5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-blue-500/40 hover:-translate-y-1 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{item.label}</h3>
                  <p className="text-foreground font-semibold">{item.value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105"
          >
            <a 
              href={`https://wa.me/8801568163808?text=${encodeURIComponent("Hello! I&apos;d like to discuss a project.")}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Message on WhatsApp
            </a>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground italic">
            Usually responds within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}