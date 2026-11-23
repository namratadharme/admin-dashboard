import {useContext} from "react";
import ReviewTableHead from "./ReviewTableHead";
import { ProductReviewContext } from "../../Context/ReviewContext";
import ReviewProductRow from "./ReviewProductRow";
import "../../Styles/reviewTable.scss";
import { FaPlus } from "react-icons/fa6";
import MobileTableCard from "../Orders/MobileOrderCard";
import { reviewColumnData } from "../../Data/customerColumnDetail";
import "../../Styles/common.scss";


function ProductReviewTable(){
    const {paginatedData, selectedProductId, searchReviewData} = useContext(ProductReviewContext)

    return(<>
     <div className="table-container">
          <table className="table">
        <thead>
              <ReviewTableHead/>
        </thead>
               <tbody>
                    {
                       searchReviewData.map((item)=>(
                        <ReviewProductRow key={item.id} item={item}/>
                      ))
                    }
               </tbody>
       </table>
        <div className="mobile-table-list">
          {
          searchReviewData.map((item)=>(
            <MobileTableCard
            item={item}
            key={item.id}
            columnData={reviewColumnData}
            title={`${item.customerName}`}
            />
          ))
         }
         </div>
     </div>
     <div className="create-btn-container">
      {selectedProductId ? <button className="create-btn"><FaPlus/>CREATE</button> : ""}
      </div>
        
   
    </>)
}

export default ProductReviewTable