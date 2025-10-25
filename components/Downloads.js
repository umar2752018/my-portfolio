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

      <div style={{ marginTop: '2rem' }}>
        <h2>IGCSE Computer Science - PowerPoint Presentations</h2>

        {/* Past paper Question 1.1 */}
        <div style={containerStyle}>
          <span style={titleStyle}>1.1 – Number systems</span>
          <a href="/pastpapersquestions/1.1.pdf" download style={buttonStyle}>
            Download
          </a>
        </div>



        {/* Presentation 4.1 */}
        <div style={containerStyle}>
          <span style={titleStyle}>4.1 – Types of software and interrupts</span>
          <a href="/powerpoints/4.1.pptx" download style={buttonStyle}>
            Download
          </a>
        </div>

        {/* Presentation 4.2 */}
        <div style={containerStyle}>
          <span style={titleStyle}>
            4.2 – Types of Programming Languages, Translators, IDEs
          </span>
          <a href="/powerpoints/4.2.pptx" download style={buttonStyle}>
            Download
          </a>
        </div>
      </div>
    </section>
  );
}
