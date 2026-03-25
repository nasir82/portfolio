export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: { label: string; url: string };
  github?: string;
  image: string;
  isFeatured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  companyOrEvent: string;
  date: string;
  description: string;
  type: "work" | "hackathon" | "education";
  location: string;
}

export interface Publication {
  id: string;
  title: string;
  abstract: string;
  conference?: string;
  date: string;
  pdfUrl?: string;
  slug: string;
  tags: string[];
}

