function Profile(props) {
    console.log(props.name);
    return ( 
        
        <div className = "Profile" >

        Hello <br></br>
          
         {props.name}
        <br></br>

        Hacking Is Free

        
        </div>
    );

}


export default Profile;