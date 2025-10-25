import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muqthar | Teacher Portfolio",
  description: "Professional portfolio for Muqthar, teacher and educator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-logo">Umar Muqthar Portfolio</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#philosophy">Philosophy</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#lessons">Lessons</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#downloads">Downloads</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <main>
          <section className="hero">
            <h1>Welcome to My Portfolio</h1>
            <p>Empowering students through inspiration and knowledge.</p>
            <button className="cta-btn">Get in Touch</button>
          </section>
          {children}
        </main>
      </body>
    </html>
  );
}