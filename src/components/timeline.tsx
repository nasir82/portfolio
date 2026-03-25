"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Experience } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto px-4 py-20">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-amber-500" />
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-500 origin-top"
        style={{ scaleY: pathLength }}
      />
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const badgeVariant =
    experience.type === "hackathon"
      ? "default"
      : experience.type === "work"
      ? "secondary"
      : "outline";

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-20"
    >
      <div className="absolute left-6 top-2 h-4 w-4 rounded-full bg-amber-500 border-4 border-[#0a0a0a] z-10" />
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-xl font-bold text-foreground">{experience.role}</h3>
          <Badge variant={badgeVariant}>{experience.type}</Badge>
        </div>
        
        <h4 className="text-lg font-semibold text-blue-400">{experience.companyOrEvent}</h4>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{experience.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
      </div>
    </motion.div>
  );
}

