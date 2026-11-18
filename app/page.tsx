
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
          <h1>Our God <br /> is Able</h1>
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

      {/* FOUNDERS GREETING SECTION */}
      <section className="founders-section">
        <div className="founders-container">

          {/* LEFT: FOUNDERS IMAGE */}
          <div className="founders-image-wrapper">
            <div className="founders-border-box"></div>
            <img
              src="/founders.png"
              alt="Prophet Peter and Pastor Folashade Adebisi"
              className="founders-image"
            />
          </div>

          {/* RIGHT: FOUNDERS MESSAGE */}
          <div className="founders-content">

            <h2 className="founders-names">
              PROPHET PETER & PASTOR FOLASHADE ADEBISI
            </h2>

            <p className="founders-text">
              You are invited to experience the life-changing presence of God at CMCM Canada.
              Whether you are with us in the sanctuary or watching from home, we are honored
              to have you with us. The Bible says that He prepares a table before us and anoints
              our heads with oil. Get ready to be refreshed, renewed, and realigned with your
              divine purpose, for Our God is Able.
            </p>

            <div className="founders-buttons">
              <a href="/about" className="btn-outline">Meet Our Leaders</a>
              <a href="/plan-a-visit" className="btn-outline">Plan a Visit</a>
            </div>

          </div>
        </div>
      </section>

      {/* APP DOWNLOAD SECTION */}
      <section className="app-section">

        <div className="app-visual">
          <div className="app-phone-mockup">
            <img
              src="/logo.png"
              alt="CMCM App"
              className="app-screen-image"
            />
          </div>
        </div>

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
