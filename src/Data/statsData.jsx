  import {MdMessage } from "react-icons/md";
import { FaCartShopping,FaDollarSign  } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
  
  
  export  const statsData = [
        {
           title: "Monthly Revenue",
           value: `${Math.floor(Math.random()*100000)}`,
            icon:  <FaDollarSign size={28}/>,
        },
          {
           title: "New Orders",
           value: `${Math.floor(Math.random()*100)}`,
            icon:    <FaCartShopping size={28}/>
        },
       

]

export const statsDataReviewOrder = [
       {
           title: "Pending Reviews",
           value: `${Math.floor(Math.random()*100)}`,
            icon:    <MdMessage  size={28}/>
        },
         {
           title: "New Customers",
           value: `${Math.floor(Math.random()*100)}`,
            icon:    <IoMdPersonAdd size={28}/>
        },
]