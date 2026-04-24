import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import ListeTaches from './ListeTaches';
import Notifications from './Notifications';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

/**
 * Accueil page component
 *
 * Displays the main home page section with a logo, audio player,
 * task list, notifications, shopping list and gallery.
 */
function Accueil() {
  const articles = ['Lait', 'Pain', 'Beurre', 'Fromage'];

  return (
    <div className="page-section accueil-page">
      <h2>Page d'accueil</h2>
      <Logo />
      <div className="audio-container">
        <LecteurAudio />
      </div>
      <ListeTaches />
      
      <hr />
      
      <h3>Exercices pratiques</h3>
      <Notifications notifications={3} />
      <ListeCourses articles={articles} />
      <Galerie />
    </div>
  );
}

export default Accueil;