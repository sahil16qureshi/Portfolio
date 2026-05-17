import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sahil Qureshi | Software Engineer Portfolio",
  description:
    "Portfolio of Sahil Qureshi, showcasing software engineering, AI/ML, full-stack development, data projects, leadership, and resume.",
  keywords: [
    "Software Engineer",
    "AI ML",
    "Full Stack Developer",
    "Backend Developer",
    "FastAPI",
    "Python",
    "React",
    "Next.js",
    "Portfolio",
    "GIKI",
  ],
  authors: [{ name: "Sahil Qureshi" }],
  openGraph: {
    title: "Sahil Qureshi | Software Engineer Portfolio",
    description:
      "Software engineering, AI/ML, full-stack development, backend, data projects, leadership, and resume.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
