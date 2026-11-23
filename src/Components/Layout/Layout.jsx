import {useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../../Styles/layout.scss";
import { Outlet } from "react-router-dom";
import { LayoutContext } from "../../Context/LayoutContext";
import { useParams } from "react-router-dom";
import { orderData } from "../../Data/orderData";

function Layout(){
     const {id} = useParams();
     const location = useLocation()

        const order = orderData.find(
      (item)=> item.id === Number(id)
       );

    const titles = {
      "/": "Dashboard",
      "/invoices": "Invoices",
      "/orders": "Orders",
      "/customers": "Customers",
      "/products": "Products",
      "/review": "Review",
      "/segment": "Segments",
      "/categories": "Categories",
   };

const pathParts = location.pathname.split("/").filter(Boolean);

const mainPage = `/${pathParts[0] || ""}`;
const subPage = pathParts[1] || "";

const pageTitle = location.pathname.includes("/orders/")
   ? `Order ${order?.reference || ""}`
   : `${titles[mainPage] || ""} ${subPage}`.trim();

   const {isSidebarCollapsed, isMobileSidebarOpen} = useContext(LayoutContext)

    return(<>
    <div className={`content ${isMobileSidebarOpen ? "mobile-sidebar-open" : ""}`}>
        <div className="header">
            <Header pageTitle={pageTitle} subPage={subPage}/>
        </div>

         <main className="dashboard-content">
            <div className={`side-bar-container ${isSidebarCollapsed ? "collapse" : "expand"}
            ${isMobileSidebarOpen ? "mobile-open" : ""}`}><Sidebar /></div>
            <div className="main-content-container"><Outlet/></div>
         </main>
 
    </div>
    
    
    </>)
}

export default Layout