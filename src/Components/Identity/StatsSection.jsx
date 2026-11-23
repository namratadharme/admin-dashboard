import {useState, useContext} from "react";
import "../../Styles/identity.scss";
import "../../Styles/common.scss";
import IdentityPage from "../../Pages/Orders/IdentityPage";
import { ProductContext } from "../../Context/ProductContext";

function StatsSection({identityData}){
      const [selectValue, setSelectValue] = useState({
        segments: identityData.segments || "",
        news: identityData.news || "",
   
      });
     const {setIsDirty} = useContext(ProductContext)

      function handleChange(e) {
       const { name, value } = e.target;
        setSelectValue((prev) => ({
          ...prev,
         [name]: value,
        }));
         setIsDirty(true)
  }

    return(<>
    <div className="stats-sec">
        <h4>Stats Section</h4>
     
        <div className="identity-input-group">
            <label className="stats-label">Segment</label>
            <select name="news" value={selectValue.news} className="select-section" onChange={handleChange}>
                <option>Complusive</option>
                <option>Collector</option>
                <option>Ordered once</option>
                <option>Regular</option>
                <option>Returns</option>
                <option>Reviewer</option>
            </select>
        </div>
        <div className="identity-input-group">
            <label className="stats-label">Has Newsletter</label>
            <select name="segments" value={selectValue.segments} className="select-section" onChange={handleChange}>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
     
    </div>
    </>)
}

export default StatsSection