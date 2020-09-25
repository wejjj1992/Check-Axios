import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function UserList() {
  const [listOfUSer , setlistOfUser ] = useState([]);
 
 useEffect(() => {
   
   const fetchData = async () => {
     const result = await axios.get( "https://jsonplaceholder.typicode.com/users");
     setlistOfUser(result.data);
     
   };
   
   fetchData();
 }, 
 
 []);

console.log("listOfUser= ",listOfUSer);
 
 return (
    
 
   


    <ul style={{marginTop:'4%',display:'flex' , flexDirection:'column',alignItems:'center'  ,paddingTop:'30px',paddingBottom:'30px' }}>
   
   
   
   
     <li style={ {width:'100%',display:'flex' , justifyContent:'space-around'  ,fontSize:'50px',marginBottom:'25px' }} > 
     
      <div style={{width:'200px',color:"blue"}}>User</div>
      <div style={{width:'150px',color:"blue"}}>username</div>
      <div style={{width:'150px',color:"blue"}}>email </div>
      <div style={{width:'200px',color:"blue"}}>phone</div>
     </li>
    

 
 
     {listOfUSer.map(user => (
     
     <li key={user.id}  style={{ width:'100%',display:'flex' , justifyContent:'space-around' ,marginBottom:'15px'}}>
      
      
      <div style={{width:'200px',color:"red"}}>
      {user.name}
      </div>
 
      <div style={{width:'150px',color:"red"}}>
      {user.username}
      </div>
      <div style={{width:'150px',color:"red"}}>
      {user.email}
      </div>
      <div style={{width:'200px',color:"red"}}>
      {user.phone}
      </div>
    </li>))
}

     
    </ul>
    
 

 
    
  );

 }
 export default UserList;