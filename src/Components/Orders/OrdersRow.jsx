import {useContext} from "react";
import "../../Styles/orders.scss";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../Context/OrderContext";

function OrderRow({item}){
  const {column} = useContext(OrderContext)
  const navigate = useNavigate()


    return(<>
   <tr onClick={() => navigate(`/orders/${item.id}`)} className="table-row">

        <td className="checkbox-cell">
          <div>
               <input type="checkbox" className="input"/>
            <span>{item.date}</span>
          </div>
         
        </td>
          {
            column.filter((col)=>col.visible && col.id !== "date")
            .map((col)=>{
                if(col.id === "customer" ){
                  return (<td key={col.id}>
                      <div className="user-info">
                      <img src={item.avatar} alt={item.firstName} className="img"/>
                       <span className="user-name">{item.firstName} {item.lastName}</span>
                  </div>
                  </td> )
                }
              return <td key={col.id}>{item[col.id]}</td>
            })
          }
      </tr>

    </>)
}

export default OrderRow