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
          
          {/* Logo */}
          <a href="/">
            <img 
              src="https://iburuj1yfvzpdtt7.public.blob.vercel-storage.com/logo.png" 
              alt="CMCM Canada Logo" 
              className="header-logo logo-flip" 
            />
          </a>

          {/* Menu */}
          <nav className="header-nav">
             <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/events">Events</a>
            <a href="/resources">Resources</a>
            <a href="/giving">Give Online</a>
            <a href="/gallery">Gallery</a>
            <a href="/community">Community Engagement</a>
            <a href="/contact">Contact Us</a>
          </nav>
          
        </header>
        
        <main>{children}</main>
      </body>
    </html>
  );
}