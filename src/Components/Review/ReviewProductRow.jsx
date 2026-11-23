import { useContext } from "react";
import { ProductReviewContext } from "../../Context/ReviewContext";
import "../../Styles/table.scss";
import { MdStars } from "react-icons/md";
import { FaPen } from "react-icons/fa6";

function ReviewProductRow({item}) {
  const {reviewColumn, setSelectReview, selectedProductId} = useContext(ProductReviewContext);
   
  return (
    <tr className="review-table-row" onClick={()=>setSelectReview(item)}>
      <td className="checkbox-cell">
        <div>
             <input type="checkbox" name="checkbox" className="input"/>
              <span>{item.date}</span>
        </div>    
      </td>
  

      {(reviewColumn || [])
        .filter((col) => col.visible && col.id !== "date")
        .map((col) => {
          if (col.id === "customer") {
           
            return (
              <td key={col.id}>
                <div className="user-info">
                  <img src={item.customerAvatar} alt={item.customerAvatar} className="img"/>
                  <span className="user-name">
                   {item.customerName}
                 </span>
                </div>
              </td>
            );
          }
            if (col.id === "rating") {
              return (
            <td key={col.id}>
           <div className="rating">
                   {Array.from({ length: item.rating }, (_, index) => (
                   <MdStars key={index}/>
              ))}
          </div>
          </td>
           );
           }
           if (col.id === "comment") {
           
           return (
           <td key={col.id} className="comment-cell">
            {item.comment}
           </td>
            );
           }
            if (col.id === "product") {
               
           return (
           <td key={col.id} className="productName">
            {item.productName}
           </td>
            );
           }

          return <td key={col.id}>{item[col.id]}</td>;
        })}
        {
          selectedProductId ?(
            <td>
                <button className="edit" onClick={(e)=>{
                  e.stopPropagation(),
                  console.log("edit review", item)
                }}><FaPen />EDIT</button>
            </td>
          ):""
        }
    </tr>
  );
}

export default ReviewProductRow;