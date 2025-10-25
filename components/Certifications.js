export default function Certifications() {
  return (
    <section id="certifications">
      <h2>Certifications</h2>

      <table>
        <thead>
          <tr>
            <th>Certification / Course</th>
            <th>Issuer / Organization</th>
            <th>Year Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Certified Educator Level 1 & 2</td>
            <td>Google</td>
            <td>2023</td>
          </tr>
          <tr>
            <td>Social Emotional Learning (SEL) Course</td>
            <td>Canada Global Consulting & Training Centre</td>
            <td>2024</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
          font-family: Arial, sans-serif;
          margin-top: 1rem;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      `}</style>
    </section>
  );
}
