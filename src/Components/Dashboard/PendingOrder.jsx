import React, {useContext} from "react";
import { OrderContext } from "../../Context/OrderContext";
import ShowMoreList from "./ShowMoreList";
import { useNavigate } from "react-router-dom";

function PendingOrder(){
      const {orderData} = useContext(OrderContext)
      const navigate = useNavigate();

      const pendingOrder = orderData.filter((order)=>order.status.toLowerCase() === "ordered")

    return(<>
      <div className="pending-order">
        
        <h4>Pending Order</h4>
          
           <ShowMoreList
            data={pendingOrder}
            initialCount={10}
            renderItem={(data, index)=>
                <div key={index} className="pending-review-customer-items justify" onClick={()=>navigate(`/orders/${data.id}`)}>
                   
                    <div className="pending-order-data">
                      <div className="img">
                            <img src={data.avatar} alt={data.firstName} width="30px" height="25px" />
                      </div>
                  
                     <div className="table-data">
                        <span>{data.date}</span>
                        <span>{data.firstName} {data.lastName} by {data.nbItems} item</span>
                    </div>
                    </div>
                   
                
                    <div>${data.total}</div>
                </div>
            }/>

        </div>    
     
    </>)
}

export default PendingOrder