import { publications } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Nasir's Portfolio",
  description: "Research papers and publications by Mehedi on Machine Learning, AI, and LLM optimization.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Research Vault</h1>
        <Separator className="mb-12 max-w-2xl mx-auto" />
        
        <div className="space-y-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="border border-white/10 rounded-lg p-6 hover:border-blue-500/50 transition-colors bg-black/50"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                    {pub.title}
                  </h2>
                  {pub.conference && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {pub.conference} • {pub.date}
                    </p>
                  )}
                </div>
                <FileText className="h-6 w-6 text-muted-foreground flex-shrink-0" />
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {pub.abstract}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/research/${pub.slug}`}>
                      Read Paper
                    </Link>
                  </Button>
                  {pub.pdfUrl && (
                    <Button asChild variant="ghost" size="sm">
                      <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    </main>
  );
}

