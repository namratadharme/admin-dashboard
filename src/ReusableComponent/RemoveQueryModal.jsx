import React from "react";

const RemoveQueryModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="query-modal-overlay">
      <div className="query-modal remove-query-modal">

        <h3>Remove saved query?</h3>

        <p>
          Are you sure you want to remove that item from your list
          of saved queries?
        </p>

        <div className="query-modal-actions">
          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            CANCEL
          </button>

          <button
            className="confirm-btn"
            onClick={onConfirm}
          >
            CONFIRM
          </button>
        </div>

      </div>
    </div>
  );
};

export default RemoveQueryModal;