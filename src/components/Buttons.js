import React from "react";

export default function Button(props){
    return(
        <div className="wrapper__sort-buttons">
            <div>
            <select
              defaultValue="default"
              onChange={props.handleClick}
              className="select"
            >
              <option disabled value="default">Sort by</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            </div>

             <button onClick={props.handleClick} value="oceania" className="btn">Region is Oceania</button>
            <button onClick={props.handleClick} value="small" className="btn1">Area Smaller than Lithuania</button>
            
        </div>
          )
    }