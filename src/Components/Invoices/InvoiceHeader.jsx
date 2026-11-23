import {useState} from "react";
import InvoiceColumnDropdown from "./InvoiceColumnDropdown";
import "../../Styles/invoice.scss";
import InvoiceFilterDropdown from "./InvoiceFilterDropdown";
import "../../Styles/common.scss";
import { IoMdDownload } from "react-icons/io";

function InvoiceHeader() {
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
  return (
    <div className="invoice-header">

      <div className="invoice-date-filters">

        <div className="invoice-input-group">
          <label>Passed Since</label>
          <input type="date" className="invoice-input-field"/>
        </div>

        <div className="invoice-input-group">
          <label>Passed Before</label>
          <input type="date" className="invoice-input-field"/>
        </div>

      </div>

      <div className="invoice-right-content">
        <InvoiceFilterDropdown openDropDownMenu={openDropDownMenu} handleClick={handleClick}/>
        <InvoiceColumnDropdown openDropDownMenu={openDropDownMenu} handleClick={handleClick}/>
        <span><p className="text"><IoMdDownload className="right-icon"/>EXPORT</p></span>
      </div>

    </div>
  );
}

export default InvoiceHeader