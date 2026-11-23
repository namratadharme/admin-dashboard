import {useContext} from "react";
import { CustomerContext } from "../../Context/CustomerContext";
import "../../Styles/table.scss";
import { FaCheck, FaTimes } from "react-icons/fa";

function CustomerTableRow({ item }) {
  const { customerColumnData } = useContext(CustomerContext);

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>

      {customerColumnData
        .filter((col) => col.visible)
        .map((col) => {
          if (col.id === "name") {
            return (
              <td key={col.id}>
                <span className="user-info">
                  <img src={item.avatar} alt={item.firstName} className="img"/>
                  <span className="user-name">
                    {item.firstName} {item.lastName}
                  </span>
                </span>
              </td>
            );
          }
          if(col.id === "news"){
             return (
              <td key={col.id}>
                 {item.news ? <FaCheck color="gray"/> : <FaTimes color="gray"/>}
              </td>
            );
          }

          return <td key={col.id} className="table-cell">{item[col.id]}</td>;
        })}
    </tr>
  );
}
export default CustomerTableRow