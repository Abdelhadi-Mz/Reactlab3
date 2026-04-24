# 🚀 TP Navigation & Rendu Dynamique avec React

Travaux pratiques d'initiation à React axés sur la navigation SPA, le rendu conditionnel, l'itération sur des listes et l'intégration de médias dans une interface moderne.

---

## 🎯 Objectifs

- Mettre en place une navigation multi-pages avec React Router sans rechargement de page
- Appliquer le rendu conditionnel grâce aux opérateurs ternaires et logiques
- Générer des listes dynamiques en utilisant la méthode `map()`
- Intégrer des ressources statiques : images, fichiers audio et styles CSS
- Comprendre la structure d'un projet React et le rôle de chaque fichier principal

---

## 🛠️ Technologies utilisées

| Outil / Technologie | Rôle |
|---|---|
| **React** | Bibliothèque JavaScript pour construire des interfaces utilisateur basées sur des composants |
| **React Router DOM** | Gestion de la navigation en Single Page Application (SPA) sans rechargement de page |
| **useState** | Hook React permettant de gérer l'état local d'un composant |
| **JSX** | Syntaxe d'extension JavaScript utilisée pour décrire l'interface visuelle dans React |
| **CSS** | Mise en forme et stylisation des composants via des classes appliquées avec `className` |
| **Node.js / npm** | Environnement d'exécution et gestionnaire de paquets pour initialiser et gérer le projet |
| **Create React App** | Outil de scaffolding officiel pour initialiser rapidement un projet React prêt à l'emploi |

---

## 🗂️ Architecture du projet

```
tp-navigation/
└── src/
    ├── index.js          → Point d'entrée de l'application ; active le BrowserRouter pour le routage
    ├── App.js            → Composant racine ; définit la navigation et les routes principales
    ├── App.css           → Feuille de styles globale appliquée à l'ensemble de l'application
    ├── Accueil.js        → Page d'accueil ; agrège les composants Logo, LecteurAudio et ListeTaches
    ├── Apropos.js        → Page « À propos » ; composant simple de présentation
    ├── Connexion.js      → Composant de rendu conditionnel ; bascule entre les états connecté/déconnecté
    ├── ListeTaches.js    → Composant de liste dynamique ; itère sur un tableau de tâches avec map()
    ├── Logo.js           → Composant d'affichage d'image ; importe et affiche logo.png
    ├── LecteurAudio.js   → Composant média ; intègre un lecteur audio natif avec audio.mp3
    ├── logo.png          → Ressource image importée et utilisée par le composant Logo
    └── audio.mp3         → Ressource audio importée et utilisée par le composant LecteurAudio
```

---

## 📋 Exercices

| N° | Titre | Concepts abordés |
|---|---|---|
| 1 | Rendu conditionnel supplémentaire | Opérateur logique `&&`, condition sur variable numérique, affichage conditionnel sans alternative |
| 2 | Liste personnalisée avec props | Composant `ListeCourses`, passage de tableau via props, itération avec `map()`, propriété `key` |
| 3 | Galerie d'images | Import multiple de ressources statiques, composition de composants, affichage en grille |
| 4 | Nouvelle page Contact | Création d'un composant page, ajout d'une route `/contact` dans `<Routes>`, lien `<Link>` dans `<nav>` |

---

## 🎬 Démonstration vidéo

> 📌 

https://github.com/user-attachments/assets/cb5f0f66-de1d-4d4e-a77c-997f683c3c91




- L'intégration du logo et du lecteur audio sur la page d'accueil
- L'application des styles CSS via `className` dans App.js
- La démonstration des quatre exercices pratiques réalisés
