import React, {useContext} from "react";
import { CustomerContext } from "../../Context/CustomerContext";

function CustomerTableHead(){
    const {customerColumnData} =  useContext(CustomerContext)

     
    return(<>
    <thead>
            <tr>
                <th><input type="checkbox"/></th>
                {
                    customerColumnData?.map((item)=>(
                        <th key={item.id}>{item.label}</th>
                    ))
                }
            </tr>
    </thead>
    </>)
}

export default CustomerTableHead