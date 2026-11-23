import React from "react";


function Button({children, onClick, disabled, className="", type="button"}){
    return (<>
    <div className="action-btn-grp flex">
         <button 
         type={type}
         className={`${className}`}
         onClick={onClick}
         disabled={disabled}
         >
        {children}
        </button>
    </div>
    </>)
}

export default Button