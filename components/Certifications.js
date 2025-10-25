"use client";

export default function Certifications() {
  const certifications = [
    {
      name: "Google Certified Educator Level 1, 2 and Trainer Assessment",
      issuer: "Google",
      year: "2020",
    },
    {
      name: "Social Emotional Learning (SEL) Course",
      issuer: "Canada Global Consulting & Training Centre",
      year: "2024",
    },
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Certification / Course</th>
              <th>Issuer / Organization</th>
              <th>Year Completed</th>
            </tr>
          </thead>
          <tbody>
            {certifications.map((cert, index) => (
              <tr key={index}>
                <td>{cert.name}</td>
                <td>{cert.issuer}</td>
                <td>{cert.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        section {
          padding: 2rem 1rem; /* match About padding */
          max-width: 720px; /* a common width for text content */
          margin: 0 auto; /* center align the section */
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .table-container {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-family: Arial, sans-serif;
          font-size: 0.95rem;
        }

        th,
        td {
          border: 1px solid #ddd;
          padding: 10px 12px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
          font-weight: 600;
        }

        tr:nth-child(even) {
          background-color: #fafafa;
        }

        tr:hover {
          background-color: #f1f1f1;
          transition: background-color 0.2s ease;
        }
      `}</style>
    </section>
  );
}
