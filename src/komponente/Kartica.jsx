import React from "react";
import {BsPlusLg, BsDashLg} from "react-icons/bs"

function Kartica({proizvod,onAdd,onRemove}) {
  return (
    <div className="card">
     
    <div className="card-header" >
         <img className='card-img-top'  src ={proizvod.slika}   /> 
    </div>
    <div className="card-body">
         
        
        <h4 className = "naslovKartice">  {proizvod.naziv}   </h4>
        <p className="opisProizvoda">{proizvod.opis}</p>

        
        <p className='cena'>  {proizvod.cena}  </p>  
        <button
          className="btn"
          onClick={() => onAdd(  proizvod.id)}
        >
        <BsPlusLg />
      </button>
      <br />
      <button 
        className="btn"
        onClick={() => onRemove(  proizvod.id)}>
        <BsDashLg />
      </button>
        
    </div> 
</div>
  );
}

export default Kartica;