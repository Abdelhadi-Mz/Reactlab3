
# TP 3 : Navigation, rendu conditionnel et intégration des ressources dans React

## Cours : Développement Front-End moderne avec React

---

# Sommaire

1. Objectif  
2. Étape 1 – Préparer le projet React  
3. Étape 2 – Installer React Router  
4. Étape 3 – Mettre en place la navigation  
5. Étape 4 – Rendu conditionnel avec `useState`  
6. Étape 5 – Liste dynamique avec `map()`  
7. Étape 6 – Intégrer des images et des médias  
8. Étape 7 – Appliquer des styles CSS  
9. Étape 8 – Exercices pratiques  
10. Étape 9 – Vérification finale  
11. Synthèse du TP  

---

# Objectif

Ce TP permet de découvrir :

- la navigation entre pages avec `React Router`
- le rendu conditionnel avec `useState`
- l’affichage dynamique avec `map()`
- l’intégration d’images et de médias
- l’ajout de styles CSS
- l’organisation des composants React

---

# Étape 1 – Préparer le projet React

Créer un projet React si ce n’est pas déjà fait :

```bash
npx create-react-app tp-react
cd tp-react
npm start
```

---

# Étape 2 – Installer React Router

Installer React Router :

```bash
npm install react-router-dom
```

---

# Étape 3 – Mettre en place la navigation

## Créer `Accueil.js`

```javascript
function Accueil() {
  return <h2>Page d’accueil</h2>;
}

export default Accueil;
```

---

## Créer `Apropos.js`

```javascript
function Apropos() {
  return <h2>Page À propos</h2>;
}

export default Apropos;
```

---

## Modifier `index.js`

Activer le routeur principal :

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

---

## Modifier `App.js`

Ajouter la navigation :

```javascript
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/apropos">À propos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </div>
  );
}

export default App;
```

---

# Étape 4 – Rendu conditionnel avec `useState`

Créer un fichier :

```text
Connexion.js
```

Ajouter le code suivant :

```javascript
import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div>
      {connecte ? (
        <h3>Connecté</h3>
      ) : (
        <h3>Déconnecté</h3>
      )}

      <button onClick={() => setConnecte(!connecte)}>
        Changer l’état
      </button>
    </div>
  );
}

export default Connexion;
```

---

## Explication du code

- `useState(false)` initialise `connecte` à `false`
- `{connecte ? ... : ...}` permet le rendu conditionnel
- `!connecte` inverse la valeur actuelle

---

## Ajouter `Connexion` dans `App.js`

```javascript
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/apropos">À propos</Link>
      </nav>

      <Connexion />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </div>
  );
}

export default App;
```

---

# Étape 5 – Liste dynamique avec `map()`

Créer un fichier :

```text
ListeTaches.js
```

```javascript
function ListeTaches() {
  const taches = [
    "Faire les courses",
    "Étudier React",
    "Faire le TP"
  ];

  return (
    <ul>
      {taches.map((tache, index) => (
        <li key={index}>{tache}</li>
      ))}
    </ul>
  );
}

export default ListeTaches;
```

---

# Étape 6 – Intégrer des images et des médias

## Ajouter une image

Copier une image :

```text
logo.png
```

dans le dossier `src/`

---

## Créer `Logo.js`

```javascript
import logo from './logo.png';

function Logo() {
  return (
    <img
      src={logo}
      alt="Logo du site"
      width="150"
    />
  );
}

export default Logo;
```

---

## Ajouter un fichier audio

Copier :

```text
audio.mp3
```

dans le dossier `src/`

---

## Créer `LecteurAudio.js`

```javascript
import son from './audio.mp3';

function LecteurAudio() {
  return (
    <audio controls src={son}></audio>
  );
}

export default LecteurAudio;
```

---

## Modifier `Accueil.js`

```javascript
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import ListeTaches from './ListeTaches';

function Accueil() {
  return (
    <div>
      <h2>Page d’accueil</h2>

      <Logo />

      <LecteurAudio />

      <ListeTaches />
    </div>
  );
}

export default Accueil;
```

---

# Étape 7 – Appliquer des styles CSS

Créer un fichier :

```text
App.css
```

```css
body {
  font-family: Arial;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

button {
  margin-top: 10px;
}
```

Puis importer dans `App.js` :

```javascript
import './App.css';
```

---

# Étape 8 – Exercices pratiques

Essayer les améliorations suivantes :

- Ajouter une page Contact
- Ajouter plusieurs images
- Ajouter une vidéo HTML5
- Styliser davantage la navigation
- Ajouter une liste dynamique plus complexe

---

# Étape 9 – Vérification finale

La structure finale doit ressembler à :

```text
src/
│
├── App.js
├── App.css
├── index.js
├── Accueil.js
├── Apropos.js
├── Connexion.js
├── ListeTaches.js
├── Logo.js
├── LecteurAudio.js
├── logo.png
└── audio.mp3
```

---

# Synthèse du TP

Ce TP permet de pratiquer :

- `React Router`
- `Routes`
- `Route`
- `Link`
- `useState`
- rendu conditionnel
- `map()`
- import des ressources
- CSS dans React

---

# Lancer le projet

```bash
npm start
```
<img width="944" height="481" alt="screenshot1" src="https://github.com/user-attachments/assets/73e691c4-9e8c-4cda-8025-dbd6f121af39" />
<img width="950" height="453" alt="screenshot2" src="https://github.com/user-attachments/assets/f2d7c5cf-2f68-42ad-97cc-fee6e7ca6d31" />
<img width="959" height="451" alt="Screenshot 2026-04-24 160807" src="https://github.com/user-attachments/assets/66ee4d3d-b4f4-48a8-8bb1-bbc50e5e4639" />

---

# Fin du TP

Vous maîtrisez maintenant la navigation, le rendu conditionnel et l’intégration des ressources dans React.
