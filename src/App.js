import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion';
import Contact from './Contact';
import './App.css';

/**
 * App Component
 *
 * Main entry point for the TP3 React application.
 * It defines the navigation links and the routes for each page.
 */


function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="titre">Mon Application React</h1>
        <p className="app-subtitle">TP3 - Navigation, état local et présentation</p>
      </header>

      <nav className="app-nav">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <main className="app-main">
        <section className="connexion-section">
          <Connexion />
        </section>

        <section className="routes-section">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;