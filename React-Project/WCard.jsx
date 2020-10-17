import React from "react";
import {NavLink} from "react-router-dom";

function Card(props){
    return (
        <>

<div className="card" style={{width: "18rem"}}>
  <img src={props.imgsrc}
   className="card-img-top image-height" alt="pic"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text"></p>
    <NavLink to="/" className="rounded btn btn-outline-info text-center">Details</NavLink>
  </div>
</div>
        </>
    )
}

export default Card;