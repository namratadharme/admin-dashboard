import {useState, useContext} from "react";
import "../../Styles/sideBar.scss";
import { sideBarData } from "../../Data/sideBarData";
import { LayoutContext } from "../../Context/LayoutContext";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

function Sidebar(){
    const [openMenu, setOpenMenu] = useState({
        Sales: false,
        Catalog: false,
        Customers: false,
    })
   const {isSidebarCollapsed,isMobileSidebarOpen, setIsMobileSidebarOpen} = useContext(LayoutContext)

    function handleClick(value){
      setOpenMenu((prev)=>({
          ...prev,
          [value]: !prev[value]
      }))
    }

    return (<>
   
    <div className={`sideBar  ${isSidebarCollapsed ? "collapse" : "expand"}
                              ${isMobileSidebarOpen ? "mobile-open" : ""}`}>

      {sideBarData.map((item)=>(
        <div key={item.title} className="sidebar-menu">
               <div className="sidebar-item" onClick={() => {

                      if(item.children){
                      handleClick(item.title)
                     }

                  if(window.innerWidth <= 768 && item.title === "Dashboard"){
                   setIsMobileSidebarOpen(false)
                  }
                }}
                 >
                <label>
                  { 
                  item.children ? (openMenu[item.title] ? <MdKeyboardArrowDown size={25} /> : item.icon) : item.icon
                  }
                </label>
                    
                <span className="text">{item.children ? ( item.title) : (
                  <NavLink to={item.path} end>
                  {item.title}
                  </NavLink>)}</span>
               </div>
               {item.children && openMenu[item.title] && (
                <div className="sub-menu">
                  {item.children.map((child, childIndex)=>(
                    <div className="sub-menu-item" key={childIndex}>
                      <span>{child.icon}</span>
                      <span className="sub-text"><NavLink to={child.path} onClick={()=>{
                         if(window.innerWidth <= 768){
                        setIsMobileSidebarOpen(false)
                        }
                       }}>{child.title}</NavLink></span>
                    </div>
                  ))}
                </div>
               )}
      </div>))}
    
    </div>
    </>)
}
export default Sidebar