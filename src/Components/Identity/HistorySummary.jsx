import React from "react";
import "../../Styles/common.scss";
import { FaDollarSign } from "react-icons/fa";
import { WiTime8 } from "react-icons/wi";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";

function HistorySummary({ identityData, reviewCount, orderCount }) {
  console.log(identityData)
  return (
    <div className="history-summary">
      <h4>History</h4>

      <div className="history-container">

        <div className="flex column">
          <div className="flex">
                 <WiTime8 size={20}/>

            <div className="margin column">
                 <span>First seen</span>
                 <p>{identityData?.birthday}</p>
            </div>

          </div>

          <div className="flex">
                 <WiTime8 size={20}/>

            <div className="margin column">
                <span>Last seen</span>
                <p>{identityData?.lastSeen}</p>
            </div>
          </div>
        </div>

        <div className="history-item column">
        
            <div className="link-container">
              <FaDollarSign size={16}/>
              <Link to={`/orders?customerId=${identityData?.customerId}`} className="link">
              {orderCount || 0} orders
              </Link>
              </div>
      
            <div className="link-container">
              <MdMessage size={16}/>
              <Link to={`/review?customerId=${identityData.customerId}`} className="link">
                {reviewCount || 0}Review
              </Link>
              </div>
     
        </div>
      </div>
    </div>
  );
}

export default HistorySummary;