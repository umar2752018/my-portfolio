export default function Downloads() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#f5f5f5',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    maxWidth: '600px',
    marginTop: '1rem',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#0070f3',
    color: 'white',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: '500',
  };

  return (
    <section id="downloads" style={{ padding: '2rem' }}>
      <h1>Download Page</h1>
      <p>Hello! I am [Your Name], an enthusiastic teacher...</p>

      {/* PowerPoints Section */}
      <div style={{ marginTop: '2rem' }}>
        <h2>PowerPoints</h2>

        <div style={containerStyle}>
          <span style={titleStyle}>4.1 – Types of Software and Interrupts</span>
          <a href="/powerpoints/4.1.pptx" download style={buttonStyle}>
            Download
          </a>
        </div>

        <div style={containerStyle}>
          <span style={titleStyle}>
            4.2 – Types of Programming Languages, Translators, IDEs
          </span>
          <a href="/powerpoints/4.2.pptx" download style={buttonStyle}>
            Download
          </a>
        </div>
      </div>

      {/* Past Paper Questions Section */}
      <div style={{ marginTop: '3rem' }}>
        <h2>Past Paper Questions</h2>

        <div style={containerStyle}>
          <span style={titleStyle}>1.1 – Number Systems</span>
          <a href="/pastpaperquestions/1.1.pdf" download style={buttonStyle}>
            Download
          </a>
        </div>
      </div>
    </section>
  );
}
