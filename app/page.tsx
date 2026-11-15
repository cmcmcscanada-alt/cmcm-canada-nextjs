export default function Home() {
  return (
    <main>
      
      {/* HERO SECTION */}
      <section 
        className="hero-section"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our God <br/> is Able</h1>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="cards-section">
        <h2>What's Happening</h2>
        
        <div className="cards-grid">
          
          <div className="card">
            <h3>Latest Sermons</h3>
            <p>Catch up on messages you missed. Stream or download audio directly to your device.</p>
            <a href="/sermons">Listen Now &rarr;</a>
          </div>

          <div className="card" style={{ borderTopColor: '#1A365D' }}>
            <h3>Service Times</h3>
            <p>Join us in person. Find out our weekly schedule and locations across Canada.</p>
            <a href="/services" style={{ color: '#1A365D' }}>View Times &rarr;</a>
          </div>

          <div className="card">
            <h3>Give Online</h3>
            <p>Your generosity helps us share the Gospel and serve our community.</p>
            <a href="/giving">Give Now &rarr;</a>
          </div>

        </div>
      </section>
            {/* APP DOWNLOAD SECTION */}
      <section className="app-section">
        {/* Left Side: Blue Wavy Background & Phone Mockup */}
        <div className="app-visual">
          <div className="app-phone-mockup">
            {/* Replace this image URL with a screenshot of your church app or a welcome screen */}
            <img 
              src="/app-screenshot.jpg"
              alt="CMCM App" 
              className="app-screen-image"
            />
          </div>
        </div>

        {/* Right Side: Text & Buttons */}
        <div className="app-content">
          <h2 className="app-title">Get The App!</h2>
          <p className="app-description">
            Live worship services, hope-filled messages, daily inspiration. 
            Get the CMCM Canada app and have them all at your fingertips.
          </p>
          
          <div className="app-badges">
            <a href="#" className="store-badge">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
              />
            </a>
            <a href="#" className="store-badge">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}