import React, { useContext, useEffect } from "react";
import ProductReviewHeader from "../../Components/Review/ProductReviewHeader";
import ProductReviewTable from "../../Components/Review/ProductReviewTable";
import "../../Styles/review.scss";
import Pagination from "../../Components/Pagination/Pagination";
import { ProductReviewContext } from "../../Context/ReviewContext";
import ReviewDetail from "../../Components/Review/ReviewDetail";
import { useParams } from "react-router-dom";
import { CustomerContext } from "../../Context/CustomerContext";
import MobilePagination from "../../Components/Pagination/MobilePagination";

function ProductReviewPage(){
    const { id } = useParams();
   
    const{currentPage, 
         setCurrentPage, 
         rowsPerPage, 
         setRowsPerPage, 
         startIndex, 
         endIndex,
         totalPages,
         filterProductReviewData,
         selectReview, selectedProductId, setSelectedProductId,reviewData} = useContext(ProductReviewContext)
   const {toast} = useContext(CustomerContext)     

     useEffect(()=>{
       setSelectedProductId(Number(id))
       setCurrentPage(1)
     },[id])

    return(<>
       <div className="review-page">
          <div className="table-box">
            {!selectedProductId && <ProductReviewHeader/>}
         
             <ProductReviewTable/>
           
             <Pagination
             currentPage={currentPage}
             setCurrentPage={setCurrentPage}
             rowsPerPage={rowsPerPage} 
             setRowsPerPage={setRowsPerPage} 
             startIndex={startIndex} 
             endIndex={endIndex}
             totalPages={totalPages}
             filteredData={filterProductReviewData}
           />

           <div className="mobile-pagination-wrapper">
             <MobilePagination/>
           </div>
          <button className="add-product-btn">+</button>
        </div>
        {!selectedProductId && <div className={`review-detail-box ${selectReview ? "open" : ""}`}>
          <ReviewDetail/>
        </div>}
       </div>
    </>)
}

export default ProductReviewPage