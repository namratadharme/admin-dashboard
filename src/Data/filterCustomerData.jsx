import {
  FaRegClock,      
  FaRegEnvelope,   
  FaTag,           
} from "react-icons/fa";

import { MdOutlinePaid } from "react-icons/md"; 

export const filters = [

   {
    key: "lastSeen",
    title: "LAST VISITED",
    icon: <FaRegClock size={20}/>,
    options: ["Today", "This week", "Last week", "This month","Last month", "Earlier"],
   },
   {
    key: "orders",
    title: "HAS ORDERED",
    icon: <MdOutlinePaid size={20}/>,
    options: ["Yes", "No"],
   },
   {
    key: "news",
    title: "Has Newsletter",
    icon:  <FaRegEnvelope size={20}/>,
    options: ["Yes", "No"],
   },
    {
    key: "segments",
    title: "SEGMENT",
    icon:     <FaTag size={20}/>,
    options: ["Compulsive", "Collector", "Ordered once", "Regular","Returns","Reviewer"],
  }
];