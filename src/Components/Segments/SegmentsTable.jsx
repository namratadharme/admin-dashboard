import React from "react";
import { segmentData } from "../../Data/segmentData";
import "../../Styles/segment.scss";
import { IoPeople } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SegmentsTable(){
    const navigate = useNavigate()

    return(<>
  <div className="segments-table-wrapper">
    <table className="segments-table">
      <thead>
        <tr>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {segmentData.map((item) => (
          <tr key={item.id} onClick={()=>navigate(`/customers?segments=${item.name}`)}>
            <td>{item.name}</td>
            <td className="people-grp"><IoPeople />CUSTOMERS</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>
    </>)
}

export default SegmentsTable