"use client";

import { Award, ExternalLink, Trophy } from "lucide-react";
import { achievemenAndCertification } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-10 relative">
      {/* Matching section header style */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Achievements & Milestones
        </h2>
        <div className="h-1 w-16 bg-blue-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Placeholder for mapping your actual data: 
            {achievemenAndCertification.map((item) => ( ... ))} 
        */}
        
        {/* Example Achievement Card */}
        <div className="group relative p-5 rounded-2xl border border-gray-800 bg-[#0B0F1A] transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.02]">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Trophy className="w-5 h-5 text-blue-500" />
            </div>
            <Award className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
          </div>

          {/* Scaled down font sizes to prevent congestion */}
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            First Runner-up(Hackathon)
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
          We build High-scale microservices platform engineered for 1k+ RPS; implements idempotency, outbox patterns, and state machines to ensure data integrity during high-load medical campaigns in a 8 hour competetion.
          </p>
        </div>

        {/* Example Certification Card */}
        <div className="group relative p-5 rounded-2xl border border-gray-800 bg-[#0B0F1A] transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.02]">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Award className="w-5 h-5 text-purple-500" />
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
          </div>

          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
            Finalist in multiple hackathon
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Consistent finalist in multiple high-stakes hackathons, including CUET CSE fest, SUST CSE carnival and some others universities.
          </p>
        </div>

        {/* Example Achievement Card 3 */}
        <div className="group relative p-5 rounded-2xl border border-gray-800 bg-[#0B0F1A] transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.02]">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Trophy className="w-5 h-5 text-emerald-500" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            Competitive Programming
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Solving over 500 problems across various platforms like codeforces, leetcode, vjudge to sharpen algorithmic thinking.
          </p>
        </div>
      </div>
    </section>
  );
}