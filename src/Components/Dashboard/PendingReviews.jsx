import { useContext } from "react";
import { ProductReviewContext } from "../../Context/ReviewContext";
import { MdStars } from "react-icons/md";
import StatsCard from "./StatsCard";
import ShowMoreList from "./ShowMoreList";
import { useNavigate } from "react-router-dom";
import { statsDataReviewOrder } from "../../Data/statsData";

function PendingReviews(){
      const navigate = useNavigate()
      const {reviewData} = useContext(ProductReviewContext)

      const pendingReview = reviewData.filter((review)=> review.status === "pending")

    return(<>
     <div className="pending-reviews-card">
         <div>
          {
            statsDataReviewOrder.slice(0, 1).map((item)=>(
                <StatsCard 
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value} 
                borderRadius={true} 
                />
           ))}
         </div>
       <ShowMoreList
       data={pendingReview}
       initialCount={10}
       renderItem={(review) => (
       <div className="pending-review-customer-items" key={review.id} onClick={()=>navigate("/review")}>
      <div className="img"><img src={review.customerAvatar} alt={review.customer} /></div>
      <div>
        <span className="review">{Array.from({length: review.rating}, (_,index)=><MdStars key={index}/>)}</span>
      <p className="comment-text">{review.comment}</p>
      </div>
    </div>
  )}
/>
     </div>
    </>)
}

export default PendingReviews