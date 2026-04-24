/**
 * Contact page component
 * 
 * Shows contact information in a styled card.
 */
function Contact() {
  return (
    <div className="page-section contact-page">
      <h2>📧 Page de Contact</h2>
      <div className="contact-card">
        <p className="contact-info">📩 Email: <strong>contact@example.com</strong></p>
        <p className="contact-info">📱 Téléphone: <strong>+33 1 23 45 67 89</strong></p>
        <p className="contact-info">📍 Adresse: <strong>123 Rue de React, 75000 Paris</strong></p>
      </div>
    </div>
  );
}

export default Contact;
