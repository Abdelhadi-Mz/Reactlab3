/**
 * ListeCourses component
 * 
 * Renders a stylized shopping list passed from the parent component.
 */
function ListeCourses({ articles }) {
  return (
    <div className="liste-courses-container">
      <h3>🛒 Liste de courses</h3>
      <ul className="shopping-list">
        {articles.map((article, index) => (
          <li key={index} className="shopping-item">{article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
