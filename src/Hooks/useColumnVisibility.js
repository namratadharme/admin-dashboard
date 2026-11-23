import React from "react";
import {useState, useCallback} from "react";

export function useColumnVisibility(initialColumn){
    const [column, setColumn] = useState(initialColumn)


    const handleToggleColumn = useCallback((id) =>{
          setColumn((prev)=>{
               return prev.map((item)=>
                item.id === id ? 
                  {
                   ...item,
                   visible: !item.visible,
                  }
                : item)
          })
    },[])

    const handleToggleReset = useCallback(() =>{
         setColumn((prev)=>{
            return prev.map((item)=>
              {
                
                if(
                    item.id === "totalExTaxes" ||
                    item.id === "deliveryFees" ||
                    item.id === "taxes"
                ){
                    return {
                        ...item,
                        visible: false,
                    }
                }
                return{
                    ...item,
                    visible: true,
                }
              })
         }
          )
    },[])

    return {
     column,
     handleToggleColumn,
     handleToggleReset,
    }
}