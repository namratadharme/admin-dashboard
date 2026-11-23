
import { FaPlus } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import "../../Styles/common.scss";
import "../../Styles/customer.scss";
import CustomerColumnDropdown from "./CustomerColumnDropdown";
import { useState } from "react";

function CustomerHeader(){
        const [openDropDownMenu, setOpenDropDownMenu] = useState({
                Column: false,
            })
            function handleClick(value){
                setOpenDropDownMenu((prev)=>({
                       ...prev,
                    [value]: !prev[value]
                }))
            }
    return(<>
    <div className="customer-header">
           <span className="right-customer-data"><FaPlus className="customer-icon"/><span className="create-btn">CREATE</span></span>
           <CustomerColumnDropdown openDropDownMenu={openDropDownMenu} handleClick={handleClick}/>
          <span className="right-customer-data"><MdFileDownload className="customer-icon"/><span className="export">EXPORT</span></span>
    </div>
    </>)
}

export default CustomerHeader