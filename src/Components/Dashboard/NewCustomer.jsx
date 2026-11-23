import { useContext } from "react";
import StatsCard from "./StatsCard";
import { statsData } from "../../Data/statsData";
import { CustomerContext } from "../../Context/CustomerContext";
import ShowMoreList from "./ShowMoreList";
import { useNavigate } from "react-router-dom";
import { statsDataReviewOrder } from "../../Data/statsData";


function NewCustomers(){
      const {customerData} = useContext(CustomerContext)
      const navigate = useNavigate()
      
      const handleNewCustomer = (id) =>{
        navigate(`/identity/${id}`);
      }

    return(<>
     <div className="new-customers">
        <div>
          {
            statsDataReviewOrder.slice(1, 2).map((item)=>(
                <StatsCard 
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value} 
                borderRadius
                />
           )
        
           )
           }
         </div>
         <div className="stats-section">
           {statsData.slice(3, 4).map((item)=>(
                <StatsCard 
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value} 
                borderRadius={true} 
                />
           ))}
          </div>
       
             <ShowMoreList
              data={customerData}
              initialCount={10}
              renderItem={(data) => (
              <div className="pending-review-customer-items" 
              key={data.customerId} onClick={()=>handleNewCustomer(data.customerId)}>
             <div className="img"><img src={data.avatar} alt={data.firstName} /></div>
             <p>{data.firstName}{data.lastName}</p>
           </div>)}/>
         
             
     </div>
    </>)
}

export default NewCustomers