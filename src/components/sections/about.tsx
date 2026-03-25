import { personalInfo, skills } from "@/data/portfolio";
import Marquee from "@/components/marquee";
import { Badge } from "@/components/ui/badge";
import { MapPin, Target, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>
        
        {/* Bio & Sidebar Grid - Changed mb-20 to mb-12 */}
        <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-xl text-foreground/90 leading-relaxed font-medium">
              Driven by the challenge of bridging <span className="text-blue-400">complex backends</span> with <span className="text-emerald-400">Fluid INTERFACES</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio} <br/> Currently finishing my CS degree at <strong>SUST</strong> (CGPA 3.51).
            </p>
          </div>

          {/* Quick Info Sidebar */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <MapPin size={18} />
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</h3>
              </div>
              <p className="text-foreground font-medium pl-7">{personalInfo.location}</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3 text-emerald-400">
                <Target size={18} />
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Focus</h3>
              </div>
              <div className="flex flex-wrap gap-2 pl-7">
              <Badge variant="outline" className="bg-emerald-500/5 border-emerald-500/20 text-emerald-300">Flutter</Badge>
                <Badge variant="outline" className="bg-blue-500/5 border-blue-500/20 text-blue-300">Android</Badge>
                <Badge variant="outline" className="bg-purple-500/5 border-purple-500/20 text-purple-300">Full-Stack</Badge>
                <Badge variant="outline" className="bg-purple-500/5 border-purple-500/20 text-purple-300">RestAPI</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee - Reduced pt-10 to pt-6 */}
        <div className="pt-2 border-t border-white/5">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code2 className="text-muted-foreground" size={20} />
            <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold">Core Stack</h3>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10" />
            
            <Marquee pauseOnHover className="[--duration:40s] py-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="mx-4 flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition-colors"
                >
                  {skill}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}