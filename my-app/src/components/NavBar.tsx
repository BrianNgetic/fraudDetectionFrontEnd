import React from "react";
import logoImage from "../assets/blue-shield.jpg";
import profilePhoto from "../assets/profile-photo.png"
import  "./ComponentStyling.css";



export const NavBar: React.FC<{}> = () => {

    const imageHeight  : string  = '50px';
    const imageWidth  : string  = '50px';


    return (

            <div className="navBar">
                <div className = "logo-container">

                        <span className = "logo-icon"> <img src = {logoImage} alt = "a blue shield" height={imageHeight} width = {imageWidth} ></img> </span>
                        <span>
                            <span className = "logo-text" >Fraud</span>
                            <span className = "logo-text"  id = "Second-part-text">Watch</span>
                        </span>
                
                </div> 

                        <span>
                            <img src = {profilePhoto} alt = "default profile photo"  height={imageHeight} width = {imageWidth}></img>
                        </span>
                        


            </div>
        
    );
}