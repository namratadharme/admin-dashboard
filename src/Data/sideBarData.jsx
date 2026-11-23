import { MdDashboard } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdOutlinePhotoLibrary } from "react-icons/md";

import { MdOutlineReceiptLong } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { RiPriceTag3Line } from "react-icons/ri";

export const sideBarData = [
    {
    title: "Dashboard",
    icon: <MdDashboard size={23}/>,
    path: "/dashboard"
},
{
    title: "Sales",
    icon: <FaDollarSign  size={23}/>,
    children: [
        {
        title: "Orders",
        icon: <FaDollarSign  size={19}/>,
        path: "/orders"
       },
        {
        title: "Invoices",
        icon: <MdOutlineReceiptLong size={20}/>,
        path: "/invoices"
       },
]
},
{
    title: "Catalog",
    icon: <MdOutlinePhotoLibrary  size={23}/> ,
    children: [
        {
        title: "Posters",
        icon: <MdOutlinePhotoLibrary  size={20}/>,
        path: "/products"
       },
        {
        title: "Categories",
        icon: <BiCategory size={20}/>,
        path: "/categories"
       },
]
},
{
    title: "Customers",
    icon:<MdPeople  size={23}/>,
  
    children: [
        {
        title: "Customers",
        icon: <MdPeople  size={19}/>,
        path: "/customers"
       },
        {
        title: "Segment",
        icon: <RiPriceTag3Line size={20}/>,
        path: "/segment"
       },
]
},
{
    title: "Review",
    icon: <MdMessage  size={23}/>,
    path: "/review",
}
]