import React from "react";
import { Link } from "react-router-dom";


function CustomerInfo({order}){
   


    return(<>
    <div className="customer-information">
        <div className="customer-detail">
           <h3>Customer</h3>
          <p>
           <Link to={`/identity/${order.customerId}`} className="link">
           Name: {order.firstName} {order.lastName}
           
           </Link>
         </p>
           <p>
            <Link to={`/identity/${order.customerId}`} className="link">
             Email:{order.email}
            </Link>
          </p>
        </div>
        <div className="bottom-content">
            <h3>Shipping Address</h3>
            <p>
            {order.address}
             </p>
        </div>
        
    </div>
    </>)
}

export default CustomerInfo