"use client";

import { useState } from "react"; // 1. Import useState
import { motion, AnimatePresence } from "framer-motion"; // 2. Import AnimatePresence
import { ExternalLink, Github, Award, Calendar, X } from "lucide-react"; // 3. Added X icon
import { certifications } from "@/data/portfolio";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Certifications() {
  // 4. State to track which image is being viewed
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />
              
              <div className="relative h-full flex flex-col bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                
                {/* --- CLICKABLE IMAGE SECTION --- */}
                <div 
                  className="relative h-48 w-full overflow-hidden bg-white/5 cursor-zoom-in"
                  onClick={() => cert.image && setSelectedImage(cert.image)} // 5. Set image on click
                >
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/10">
                      <Award size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                </div>

                {/* Rest of your card content... */}
                <div className="p-6 pt-2 flex-grow flex flex-col">
                   {/* ... keep your existing issuer, title, skills, and buttons ... */}
                   <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-mono">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                   {/* Actions */}
                   <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    <a href={cert.link} target="_blank" className="flex-1 flex items-center justify-center gap-2 text-xs font-bold bg-white text-black py-2 rounded-lg hover:bg-blue-400 transition-colors">
                      Verify <ExternalLink size={14} />
                    </a>
                    {cert.github && (
                      <a href={cert.github} target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close on background click
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-[80vh]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-blue-400 transition-colors"
              >
                <X size={32} />
              </button>
              <Image
                src={selectedImage}
                alt="Certification Enlarged"
                fill
                className="object-contain rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}