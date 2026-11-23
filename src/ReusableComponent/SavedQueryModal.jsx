import React from "react";
import "../../src/Styles/queryModal.scss";

const SaveQueryModal = ({
  queryName,
  setQueryName,
  onCancel,
  onSave,
}) => {
  return (
    <div className="query-modal-overlay">
      <div className="query-modal">

        <h3>Save current query as</h3>

        <div className="query-input">
          <label>Query name</label>

          <input
            type="text"
            value={queryName}
            onChange={(e) => setQueryName(e.target.value)}
            autoFocus
          />
        </div>

        <div className="query-modal-actions">
          <button onClick={onCancel}>
            CANCEL
          </button>

          <button onClick={onSave}>
            SAVE
          </button>
        </div>

      </div>
    </div>
  );
};

export default SaveQueryModal;