// "use client";

// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Trophy, Code, Target, Award } from "lucide-react";

// const platforms = [
//   {
//     name: "Codeforces",
//     rating: "Specialist",
//     maxRating: "1471",
//     color: "text-blue-400",
//     bgColor: "bg-blue-500/10",
//     borderColor: "border-blue-500/30",
//     link: "https://codeforces.com/profile/mehedi_34",
//   },
//   {
//     name: "CodeChef",
//     rating: "3-Star",
//     maxRating: "1693",
//     color: "text-amber-400",
//     bgColor: "bg-amber-500/10",
//     borderColor: "border-amber-500/30",
//     link: "https://www.codechef.com/users/mehedi_34",
//   },
// ];

// const stats = [
//   { label: "Problems Solved", value: "More than 2000", icon: Target },
//   { label: "IUPC", value: "Participated in 3", icon: Trophy },
// ];

// const expertise = [
//   // Core Data Structures
//   "Advanced Data Structures (Arrays, Linked Lists, Stacks, Queues)",
//   "Hash Tables & Collision Resolution Techniques",
//   "Heaps & Priority Queues",
//   "Tree Algorithms",

//   // Graph Algorithms
//   "Graph Traversal (BFS, DFS)",
//   "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)",
//   "Minimum Spanning Trees (Kruskal, Prim)",
//   "Topological Sorting & Cycle Detection",
//   "Dynamic Programming",
//   "Greedy Algorithms",
//   "Divide and Conquer Techniques",
//   "Time & Space Complexity Analysis",
// ];


// export default function CompetitiveProgramming() {
//   return (
//     <section id="competitive" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-4 text-center">Competitive Programming</h2>
//         <Separator className="mb-12 max-w-2xl mx-auto" />

//         {/* Platform Ratings */}
//         <div className="grid md:grid-cols-2 gap-6 mb-12">
//           {platforms.map((platform, index) => (
//             <motion.a
//               key={platform.name}
//               href={platform.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`border ${platform.borderColor} ${platform.bgColor} rounded-xl p-6 hover:scale-[1.02] transition-transform`}
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className={`text-2xl font-bold ${platform.color}`}>{platform.name}</h3>
//                 <Code className={`h-6 w-6 ${platform.color}`} />
//               </div>
//               <div className="flex items-baseline gap-2">
//                 <span className="text-3xl font-bold text-foreground">{platform.rating}</span>
//                 <span className="text-muted-foreground">Max Rating:</span>
//                 <span className={`text-xl font-semibold ${platform.color}`}>{platform.maxRating}</span>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 gap-6 mb-12">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="border border-white/10 rounded-xl p-6 bg-black/30 text-center"
//               >
//                 <Icon className="h-8 w-8 mx-auto mb-3 text-violet-400" />
//                 <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
//                 <div className="text-muted-foreground">{stat.label}</div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Expertise */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="border border-white/10 rounded-xl p-6 bg-black/30"
//         >
//           <div className="flex items-center gap-2 mb-4">
//             <Award className="h-5 w-5 text-amber-400" />
//             <h3 className="text-xl font-semibold">Algorithm Expertise</h3>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             {expertise.map((skill) => (
//               <Badge
//                 key={skill}
//                 variant="secondary"
//                 className="px-4 py-2 text-sm bg-violet-500/10 border border-violet-500/30 text-violet-300"
//               >
//                 {skill}
//               </Badge>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

