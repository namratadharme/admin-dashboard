import {useContext, useState, useEffect} from "react";
import { ProductReviewContext } from "../../Context/ReviewContext";
import { IoMdClose } from "react-icons/io";
import { MdStars } from "react-icons/md"
import Button from "../Button/Button";
import "../../Styles/reviewDetail.scss";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function ReviewDetail(){
      const [input, setInput] = useState({
        comment: ""
      })
    
      
      const navigate = useNavigate()

      const [isChanged, setIsChanged] = useState(false)

      const {selectReview, setSelectReview, updatedReviewData,   deleteReviewData, showToast} = useContext(ProductReviewContext)

   
      useEffect(()=>{
        if(selectReview){
          setInput({
            comment: selectReview.comment
          })
        }
        setIsChanged(false)
      },[selectReview])

      function handleChange(e){
        
           setInput((prev)=>({
            ...prev,
            [e.target.name]: e.target.value
           }))
           setIsChanged(e.target.value !== selectReview.comment)
           
      }

      function handleSave(){
        if(!isChanged) return false

        const updatedReview = {
          ...selectReview,
          comment: input.comment
        }
        updatedReviewData(updatedReview)
        setIsChanged(false)
        showToast("message saved successfully")
      }

      function handleDelete(){
           deleteReviewData(selectReview)
           showToast("message deleted successfully")
      }
        
    return(<>
      <div className={`review-detail ${ selectReview ? "open" : ""}`}>
            <div className="review-detail-header">
                 <h2>Review Detail</h2>
                 <button onClick={()=>setSelectReview(null)} className="close-btn">
                    <IoMdClose className="review-detail-icon"/>
                 </button>
            </div>
            <div className="review-detail-content">
                <div className="detail-row">
                      <div>
                         <span>Customer</span>
                          <span>
                            <img src={selectReview?.customerAvatar} 
                            alt={selectReview?.customer}/>
                            <span onClick={()=>navigate(`/identity/${selectReview?.customerId}`)} 
                            className="customer-product-data">
                            {selectReview?.customerName}
                           </span>
                          </span>
                      </div>
                         <div>
                        <label>Date</label>
                       <span>{selectReview?.date}</span>
                  </div> 
                </div>
              
              <div>
                <div className="detail-row">
                     <div className="column">
                           <span>Product</span>
                           <span onClick={()=>navigate(`/products/${selectReview?.productId}`)}
                            className="customer-product-data">{selectReview?.productName}</span>
                      </div>
                
                    <div className="rating">
                         <span>Rating</span>
                         <label className="star">{Array.from({length: selectReview?.rating}, (_, index) =>
                         <MdStars key={index}/>)}</label>
                   </div>
                </div>
             
              </div>
            </div>
                     <div className="comment">
                         <span>Comment</span>
                         <textarea type="text" name="comment" value={input.comment} 
                         className="input-text" onChange={handleChange}/>
                    </div>
            <div className="grp-btn">
       
                   <Button className="save-btn" onClick={handleSave} disabled={!isChanged}><FaSave/>Save</Button>
                   <Button className="delete-btn"  onClick={handleDelete}><MdDelete/>Delete</Button>
            </div>
    
      </div>
    </>)
}

export default ReviewDetail