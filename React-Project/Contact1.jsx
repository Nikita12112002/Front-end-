import React, { useState } from "react";

function Contact(){

    
        const[data , setdata] =useState({
            fullname :"",
            phonenumber:"",
            email :"",
            message :"",
            

        });

        function formSubmit(e){

            e.preventDefault();
            alert(`My name is ${data.fullname}. My phone number is ${data.phonenumber}. email is ${data.email},here is whta i want to say${data.message}`);
                
            
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
        <div className="my-3">
            <h1 className="text-center">
                CONTACT US
            
            </h1>
            </div>

            <div className="container">
                 
                 <div className="row">
                     
                     <div className="col-md-6 col-10 mx-auto">


                     <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
  </div>
  
  <br></br>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" name="phonenumber" value={data.phonenumber} onChange={InputEvent}  placeholder="Enter your Mobile number"/>
  </div>
  <br></br>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com"/>
  </div>
  
  <br></br>
  
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} ></textarea>
  </div>
  <br></br>

 <div className="col-12">
  <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>

                     </div>
                     </div>
                     </div>
                    
        </>
    );
}
export default Contact;