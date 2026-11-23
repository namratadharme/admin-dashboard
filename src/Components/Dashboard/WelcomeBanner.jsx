import React from "react";
import "../../Styles/welcomeBanner.scss";
import { MdHomeFilled,MdMessage } from "react-icons/md";
import { TbDirectionHorizontal } from "react-icons/tb"

function WelcomeBanner(){
    return(<>
    <div className="top-content">
       
                    <div className="welcome-banner">
                         <h1>Welcome to the react-admin e-commerce demo</h1>
                          <p className="para">
                            This is the admin of an imaginary poster shop.
                            Feel free to explore and modify the data - 
                            <br></br>it's local to your computer, 
                            and will reset each time you reload.
                          </p>
                         <div className="button-group">
                            <button><MdHomeFilled size={23}/>REACT-ADMIN SITE</button> 
                            <button><TbDirectionHorizontal size={30}/>SOURCE FOR THIS DEMO</button>   
                        </div>
                    </div>
                   <div className="welcome-img">
                    <img
                     src="/bannerImg.svg"
                     alt="Welcome illustration"
                     width="250px"
                     height="150px"
                     loading="eager"
                     fetchPriority="high"
                    />
                   </div>
               
         
    </div>
    </>)
}

export default WelcomeBanner