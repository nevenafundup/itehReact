import React from "react";
import Kartica from "./Kartica";
 

function Ponuda({proizvodi,onAdd,onRemove}) {
  return (
    <div className="all-products"> 
        {proizvodi
            .map((p)=> <Kartica key={p.id} proizvod={p} onAdd={onAdd} onRemove={onRemove}></Kartica>)
        }
        
 
    </div>
  );
}

export default Ponuda;