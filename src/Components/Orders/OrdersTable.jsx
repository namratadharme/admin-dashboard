import React from "react";
import TableHead from "./TableHead";
import "../../Styles/table.scss";
import OrderRow from "./OrdersRow";
import { OrderContext } from "../../Context/OrderContext";
import { useContext } from "react";
import MobileTableCard from "../../Components/Orders/MobileOrderCard"
import "../../Styles/mobileOrders.scss";
import { columnData } from "../../Data/columnData";


function OrdersTable(){
    const {paginatedData, filteredOrderData, searchOrderData, handleClearFilter} = useContext(OrderContext)
  
    return(<>
    <div className="table-container">
    <table className="table">
       <TableHead/>
       <tbody>
        { searchOrderData.length === 0 ? ( <tr>
              <td colSpan="100%">
                <div className="no-order-found">
                  <p>No order found for current filter</p>

                  <button onClick={handleClearFilter}>
                    Clear Filter
                  </button>
                </div>
              </td>
            </tr>
          ):(
              searchOrderData.map((item)=>(
              <OrderRow 
              key={item.id}
              item={item}/>
            )))
        }
       </tbody>
    </table>
    </div>
   {filteredOrderData.length > 0 && (
        <div className="mobile-table-list">
      
          {paginatedData.map((item) => (
           <MobileTableCard
            item={item}
            key={item.id}
            columnData={columnData}
            title={`Order #${item.reference}`}
            editLink={`/orders/${item.id}`}/>
          ))}


  </div>
)}
    </>)
}

export default OrdersTable