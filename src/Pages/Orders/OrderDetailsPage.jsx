import { useContext, useState } from "react";
import OrderInfoCard from "../../Components/OrderDetails/OrderInfoCard";
import CustomerInfo from "../../Components/OrderDetails/CustomerInfo";
import "../../Styles/orderDetails.scss";
import { OrderContext } from "../../Context/OrderContext.jsx";
import ItemsTable from "../../Components/OrderDetails/ItemsTable.jsx";
import TotalsSection from "../../Components/OrderDetails/TotalsSection.jsx";
import OrderPagePagination from "../../Components/Pagination/OrderPagePagination.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { CustomerContext } from "../../Context/CustomerContext.jsx";

function OrderDetailsPage(){
  const {filteredOrderData} = useContext(OrderContext)
  const [isDirty, setIsDirty] = useState(false);
  const [isReturn, setIsReturn] = useState(false)

  const {showToast} = useContext(CustomerContext)
   
  const navigate = useNavigate()

const handleReturnToggle = () => {
  setIsReturn((prev) => !prev);
  setIsDirty(true);
};
     const {id} = useParams();

     const order = filteredOrderData.find((item)=>item.id === Number(id))

        if(!order) {
          return <h2>Order not found</h2>;
          }

          const handleSave = () => {
                 showToast("Order saved successfully");
                navigate("/orders");
                  };

          const handleDelete = () => {
                showToast( "order deleted")
                navigate("/orders");
                };

    return (<>

    <OrderPagePagination/>
    <div className="order-details">
        <div className="top-pagination"></div>
        <div className="order-details-top-content">
      <OrderInfoCard
        order={order}
        isReturn={isReturn}
        handleReturnToggle={handleReturnToggle}
        setIsDirty={setIsDirty}
      />
         <CustomerInfo order={order}/>
        </div>
        <div className="gap"></div>
        <div className="order-details-middle-content">
          <ItemsTable order={order?.items}/>       
        </div>
        <div className="order-details-bottom-content">
        <TotalsSection handleSave={handleSave} handleDelete={handleDelete} order={order} 
             setIsDirty={setIsDirty} isDirty={isDirty} isReturn={isReturn}/>
        </div>
    </div>
    </>)
}

export default OrderDetailsPage