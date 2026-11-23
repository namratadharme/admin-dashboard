import React from "react";
import "../../src/Styles/reviewDetail.scss";


function Toast({show, message}){

    if(!show) return 

    return (
        <div className="success-toast">
            {message}
        </div>
    )
}

export default Toast