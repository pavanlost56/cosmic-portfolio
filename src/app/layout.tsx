import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import NavigationHeader from "./components/NavigationHeader";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajmeera Pavan Kumar - Full Stack Developer",
  description: "Professional portfolio of Ajmeera Pavan Kumar, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Development"],
  authors: [{ name: "Ajmeera Pavan Kumar" }],
  creator: "Ajmeera Pavan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ajmeera Pavan Kumar - Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and skills",
    siteName: "Ajmeera Pavan Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajmeera Pavan Kumar - Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and skills",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* <PageLoader /> Removed to avoid double loading and speed up initial load */}
        <ScrollProgress />
        <NavigationHeader />
        <PageTransition>
          {children}
        </PageTransition>
        <ScrollToTop />
      </body>
    </html>
  );
}
