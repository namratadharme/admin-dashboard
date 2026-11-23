import React, { useState, useContext } from "react";
import "../../Styles/identity.scss";
import { ProductContext } from "../../Context/ProductContext";
import "../../Styles/common.scss";

function IdentitySection({identityData}) {
  
 
       function formatBirthday(date) {
       if (!date) return "";

      const [month, day, year] = date.split("/");

      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      }
  const [input, setInput] = useState({
    firstName: identityData.firstName || "",
    lastName: identityData.lastName || "",
    email: identityData.email || "",
    birthday: formatBirthday(identityData.birthday),
  });
  const {setIsDirty} = useContext(ProductContext)

  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsDirty(true)
  }


  return (
    <div className="identity-section">

      <h4>Identity</h4>

      <div className="identity-grp">
        <div className="identity-input-group">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={input.firstName}
            onChange={handleChange}
            className="identity-input-field"
          />
        </div>

        <div className="identity-input-group">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleChange}
            className="identity-input-field"
          />
        </div>
      </div>

      <div className="identity-input-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
          className="identity-input-field"
        />
      </div>

      <div className="identity-input-group">
        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          value={input.birthday}
          onChange={handleChange}
          className="identity-input-field"
        />
      </div>

    </div>
  );
}

export default IdentitySection;