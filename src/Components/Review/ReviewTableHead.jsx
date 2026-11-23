import React from "react";
import { reviewColumnData } from "../../Data/customerColumnDetail";
import "../../Styles/table.scss";

function ReviewTableHead() {
  return (
    <tr>
      <th className="checkbox-cell">
        <div className="checkbox-date">
          <input type="checkbox" name="check" />
          <span>Date</span>
        </div>
      </th>

      {reviewColumnData
        .filter((item) => item.id !== "date")
        .map((item) => (
          <th key={item.id}>
            {item.label}
          </th>
        ))}
    </tr>
  );
}

export default ReviewTableHead