import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muqthar | Teacher Portfolio",
  description: "Professional portfolio for Muqthar, teacher and educator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="header">
          <div className="container nav-container">
            <div className="logo">Umar Muqthar</div>

            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
              ☰
            </label>

            <nav>
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
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content">
            <h1>Inspiring Learning. Shaping Futures.</h1>
            <p>
              Dedicated educator committed to empowering students through
              creativity, critical thinking, and innovation.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary">Contact Me</a>
              <a href="#experience" className="btn secondary">View Experience</a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container">
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Umar Muqthar. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
