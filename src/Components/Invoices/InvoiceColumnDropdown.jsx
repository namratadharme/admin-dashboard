import {useContext} from "react";
import { TbColumns3Filled } from "react-icons/tb";
import { OrderContext } from "../../Context/OrderContext";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import "../../Styles/invoice.scss";



function InvoiceColumnDropdown({openDropDownMenu, handleClick}){

 const {handleInvoiceResetButton,handleToggleInvoiceColumn, invoiceColumn} = useContext(OrderContext)

    return (<>
       <div className="invoice-column-dropdown">
                 <span onClick={()=>handleClick("Column")}><TbColumns3Filled/><p className="text">COLUMNS</p></span> 
                 <div className="dropdown-wrapper">
                       {openDropDownMenu.Column && <div className="dropdown">
                        <input type="text" placeholder="Search Column"/>
                        {invoiceColumn.map((item)=>(
                            <div className="gap" key={item.id}>
                             {item.visible === true ? <BsToggle2On className="toggle-on"
                              onClick={()=>handleToggleInvoiceColumn(item.id)}/> : 
                             <BsToggle2Off className="toggle-off" size={23} onClick={()=>handleToggleInvoiceColumn(item.id)}/>}{item.label}</div>
                        ))}
                        <button className="invoice-btn" onClick={handleInvoiceResetButton}>Reset</button>
                      </div>}
                 </div>
           </div>     
    </>)
}

export default InvoiceColumnDropdown