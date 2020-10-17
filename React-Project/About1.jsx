
import React from "react";
import Common from "./Common";


function About(){
    return(
        <>
             
             <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

        

              <h1 style={{color:"black" ,marginLeft:"250px" , fontWeight:"bold" , fontFamily:"Arial, Helvetica, sans-serif"}}>SELL YOUR VALUABLE PRODUCTS HERE</h1>
          
<form action="/action_page.php">

     
  

   <div className="wrapper" >
   <div className="form-wrapper" style={{marginTop:"-220px" , height:"200px" ,marginLeft:"-90px" }}>
   
  
  
  <input type="file" id="myfile" name="myfile" multiple className="btn-btn-success"/><br></br>
  
  <button type="submit" class="btn btn-success" >Success</button>
  </div>
  </div>



      
  
</form>
        
        </>
    );
}
export default About;
