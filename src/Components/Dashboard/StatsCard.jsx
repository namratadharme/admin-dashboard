import React from "react";
import "../../Styles/statsCard.scss";

function StatsCard({title, icon, value, borderRadius}){
    return(<>
        <div className={`stats-card ${borderRadius ? "no-borderRadius" : ""}`}>
            <div className="icon-box"></div>
            <div className="stats-card-icon">{icon}</div>
             <div className="stats-card-right-content column">
                <span>{title}</span>
                <span className="value">{value}</span>
             </div>
        </div>
    </>)
}

export default StatsCard