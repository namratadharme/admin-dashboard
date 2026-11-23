import React from "react";
import StatsCard from "./StatsCard";

import "../../Styles/statsSection.scss";
import { statsData } from "../../Data/statsData";


function StatsSection(){

    return(<>
    <div className="stats-section">
           {statsData.slice(0, 2).map((item)=>(
                <StatsCard 
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value} 
                />
           )
        
           )}
          
    </div>
    </>)
}

export default StatsSection