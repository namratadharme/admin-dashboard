import {useState} from "react";
import "../../Styles/poster.scss";
import "../../Styles/common.scss";
import { FaPlus } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { MdSort } from "react-icons/md";

function ProductHeader(){
    const [isDropdownShow, setIsDropdownShow] = useState(false)
    const [isFilterDropdown, setIsFilterDropdown] = useState(false)

    function handleDropdown(){
        setIsDropdownShow((prev)=>!prev)
    }

    function handleFilterDropdown(){
          setIsFilterDropdown((prev)=>!prev)
    }

    return(<>
    <div className="product-header">
        
        <div className="dropdown-wrapper"> 
            <div className="product-filter-container">
                 <IoFilter onClick={handleFilterDropdown} className="product-icon"/>
                  {isFilterDropdown && <div className="dropdown">
                     <span><input type="checkbox"></input>Category</span>
                     <span><input type="checkbox"></input>Min width</span>
                     <span><input type="checkbox"></input>Max width</span>
                     <span><input type="checkbox"></input>Min height</span>        
                     <span><input type="checkbox"></input>Max height</span>
                     <span><input type="checkbox"></input>Low Stock</span>
               </div>}
               </div>
              
                 <div className="product-title">
                       <MdSort onClick={handleDropdown} className="product-icon"/>
                    <div className="product-header-text">SORT BY REFERENCE ASCENDING <MdArrowDropDown size={15}/></div>
                         {isDropdownShow && <div className="dropdown">
                         <span>Reference descending</span>
                         <span>Sales ascending</span>
                         <span>Stock ascending</span>
                    </div>}
                 </div>
           
        </div>
      <span className="create-btn"><FaPlus className="product-icon"/>CREATE</span>
        <MdFileDownload size={20}/><span className="product-header-text">EXPORT</span>
    </div>
    </>)
}

export default ProductHeader