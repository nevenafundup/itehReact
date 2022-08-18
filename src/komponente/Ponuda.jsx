import React, { useState } from "react";
import Kartica from "./Kartica";
 

function Ponuda({proizvodi,onAdd,onRemove}) {
    const [sort,setSort]=useState(true);
    function sortR(){
        setSort(true);
    }
    function sortO(){
        setSort(false);
    }

  return (
    <div>
        <button className="sortbtn btn" onClick={sortR}>Sortiraj rastuce</button>
        <button className="sortbtn btn" onClick={sortO}>Sortiraj opadajuce</button>
        <div className="all-products"> 
        {sort==true ? 
            <>
            {proizvodi
                .sort((a,b)=> a.cena<b.cena?-1:1)
                .map((p)=> <Kartica key={p.id} proizvod={p} onAdd={onAdd} onRemove={onRemove}></Kartica>)
            }
            </>
        :
            <>
            {proizvodi
                .sort((a,b)=> a.cena>=b.cena?-1:1)
                .map((p)=> <Kartica key={p.id} proizvod={p} onAdd={onAdd} onRemove={onRemove}></Kartica>)
            }
            </>
        }

            
    
        </div>
    </div>
  );
}

export default Ponuda;