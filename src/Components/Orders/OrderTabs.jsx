import React, { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";


function OrderTabs(){
    const {activeTab, setActiveTab, orderCounts} = useContext(OrderContext)

    return(<>
    <div className="order-tabs">
        <button className={activeTab === "ordered" ? "active" : ""} 
        onClick={()=>setActiveTab("ordered")}>ORDERED({orderCounts.ordered})</button>

        <button className={activeTab === "delivered" ? "active" : ""} 
        onClick={()=>setActiveTab("delivered")}>DELIVERED ({orderCounts.delivered})</button>
        
        <button className={activeTab === "cancelled" ? "active" : ""} 
        onClick={()=>setActiveTab("cancelled")}>CANCELLED ({orderCounts.cancelled})</button>
    </div>
    </>)
}

export default OrderTabs