import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../Styles/productDetails.scss";
import { FaCamera } from "react-icons/fa";
import { MdOutlineNotes } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { RiBarcodeBoxLine } from "react-icons/ri";
import { ProductReviewContext } from "../../Context/ReviewContext";

function ProductHeaderTab(){
    const {reviewData} = useContext(ProductReviewContext)
    const {id} = useParams()

   const productReviewCount = reviewData.filter((review)=>review.productId === Number(id)).length;
    return(<>
    <div className="product-tab">
        <NavLink to="" end className="nav-link"><FaCamera size={23}/>IMAGE</NavLink>
        <NavLink to="details" className="nav-link"><RiBarcodeBoxLine size={24}/>DETAILS</NavLink>
        <NavLink to="description" className="nav-link"><MdOutlineNotes size={24}/>DESCRIPTION</NavLink>
        <NavLink to="review" className="nav-link"><MdMessage size={24}/> REVIEWS ({productReviewCount})</NavLink>
    </div>
    </>)
}
export default ProductHeaderTab