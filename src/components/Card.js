import React from "react";


export default function Card(props){
    return ( 
              <div className="lists">

                 <h2 className="name">Name: <span className="country-name">{props.name}</span></h2>
                 <h3 className="name">Region:  <span className="country-name">{props.region}</span></h3>
                 <h4 className="name">Area: <span className="country-name">{props.area}</span></h4>
        
              </div>
            )
    
        }