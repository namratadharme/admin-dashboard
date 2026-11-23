import React from "react";
import { UserProfileContext } from "../Context/ProfileContext";
import { useContext, useState } from "react";
import "../Styles/userProfile.scss";
import femaleImg from "../../src/assets/female.jpeg";
import maleImg from "../../src/assets/male.jpeg";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";

function UserProfile(){
   const [showDrodown, setShowDropdown] = useState(false)
   const {profileData} = useContext(UserProfileContext)

   const navigate = useNavigate()

     function handleLogout(){
        localStorage.removeItem("token")
        navigate("/", {replace: true})
     }

    return(<>
       <div className="user-data">
         <div className="user-profile">
         <img
            src={profileData.gender === "female" ? femaleImg : maleImg}
           alt="Profile" loading="lazy"
           />
</div>
            <div className="user-detail" onClick={()=>setShowDropdown((prev)=>!prev)}>{profileData.userName}</div>
            {
               showDrodown && <div className="profile-dropdown">
                  <button onClick={handleLogout} className="log-out"><RiLogoutCircleLine size={16}/>Logout</button>
               </div>
            }
       </div>
    </>)
}

export default UserProfile