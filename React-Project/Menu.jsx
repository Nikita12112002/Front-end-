import React from "react";
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
function Menu(){
    return(
       <>

       
<div className="container  " >



<nav className="navbar navbar-expand-lg navbar-light  " style={{color:"#F6CFC4  "}}>
  <NavLink className="navbar-brand  " to="/">  

  <h1 style={{fontSize:"60px" , color:"#5F1B7F "}}>2N</h1>
  
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     
   
    <input style={{width:"600px"}}type ="text" placeholder="SEARCH"/>

    
    
   
    



      <li className="nav-item active">
        <NavLink  className="nav-link sell" to="/"> <h5>Home</h5> <span className="sr-only">(current)</span></NavLink>
      </li>


      <li className="nav-item">
        <NavLink exact className="nav-link sell " to="/service"> <h5>Explore</h5> </NavLink>
      </li>
      

      <li className="nav-item">
        <NavLink exact className="nav-link sell" to="/contact"><h5>Contact</h5></NavLink>
      </li>

     

      <li className="nav-item">
        <NavLink exact className="nav-link sell" to="/Registration"><h5><AccountCircleIcon/></h5></NavLink>
      </li>

      <li className="nav-item">
        <NavLink exact className="nav-link sell " to="/Registration"> <ShoppingCartIcon/></NavLink>
      </li>
      
      
      <li className="nav-item">
        <NavLink exact className="nav-link  sell" to="/about">  <span style={{fontWeight:"bold" , fontSize:"20px", borderStyle:"solid", borderRadius:"50px",}}>SELL</span></NavLink>
      </li>
      
    </ul>
    
  </div>
</nav>


<div >

<nav >
<ol class="breadcrumb" style={{backgroundColor:"#ff5972"}}>

 

<div class="dropdown" style={{ marginLeft:"50px"}}>
  <button class="dropbtn">Living</button>
  <div class="dropdown-content">
    <NavLink to="/service" style={{float:"left"}}> <span style={{fontWeight:"bold"}}>Sofa set</span>
      
      <div>
       <NavLink to="/service">Fabric Sofa sets</NavLink>
       <NavLink to="/service">L-Shaped Sofa sets</NavLink>
       <NavLink to="/service">Wooden Sofa sets</NavLink>
       <NavLink to="/service">Leather Sofa sets</NavLink>
       <NavLink to="/service">Leatherette Sofa Sets</NavLink>
       <NavLink to="/service">Loveseats</NavLink>
       <NavLink to="/service">Diwans</NavLink>
       </div>
    
    </NavLink>
       
       
    <NavLink to="/service" style={{float:"left"}}>  <span style={{fontWeight:"bold"}}>Chairs</span>

    <div>
       <NavLink to="/service">Lounge Chairs</NavLink>
       <NavLink to="/service">Recliners</NavLink>
       <NavLink to="/service">Rocking Chairs</NavLink>
       <NavLink to="/service">Accent Chairs</NavLink>
       <NavLink to="/service">Designer Chairs</NavLink>
       <NavLink to="/service">Ottomans & Stools</NavLink>
       <NavLink to="/service">Benches</NavLink>
       </div>
    
    
    </NavLink>
    <NavLink to="/service"> <span style={{fontWeight:"bold"}}> Tables </span>


    <div>
       <NavLink to="/service">Coffee Tables</NavLink>
       <NavLink to="/service">Nested Tables</NavLink>
       <NavLink to="/service">Slide & End Tables</NavLink>
       <NavLink to="/service">Coffee Tables sets</NavLink>
       <NavLink to="/service">Console Tables</NavLink> 
       
       </div>
    
    
    
    
    </NavLink>
  </div>
</div>







<div class="dropdown" style={{ marginLeft:"50px"}}>
  <button class="dropbtn">Bedroom</button>
  <div class="dropdown-content">
  <NavLink to="/service" style={{float:"left"}}>  <span style={{fontWeight:"bold"}}> Beds </span>

  <div>
       <NavLink to="/service">Bed with Storage</NavLink>
       <NavLink to="/service">Beds without storage</NavLink>
       <NavLink to="/service">Double beds</NavLink>
       <NavLink to="/service">King size beds</NavLink>
       <NavLink to="/service">Single beds</NavLink>
       <NavLink to="/service">Queen size beds</NavLink>
       <NavLink to="/service">Platform Beds</NavLink>
       </div>
    
  
  </NavLink>

  <NavLink to="/service" style={{float:"left"}}>   <span style={{fontWeight:"bold"}}> Mattresses </span>
    
  <div>
       <NavLink to="/service">Mattresses by range</NavLink>
       <NavLink to="/service">Mattresses by material</NavLink>
       <NavLink to="/service">King Size Mattresses</NavLink>
       <NavLink to="/service">Queen Size Mattresses</NavLink>
       <NavLink to="/service">Single beds Mattresses</NavLink>
      
       </div>
    
  
  </NavLink>
  <NavLink to="/service"><span style={{fontWeight:"bold"}}> Kids Bedroom </span>
  
  <div>
       <NavLink to="/service">Kids beds</NavLink>
       <NavLink to="/service">Bunk beds</NavLink>
       
  </div>
    
  
  
  
  </NavLink>
  </div>
</div>






<div class="dropdown" style={{ marginLeft:"50px"}}>
<button class="dropbtn">Dining</button>
  <div class="dropdown-content">
  <NavLink to="/service" style={{float:"left"}}> <span style={{fontWeight:"bold"}}> Dining Tables and sets </span>
     
  <div>
       <NavLink to="/service">Dining Tables</NavLink>
       <NavLink to="/service">4 seater dining table sets</NavLink>
       <NavLink to="/service">6 seater Dining Tables sets</NavLink>
       <NavLink to="/service">Folding dining table sets</NavLink>
       <NavLink to="/service">8 seater Dining table sets</NavLink>
       
       </div>
    
  
  </NavLink>
  <NavLink to="/service "  style={{float:"left"}}> <span style={{fontWeight:"bold"}}>  Dining Storage </span>
    
  <div>
       <NavLink to="/service">Crockery</NavLink>
       <NavLink to="/service">Kitchen cabinets and Racks</NavLink>
       <NavLink to="/service">Bar Cabinets</NavLink>
       <NavLink to="/service">bar Stools</NavLink>
       <NavLink to="/service">Designer Chairs</NavLink>
       <NavLink to="/service">Ottomans & Stools</NavLink>
       <NavLink to="/service">Benches</NavLink>
       </div>
    
  
  
   </NavLink>
  <NavLink to="/service"> <span style={{fontWeight:"bold"}}> Chairs </span>
  
  <div>
       <NavLink to="/service">Dining chairs</NavLink>
       <NavLink to="/service">Benches</NavLink>
       <NavLink to="/service">Chair pads</NavLink>
       
       </div>
    
  
  
   </NavLink>
  </div>
</div>
  






    
<div class="dropdown" style={{ marginLeft:"50px"}}>
  <button class="dropbtn">Storage</button>
  <div class="dropdown-content">
    <NavLink to="/service"  style={{float:"left"}}>  <span style={{fontWeight:"bold"}}> Living storage </span>
     
    <div>
       <NavLink to="/service">Lounge Chairs</NavLink>
       <NavLink to="/service">Recliners</NavLink>
       <NavLink to="/service">Rocking Chairs</NavLink>
       <NavLink to="/service">Accent Chairs</NavLink>
       <NavLink to="/service">Designer Chairs</NavLink>
       <NavLink to="/service">Ottomans & Stools</NavLink>
       <NavLink to="/service">Benches</NavLink>
       </div>
    
    
    
    
    </NavLink>
    <NavLink to="/service"  style={{float:"left"}}>  <span style={{fontWeight:"bold"}}>Bedroom storage </span>
    
    
    <div>
       <NavLink to="/service">Lounge Chairs</NavLink>
       <NavLink to="/service">Recliners</NavLink>
       <NavLink to="/service">Rocking Chairs</NavLink>
       <NavLink to="/service">Accent Chairs</NavLink>
       <NavLink to="/service">Designer Chairs</NavLink>
       <NavLink to="/service">Ottomans & Stools</NavLink>
       <NavLink to="/service">Benches</NavLink>
       </div>
    
    
    
    </NavLink>
    <NavLink to="/service">  <span style={{fontWeight:"bold"}}> Dinning Storage </span>
      
    <div>
       <NavLink to="/service">Lounge Chairs</NavLink>
       <NavLink to="/service">Recliners</NavLink>
       <NavLink to="/service">Rocking Chairs</NavLink>
       <NavLink to="/service">Accent Chairs</NavLink>
       <NavLink to="/service">Designer Chairs</NavLink>
       <NavLink to="/service">Ottomans & Stools</NavLink>
       <NavLink to="/service">Benches</NavLink>
       </div>
    
    
    
    
    
    
    </NavLink>
  </div>
</div>






<div class="dropdown" style={{ marginLeft:"50px"}}>
  <button class="dropbtn">Study</button>
  <div class="dropdown-content">
    <NavLink to="/service"  style={{float:"left"}}>  <span style={{fontWeight:"bold"}}>Study tables </span>
       
    <div>
       <NavLink to="/service">Lounge Chairs</NavLink>
       <NavLink to="/service">Recliners</NavLink>
       <NavLink to="/service">Rocking Chairs</NavLink>
       <NavLink to="/service">Accent Chairs</NavLink>
       <NavLink to="/service">Designer Chairs</NavLink>
       <NavLink to="/service">Ottomans & Stools</NavLink>
       <NavLink to="/service">Benches</NavLink>
       </div>
    
    
    
    </NavLink>
    <NavLink to="/service"  style={{float:"left"}}>  <span style={{fontWeight:"bold"}}> Study Chairs </span>
      
    <div>
       <NavLink to="/service">Lounge Chairs</NavLink>
       <NavLink to="/service">Recliners</NavLink>
       <NavLink to="/service">Rocking Chairs</NavLink>
       <NavLink to="/service">Accent Chairs</NavLink>
       <NavLink to="/service">Designer Chairs</NavLink>
       <NavLink to="/service">Ottomans & Stools</NavLink>
       <NavLink to="/service">Benches</NavLink>
       </div>
    
    
    </NavLink>
    <NavLink to="/service">  <span style={{fontWeight:"bold"}}> Study lamps </span>
      
    <div>
       <NavLink to="/service">Lounge Chairs</NavLink>
       <NavLink to="/service">Recliners</NavLink>
       <NavLink to="/service">Rocking Chairs</NavLink>
       <NavLink to="/service">Accent Chairs</NavLink>
       <NavLink to="/service">Designer Chairs</NavLink>
       <NavLink to="/service">Ottomans & Stools</NavLink>
       <NavLink to="/service">Benches</NavLink>
       </div>
    
    
    </NavLink>
  </div>
</div>










      

     




</ol>
</nav>
</div>


    
</div>

        
        </>
    );
}
export default Menu;

 /*aria-label="breadcrumb"*/
 