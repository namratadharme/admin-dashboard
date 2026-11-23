
import {useCallback, useState, useMemo} from "react";
import { createContext } from "react";

export const LayoutContext = createContext()

const LayoutProvider = ({children}) =>{
       const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
       const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    

       const handleSideBar = useCallback(()=>{
           if(window.innerWidth <= 768){
              setIsMobileSidebarOpen(true)
          }
          else{
              setIsSidebarCollapsed((prev)=>!prev)
          }
       },[])

       const contextValue = useMemo(()=>{
         return {isSidebarCollapsed, 
          setIsSidebarCollapsed, 
          isMobileSidebarOpen,
          setIsMobileSidebarOpen,
          handleSideBar}
       },[isSidebarCollapsed, isMobileSidebarOpen, handleSideBar])
    
    
       return (
       <LayoutContext.Provider value={contextValue}>
        {children}
       </LayoutContext.Provider>)
}

export default LayoutProvider