import {useState, useContext} from "react";
import { productFilterData, stocksFilterData, salesFilterData } from "../../Data/productFilterData";
import "../../Styles/common.scss";
import "../../Styles/poster.scss";
import { MdAttachMoney } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { ProductContext } from "../../Context/ProductContext";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

function ProductFilters(){
    const {setSelectedCategory, input,setInput} = useContext(ProductContext)
  

       function handleChange(e){
          setInput(e.target.value)
       }

    return(<>
    <div className="product-filter flex column">
        <input type="text" placeholder="Search" value={input} onChange={handleChange} className="input"/>

        <div className="filter-queries"><FaRegBookmark size={18}/>SAVED QUERIES<FiPlusCircle size={20}/></div>
        <div className="filter-card">
        <span><MdAttachMoney className="icon"/> <label className="filter-text">Sales</label></span>
              <div className="flter-data">
               {
               salesFilterData.map((item, index)=>(
                  <div key={index}>{item}</div>
               ))
              }
              </div>
        </div>
       
       <div className="filter-card"> 
         <span><FaChartBar className="icon"/><label className="filter-text">Stocks</label></span>
             <div className="filter-data">
               {
               stocksFilterData.map((item, index)=>(
                  <div key={index}>{item}</div>
               ))
             }
             </div>
       </div>
       <div className="filter-card">
         <span><FaTag size={21} className="icon"/><label className="filter-text">Categories</label></span>
             <div>
               {
               productFilterData.map((item, index)=>(
                  <div key={index} onClick={()=>setSelectedCategory(item)}>{item}</div>
               ))
             }
             </div>
       </div>
       
    </div>
    </>)
}

export default ProductFilters