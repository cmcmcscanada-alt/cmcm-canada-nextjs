import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CMCM Canada",
  description: "Christ Miracle Church Mission Canada",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        {/* FLOATING TRANSPARENT HEADER */}
        <header className="main-header">
          <a href="/">
            <img 
              src="https://iburuj1yfvzpdtt7.public.blob.vercel-storage.com/logo.png" 
              alt="CMCM Canada Logo" 
              className="header-logo logo-flip" 
            />
          </a>
          <nav className="header-nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/events">Events</a>
            <a href="/resources">Resources</a>
            <a href="/giving">Give Online</a>
            <a href="/gallery">Gallery</a>
            <a href="/community">Community</a>
            <a href="/contact">Contact Us</a>
          </nav>
        </header>
        
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <footer className="site-footer">
          <div className="footer-container">
            
            {/* Column 1: Brand & Logo */}
            <div className="footer-col">
              <img 
                src="https://iburuj1yfvzpdtt7.public.blob.vercel-storage.com/logo.png" 
                alt="CMCM Canada Logo" 
                className="footer-logo" 
              />
              <p className="footer-text">
                Christ Miracle Church Mission Canada. Experience the life-changing presence of God.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <a href="/sermons" className="footer-link">Sermons</a>
              <a href="/about" className="footer-link">About Us</a>
              <a href="/events" className="footer-link">Events</a>
              <a href="/giving" className="footer-link">Give Online</a>
            </div>

            {/* Column 3: Contact Us */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <p className="footer-text">
                1780 Albion Road, Unit 3<br />
                Toronto, ON M9V 1C2
              </p>
              <p className="footer-text">
                info@cmcmcanada.ca<br />
                (437) 667-8250
              </p>
            </div>

            {/* Column 4: Social Media */}
            <div className="footer-col">
              <h4 className="footer-heading">Follow Us</h4>
              <a href="https://www.youtube.com/@cmcmcanadakingsassembly8558" target="_blank" rel="noreferrer" className="footer-link">
                YouTube
              </a>
              <a href="#" className="footer-link">Facebook</a>
              <a href="#" className="footer-link">Instagram</a>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="footer-bottom">
            <p>&copy; 2026 Christ Miracle Church Mission Canada. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}