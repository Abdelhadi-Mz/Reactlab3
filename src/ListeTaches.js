/**
 * ListeTaches component
 * 
 * Displays a list of example tasks using a hardcoded array.
 */
function ListeTaches() {
  const taches = [
    { id: 1, titre: "Apprendre React" },
    { id: 2, titre: "Créer une application" },
    { id: 3, titre: "Tester le code" }
  ];

  return (
    <ul className="tasks-list">
      {taches.map((tache) => (
        <li key={tache.id}>{tache.titre}</li>
      ))}
    </ul>
  );
}

export default ListeTaches;