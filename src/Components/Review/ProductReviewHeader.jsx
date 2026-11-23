import {useState, useContext} from "react";
import { IoMdSearch } from "react-icons/io";
import FilterDropdown from "../Orders/FilterDropdown";
import ColumnDropdown from "../Orders/ColumnDropdown";
import { ProductReviewContext } from "../../Context/ReviewContext";
import { FaPlus } from "react-icons/fa6";
import "../../Styles/review.scss";
import "../../Styles/common.scss";
import { filterReviewData } from "../../Data/filterData";
import DynamicFilters from "../Orders/DynamicFilters";
import { IoMdDownload } from "react-icons/io";
import { handleExport } from "../../Utils/exportCsv";
import { filterReviewInputData } from "../../Data/filterInputData";

function ProductReviewHeader(){
       
        const {reviewFilters, 
               handleToggleFilter, 
               reviewFilterValue,
               setReviewFilterValue,
               reviewColumn, 
               handleToggleResetButton, 
               handleToggleReviewColumn,
               filterProductReviewData, setInputSearch } = useContext(ProductReviewContext)
     
    
        const [openDropDownMenu, setOpenDropDownMenu] = useState({
               AddFilter : false,
               Column: false,
               })
    
        function handleClick(value){
            setOpenDropDownMenu((prev)=>({
                   ...prev,
                [value]: !prev[value]
            }))
        }
       
    return(<>
      <div className="product-review-header">
           <div className="left-review-container">
            <div className="input-grp">
                <input type="text" onChange={(e)=>setInputSearch(e.target.value)} 
                    placeholder="Search..." name="input" className="input-field"/>
                    <IoMdSearch className="icon" size={20}/>
            </div>
             
                <DynamicFilters handleToggleFilter={handleToggleFilter}
                filterInputData={filterReviewInputData} filters={reviewFilters} filterValue={reviewFilterValue} setFilterValue={setReviewFilterValue}/> 
           </div>
           <div className="right-review-container">
                <FilterDropdown openDropDownMenu={openDropDownMenu} handleClick={handleClick} 
                filters={reviewFilters} handleToggleFilter={handleToggleFilter} filterData={filterReviewData}/>

            <span><span className="create-btn"><FaPlus/>CREATE</span> </span>
                <ColumnDropdown openDropDownMenu={openDropDownMenu} handleClick={handleClick}
                column={reviewColumn} handleToggleColumn={handleToggleReviewColumn} handleResetButton={handleToggleResetButton}/>

              <span onClick={()=>handleExport(filterProductReviewData)}><IoMdDownload size={22} className="right-icon"/><p className="text">EXPORT</p></span>
           </div>
      </div>
    </>)
}

export default ProductReviewHeader