import React from "react";
import { FaDollarSign } from "react-icons/fa";
import "../../Styles/identity.scss";

function ActivityTimeline({ identityData, customerOrders}) {
    

  return (
    <div className="activity">
      <h3>Activity</h3>

      {customerOrders.map((item) => (
        <div className="activity-item" key={item.id}>
          <div className="activity-icon">
            <FaDollarSign />
          </div>

          <div className="activity-content">
            <h4>
              Ordered {item.nbItems} {item.nbItems > 1 ? "posters" : "poster"}
            </h4>

            <p className="activity-date">{item.date}</p>

            <label className="activity-reference">
              Reference <span>#{item.reference}</span> - {item.status}
            </label>

            <p className="activity-price">${item.total}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityTimeline;