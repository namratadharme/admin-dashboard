import {useContext} from "react";
import { TbColumns3Filled } from "react-icons/tb";
import { OrderContext } from "../../Context/OrderContext";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import "../../Styles/invoice.scss";
import { CustomerContext } from "../../Context/CustomerContext";


function CustomerColumnDropdown({openDropDownMenu, handleClick}){

 const {customerColumnData, handleResetCustomerData, handleToggleCustomerData} = useContext(CustomerContext)

    return (<>
       <div className="invoice-column-dropdown">
                 <span onClick={()=>handleClick("Column")} 
                 className="right-customer-data"><TbColumns3Filled className="customer-icon"/><p className="text">COLUMNS</p></span> 
                 <div className="dropdown-wrapper">
                       {openDropDownMenu.Column && <div className="dropdown">
                        <input type="text" placeholder="Search Column"/>
                        {customerColumnData?.map((item)=>(
                            <div className="gap" key={item.id}>
                             {item.visible === true ? <BsToggle2On className="toggle-on"
                              onClick={()=>handleToggleCustomerData(item.id)}/> : 
                             <BsToggle2Off className="toggle-off" size={23} 
                             onClick={()=>handleToggleCustomerData(item.id)}/>}{item.label}</div>
                        ))}
                        <button className="invoice-btn" onClick={handleResetCustomerData}>Reset</button>
                      </div>}
                 </div>
           </div>     
    </>)
}

export default CustomerColumnDropdown;