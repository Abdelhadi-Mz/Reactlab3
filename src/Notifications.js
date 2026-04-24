/**
 * Notifications component
 * 
 * Displays a notification badge when the count is greater than zero.
 */
function Notifications({ notifications }) {
  return (
    <div className="notification-container">
      {notifications > 0 && (
        <p className="notification-text">
          🔔 Vous avez {notifications} notification(s)
        </p>
      )}
    </div>
  );
}

export default Notifications;
