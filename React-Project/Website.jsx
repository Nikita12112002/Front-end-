import React from "react";
import Menu from "./Menu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {Route , Switch , Redirect} from "react-router-dom";
import Home from "./Home";
import About from "./About1";
import Contact from "./Contact1";
import Service from "./Service1";
import Login from "./Login";
import Registration from "./Registration";
import Password from "./ForgotPassword";




function App(){
    return(
       <>

       <Menu/>

       <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/service" component={Service}/>
           <Route exact path="/about" component={About}/>
           <Route exact path="/contact" component={Contact}/>
           <Route exact  path="/password" component={Password}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/registration" component={Registration}/>
       </Switch>
      
       
       
        
        </>
    );
}
export default App;