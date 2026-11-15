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
      
    </main>
  );
}