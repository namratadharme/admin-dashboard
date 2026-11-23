import React, {useState} from "react";
import "../../Styles/statsSection.scss";

function ShowMoreList({
    data,
    initialCount = 10,
    renderItem
}){
   const [showAll, setShowAll] = useState(false)

   const visibleData = showAll ? data : data.slice(0, initialCount)


    return(<>
        <div className="see-more-container">{visibleData.map((item, index)=>
        renderItem(item, index))}

        {
                data.length > initialCount && (
                <button className="see-more-button"
                onClick={()=> setShowAll(!showAll)}>
                {showAll ? "Show Less" : "See More"}
                </button>
            )
        }</div>
    </>)
}

export default ShowMoreList