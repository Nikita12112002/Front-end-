
import React from "react";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {NavLink} from "react-router-dom";
import  { useState } from "react";



   function Login()
   {


    const[data , setdata] =useState({
     
      email :"",
      password :"",
     
      
  
  });
  
  function formSubmit(e){
  
      e.preventDefault();
      alert(` You are logged in `);
          
      
  };
  
  function InputEvent(event){
  const name=event.target.name;
  const value =event.target.value;
  
  setdata((preVal) =>{
      return{
          ...preVal,
          [name]:value,
      };
  }
  );
  
  };
     return(

      <>

          <form onSubmit={formSubmit}>  


     <h1 style={{ marginLeft:'550px', color:"green"}} > LOGIN | REGISTER </h1>
         <div style={{marginTop:"50px"  , width:'450px' ,marginLeft:'500px', height:"250px"}} >
       
         
       
             <div className="container">
                        
                        <div className="row">
                            
                            <div className="col-md-6 col-10 mx-auto">
       



                            <div class="input-group flex-nowrap">
                  <input type="email" 
                          className="form-control"
                         placeholder=" Email" 
                        onChange={InputEvent}
                       name="email"
                        value={data.email}
                          required
          
                        />
                          </div>


    
  
       
         <br></br>



         
         <div class="input-group flex-nowrap">
         
         
         
         <input type="password" className="form-control" 
         placeholder="Password"
         onChange={InputEvent}
         name="password"
         value={data.password}
         required
          />
         </div>
       
         <br></br>
       

         <span  id="basic-addon1"><CheckBoxOutlineBlankIcon/></span>
         
        <h6 style={{marginLeft:"20px", marginTop:"-30px"}}> <NavLink exact className="nav-link " to="/password">Forgot Password ?</NavLink>
       
       
       
        
        </h6>
        
       
         
         <div className="col-12 text-center">
         
         <button className="btn btn-outline-primary " type="login">Login</button>
         </div>
         </div>
         
         </div>
         </div>
         
         </div>
         </form>
       </>
       );


   }

   export default Login;
    