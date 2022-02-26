import React from "react";
import '../stylesheet/style.css';
import  '../assets/man.png';

function Profile() {
    return( 
    <div class="container">
    <div class="profileImg">
    <img src={require('./man.png')} alt='' />

</div>   
    <div class="inputCont">
        <span>Name:</span>
        <input type="text"/>
    
    </div>
    <div class="inputCont">
        <span>Stack:</span>
        <input type="text"/>
    
    </div>
    <div class="inputCont">
        <span>Contact:</span>
        <input type="number"/>
    
    </div>
    
  <div class="btn"> 
    <button>Toggle Backgrond</button>
  </div>
  <assets/>

 </div>
    )
    


}

export default Profile;