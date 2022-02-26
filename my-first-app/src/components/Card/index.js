import React from "react";
import './style.css'
import Image from '../../img_avatar.png'

 function Card(){
    return ( <div className="card">
    <img src={Image} alt="Avatar"/>
    <div className="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>)
}
 
export default Card