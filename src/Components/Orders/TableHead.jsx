import React, { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";

function TableHead(){
    const {column} = useContext(OrderContext)


    return (<>
  
     <thead>
            <tr>
                    <th className="checkbox-cell">
                       <div className="checkbox-date">
                         <input type="checkbox" className="input-checkbox"/>
                         <span>Date</span>
                       </div>
                     
                      </th>

                    {
                      column.filter((col)=>col.visible && col.id !== "date").map((col)=>{
                        return <th key={col.id}>{col.label}</th>
                      })
                    }
                   
            </tr>
        </thead> 
    </>)
}

export default TableHead