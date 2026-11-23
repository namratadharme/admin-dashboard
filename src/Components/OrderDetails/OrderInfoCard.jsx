import { useState} from "react";
import "../../Styles/common.scss";
import "../../Styles/common.scss";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";

function OrderInfoCard({order, isReturn, handleReturnToggle, setIsDirty}){
    

    const [status, setStatus] = useState(order.status)
   const [orderData, setOrderData] = useState(order);
   

    return(<>
    <div className="order-info-card">
        
        <div className="left-contents">
            <h3>Order</h3>
            <span>Date: <br></br>{order?.date}</span>
            
            <div className="status-field">
               <label>Status</label>
              <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setIsDirty(true);
            }}
            className="status-select"
          >

                    <option value="Delivered">Delivered</option>
                    <option value="Ordered">Ordered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>
        </div>
        <div className="right-contents">
            <span>Reference:<br></br> {order?.reference}</span>
            <span className="return">
           {isReturn ? (
           <BsToggle2On
           className="return-on"
           onClick={handleReturnToggle}/>
           ) : (
          <BsToggle2Off
          className="return-off"
          onClick={handleReturnToggle} />
           )}
            Returned</span>
        </div>
    </div>
    </>)
}
export default OrderInfoCard