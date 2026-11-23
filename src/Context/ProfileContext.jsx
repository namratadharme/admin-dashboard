import  { useEffect, useState } from "react";
import { createContext } from "react";
import { fetchUserProfile } from "../Services/user.services";


export const UserProfileContext = createContext()

 const UserProfileProvider = ({children})=>{
   const [profileData, setProfileData] = useState([])
    
   useEffect(()=>{

      async function fetchProfile(){
            const userProfiledata = await fetchUserProfile()
             setProfileData(userProfiledata[0])
      }
     fetchProfile()
   },[])
  

 return (<>
 <UserProfileContext.Provider value={{profileData}}>
    {children}
 </UserProfileContext.Provider>
 </>)
}

export default UserProfileProvider
