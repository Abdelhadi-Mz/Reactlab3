import logo from './logo.png';

/**
 * Logo component
 * 
 * Renders a simple branded image for the home page.
 */
function Logo() {
  return <img src={logo} alt="Logo du site" width="150" className="logo-image" />;
}

export default Logo;