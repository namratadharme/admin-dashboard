import React, { useContext } from "react";
import IdentitySection from "../../Components/Identity/IdentitySection";
import "../../Styles/identity.scss";
import "../../Styles/common.scss";
import { useParams } from "react-router-dom";
import { OrderContext } from "../../Context/OrderContext";
import StatsSection from "../../Components/Identity/StatsSection";
import AddressSection from "../../Components/Identity/AddressSection";
import PasswordSection from "../../Components/Identity/PasswordSection";
import Button from "../../Components/Button/Button";
import HistorySummary from "../../Components/Identity/HistorySummary";
import ActivityTimeline from "../../Components/Identity/ActivityTimeline";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { ProductReviewContext } from "../../Context/ReviewContext";
import { CustomerContext } from "../../Context/CustomerContext";
import { ProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router-dom";


function IdentityPage(){
  const { orderData } = useContext(OrderContext);
  const { reviewData } = useContext(ProductReviewContext);
  const { customerData, showToast } = useContext(CustomerContext);
  const {isDirty, setIsDirty} = useContext(ProductContext)

  const { id } = useParams();
  const navigate = useNavigate();

    const identityData = customerData.find(
       (item) => Number(item.customerId) === Number(id));
      if (!identityData) {
         return <h2>user not found</h2>;
         }

    const identityReviewData = reviewData.filter(
    (review) =>
      Number(review.customerId) === Number(identityData.customerId)
  );

    const reviewCount = identityReviewData.length;

       const customerOrders = orderData.filter(
         (order) =>
         Number(order.customerId) === Number(identityData.customerId));
        const orderCount = customerOrders.length;

   function handleSave() {
      setIsDirty(false);
      showToast("customer updated")
      navigate("/customers")
      }

    function handleDelete(){
      setIsDirty(false);
      showToast("customer deleted")
      navigate("/customers")
    }  


    return(<>
    <div className="identity-page flex">
         <div className="left-identity-content">
            <div className="identity-form-content">
            <div className="user-card">
               <IdentitySection 
               identityData={identityData}/>
               <AddressSection identityData={identityData}/>
               <PasswordSection identityData={identityData}/>     
            </div>
            <div className="flex stats-sec">
               <StatsSection identityData={identityData}/>
            </div>
            </div>
            <div className="common-btn">
              
                   <Button className={`save-btn ${isDirty ? "active" : ""}`} disabled={!isDirty}
                    onClick={handleSave}><FaSave/>Save</Button>
                   <Button  className="delete-btn" onClick={handleDelete}><MdDelete/>Delete</Button>
           
            </div>
         </div>
           
          <div className="right-identity-content">
                 <HistorySummary identityData={identityData} 
                 orderCount={orderCount}
                 identityReviewData={identityReviewData} 
                 reviewCount={reviewCount}/>
                 <ActivityTimeline identityData={identityData} customerOrders={customerOrders}/>
          </div>
    </div>
   
    </>)
}

export default IdentityPage