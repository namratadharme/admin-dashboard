import {useContext} from "react";
import { TbColumns3Filled } from "react-icons/tb";
import { columnData } from "../../Data/columnData";
import { OrderContext } from "../../Context/OrderContext";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import "../../Styles/orderHeader.scss";
import "../../Styles/common.scss";


function ColumnDropdown(
  {
    openDropDownMenu, 
    handleClick, 
    handleResetButton, 
    handleToggleColumn, 
    column
  }){

    return (<>
                 <span onClick={()=>handleClick("Column")}><TbColumns3Filled className="right-icon"/><p className="text">COLUMNS</p></span> 
                 <div className="dropdown-wrapper">
                       {openDropDownMenu.Column && <div className="dropdown column-width column-position">
                        <input type="text" placeholder="Search Column" className="dynamic-input"/>
                        {column.map((item)=>(
                            <div className="gap" key={item.id}>
                             {item.visible === true ? <BsToggle2On className="toggle-on" 
                              onClick={()=>handleToggleColumn(item.id)}/> : 
                             <BsToggle2Off className="toggle-off" size={23} onClick={()=>handleToggleColumn(item.id)}/>}{item.label}</div>
                        ))}
                        <button className="btn" onClick={handleResetButton}>Reset</button>
                      </div>}
                 </div>
                
    </>)
}

export default ColumnDropdown