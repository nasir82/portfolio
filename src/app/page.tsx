import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/achievment";
import ResearchVault from "@/components/sections/research-vault";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Expertise from "@/components/sections/expertise_stack";
import Certifications from "@/components/sections/certification";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-16 md:h-20" /> 
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 space-y-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Expertise />
        <Certifications />
        <ResearchVault />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}