import React from "react";
import { FaPen } from "react-icons/fa";
import "../../Styles/mobileOrders.scss";
import { Link } from "react-router-dom";

function MobileTableCard({ item, columnData, title, editLink}) {

  const mobileColumns = columnData.filter(
    (column) => column.mobile === true
  );

  return (
    <div className="mobile-order-card">

      <div className="mobile-order-top">
        <h4>{title}</h4>
        <div className="edit-icon-container">
          <Link to={editLink}><FaPen size={15} color="#4f3cc9" cursor="pointer"/></Link>
        </div>
        
      </div>
      {mobileColumns.map((column) => {
        if (column.id === "name" || column.id === "customer") {
          return (
            <div className="mobile-customer" key={column.id}>
              <img
                src={item.avatar || item.customerAvatar}
                alt={`${item.firstName} ${item.lastName}`}
                className="img"
              />

              <span>
                {item.firstName} {item.lastName}
              </span>
            </div>
          );
        }
        return (
          <p key={column.id}>
            <strong>{column.label}: </strong>
            {item[column.id] ?? "-"}
          </p>
        );
      })}

    </div>
  );
}

export default MobileTableCard;