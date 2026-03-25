import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md. Nasir Uddin | Flutter & Android (Jetpack) Developer",
  description: "Portfolio of Md. Nasir Uddin, a final-year CSE student at SUST specializing in Flutter and Jetpack Compose, Full-Stack Engineering. Building backend with MongoDB, Node.js, and FastAPI.",
  keywords: ["Software Engineer", "Mobile Developer", "API", "Node.js", "Flutter", "FastAPI", "Full-Stack", "Portfolio"],
  authors: [{ name: "Md. Nasir Uddin" }],
  creator: "Md. Nasir Uddin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nasiruddin.dev",
    title: "Md. Nasir Uddin | Mobile App Developer",
    description: "Full-Stack Developer Portfolio",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

