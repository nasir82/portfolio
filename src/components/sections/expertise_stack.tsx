import { expertise } from "@/data/portfolio";
import { Cpu } from "lucide-react";

export default function Expertise() {
  return (
    <section id="expertise" className="py-6 px-4 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <Cpu className="text-blue-400" size={28} />
          </div>
          <h3 className="text-3xl font-bold">Technical Expertise</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="group relative border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}