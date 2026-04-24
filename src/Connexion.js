import { useState } from 'react';

/**
 * Connexion component
 *
 * Demonstrates local React state with a boolean toggle.
 * The button switches the connected status between true and false.
 */
function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div className="connexion-box">
      {connecte ? (
        <h3>Connecté</h3>
      ) : (
        <h3>Déconnecté</h3>
      )}
      <button className="form-button" onClick={() => setConnecte(!connecte)}>
        Changer l’état
      </button>
    </div>
  );
}

export default Connexion;