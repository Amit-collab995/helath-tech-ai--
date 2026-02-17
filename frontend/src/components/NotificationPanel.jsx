import React, { useEffect } from "react";
import "./NotificationPanel.css";

const NotificationPanel = ({ open, onClose }) => {
  // Close on ESC press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="notification-panel-overlay" onClick={onClose}>
      <div
        className="notification-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="notification-panel-header">
          <h3>Notifications</h3>
          <button className="notification-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="notification-panel-body">
          <div className="notification-item unread">
            💊 <span>Medicine reminder at 8 PM</span>
          </div>
          <div className="notification-item">
            🩺 <span>Your health report is ready</span>
          </div>
          <div className="notification-item">
            🧠 <span>New AI health tip available</span>
          </div>
        </div>

        <div className="notification-panel-footer">
          <button className="view-all-btn">View all</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;

