import { notFound } from "next/navigation";
import { publications } from "@/data/portfolio";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { readFile } from "fs/promises";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return publications.map((pub) => ({
    slug: pub.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const publication = publications.find((p) => p.slug === slug);

  if (!publication) {
    return {
      title: "Research Paper Not Found",
    };
  }

  return {
    title: `${publication.title} | Mehedi's Research`,
    description: publication.abstract,
    keywords: publication.tags,
  };
}

export default async function ResearchPaperPage({ params }: PageProps) {
  const { slug } = await params;
  const publication = publications.find((p) => p.slug === slug);

  if (!publication) {
    notFound();
  }

  let content: React.ReactElement | null = null;

  try {
    const filePath = join(process.cwd(), "src", "content", "research", `${slug}.mdx`);
    const fileContent = await readFile(filePath, "utf-8");
    
    // Remove frontmatter
    const contentWithoutFrontmatter = fileContent.replace(/^---[\s\S]*?---\n/, "");
    
    content = (
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {contentWithoutFrontmatter}
      </ReactMarkdown>
    );
  } catch (error) {
    // If MDX file doesn't exist, show a placeholder
    content = (
      <div className="prose prose-invert max-w-none">
        <p className="text-muted-foreground">
          Full paper content coming soon. This is a placeholder for the research paper.
        </p>
        <h2>Abstract</h2>
        <p>{publication.abstract}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="py-20 px-4">
        <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-400">
            {publication.title}
          </h1>
          {publication.conference && (
            <p className="text-muted-foreground mb-4">
              {publication.conference} • {publication.date}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mb-6">
            {publication.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <Separator />
        </header>

          <div className="prose prose-invert prose-lg max-w-none dark:prose-invert">
            {content}
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}

