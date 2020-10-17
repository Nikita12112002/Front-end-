import React from "react";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {NavLink} from "react-router-dom";
import  { useState } from "react";



function Registration(){

  const [firstnameErr,setfirstnameErr]=useState({});
  const [lastnameErr,setlastnameErr]=useState({});


  const[data , setdata] =useState({
    fisrtname :"",
    lastname:"",
    email :"",
    password :"",
    phonenumber:"",
    confirmPassword:"",
    

});

function formSubmit(e){

    e.preventDefault();
   /* alert(`My name is ${data.firstname}. My phone number is ${data.phonenumber}. email is ${data.Email}`);*/
      const isValid =formValidation();
      if (isValid)
      {
        setdata.firstname="";
        setdata.lastname="";
        alert('sucessfully registered');

      }  
    else
      alert('check your fields');
    
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

    const formValidation =() =>
    {
      const firstnameErr ={};
      const lastnameErr ={};
      let isValid =true;

      if(data.firstname.length<3)
      {
        firstnameErr.firstnameShort="first name is too short";
        setfirstnameErr(firstnameErr);
        isValid=false;
      }

      

      if(data.lastname.length>10)
      {
        lastnameErr.lastnameLong="last name is too long";
        setlastnameErr(lastnameErr);
        isValid=false;
      }

     
     
     
     

      return isValid;

      
    }
    return(
    <>



   <div className="wrapper" >
     <div className="form-wrapper">

     <h1>Create Account</h1>

     <form  onSubmit={formSubmit}>
       <div className="firstName">
        
         <div class="input-group flex-nowrap">
         <input type="text" 
         className="form-control"
          placeholder="First Name" 
          onChange={InputEvent}
          name="firstname"
          value={data.firstname}
          required
          
          />

          {Object.keys(firstnameErr).map((key)=>{
            return <div style={{color:"red"}}>{firstnameErr[key]}</div>
          })}

</div>

       </div>

       <br></br>


       <div className="LastName">
       
         <div class="input-group flex-nowrap">
         <input type="text" 
         className="form-control"
          placeholder="Last Name" 
          onChange={InputEvent}
          name="lastname"
          value={data.lastname}
          
          required
          />

       </div>
       </div>

       <br></br>

       {Object.keys(lastnameErr).map((key)=>{
            return <div style={{color:"red"}}>{lastnameErr[key]}</div>
          })}


       <div className="Email">
        

         <div class="input-group flex-nowrap">
         <input type="email" 
         className="form-control"
          placeholder=" Email" 
          onChange={InputEvent}
          name="Email"
          value={data.Email}
          required
          
          />
          </div>

       </div>

       <br></br>



       <div className="password">
        
         <div class="input-group flex-nowrap">
         <input type="password" 
         className="form-control"
          placeholder="Password " 
          value={data.password}
          name="password"
          onChange={InputEvent}
          aria-label="Password" 
          aria-describedby="addon-wrapping"
          required />

{Object.keys(lastnameErr).map((key)=>{
            return <div style={{color:"red"}}>{lastnameErr[key]}</div>
          })}

        </div>
         
          </div>

        


        <br></br>
          
       <div className="password">
        
        <div class="input-group flex-nowrap">
        <input type="password" 
        className="form-control"
         placeholder="Confirm-Password " 
         value={data.confirmPassword}
         name="confirmPassword"
         onChange={InputEvent}
         aria-label="Password" 
         aria-describedby="addon-wrapping"
         required />

{Object.keys(lastnameErr).map((key)=>{
            return <div style={{color:"red"}}>{lastnameErr[key]}</div>
          })}

       </div>
        
         </div>


          <br></br>

      
      
        
        <div class="input-group flex-nowrap">
        <input type="phonenumber" 
        className="form-control"
         placeholder="Phonenumber " 
         value={data.phonenumber}
         name="phonenumber"
         onChange={InputEvent}
         aria-label="Phonenumber" 
         aria-describedby="addon-wrapping"
         required />

       </div>
        
        
         <br></br>
         
          <div className="col-12 text-center">
         
         <button className="btn btn-outline-danger " type="login" style={{width:"300px"}}>Create Account</button>
         </div>
          <NavLink exact activeClassName="active_class"  to="/Login" style={{textAlign:"center" , marginLeft:"70px"}}>Already Have an Account?</NavLink>

     </form>

     </div>
   </div>
    

   
  
    
    </>
    );
  }
  
  export default Registration;

  