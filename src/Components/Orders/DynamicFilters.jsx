import React, { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";
import "../../Styles/orders.scss";

import "../../Styles/orderHeader.scss";

function DynamicFilters(
   {
   filters, 
   filterValue, 
   setFilterValue,
   filterInputData,
   handleToggleFilter,
}
){
    return(<>
    <div className="filter-bar">
    
         {filterInputData && filterInputData.map((item, index)=>{
            if(!filters[item.key]) return 
            return (
             <div className="filter-input" key={index}>
                     
              {item.type === "select" ? 

              <select className="dynamic-input" onChange={(e)=>setFilterValue((prev)=>({
                 ...prev,
                 [item.key]: e.target.value
              }))} key={item.key} placeholder={item.placeholder} 
              value={filterValue[item.key]}>
               <option value="">{item.placeholder}</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
              </select>
              :
              <input type={item.type} className="dynamic-input" key={item.key} placeholder={item.placeholder} value={filterValue[item.key]}
               onChange={(e)=>setFilterValue((prev)=>({
                  ...prev,
                  [item.key]: e.target.value
               }))}/>}
               <div className="remove-filter"><button onClick={()=>handleToggleFilter(item.key)}>-</button></div>
                </div>
            )
         })}

         </div>
 
    </>)
}

export default DynamicFilters