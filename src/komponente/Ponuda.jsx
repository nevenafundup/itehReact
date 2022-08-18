import React from "react";
import Kartica from "./Kartica";
 

function Ponuda({proizvodi}) {
  return (
    <div className="all-products"> 
        {proizvodi
            .map((p)=> <Kartica proizvod={p}></Kartica>)
        }
        
 
    </div>
  );
}

export default Ponuda;