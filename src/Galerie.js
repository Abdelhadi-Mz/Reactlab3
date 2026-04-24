import logo from './logo.png';
import logoSvg from './logo.svg';

/**
 * Galerie component
 * 
 * Displays a responsive grid of image cards with hover effects.
 */
function Galerie() {
  return (
    <div className="page-section galerie-page">
      <h3>🖼️ Galerie d'images</h3>
      <div className="galerie-grid">
        <div className="galerie-item">
          <img src={logo} alt="Logo PNG" />
          <p>Logo PNG</p>
        </div>
        <div className="galerie-item">
          <img src={logoSvg} alt="Logo SVG" />
          <p>Logo SVG</p>
        </div>
        <div className="galerie-item">
          <img src={logo} alt="Logo PNG 2" />
          <p>Logo PNG 2</p>
        </div>
      </div>
    </div>
  );
}

export default Galerie;
