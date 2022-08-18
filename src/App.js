 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './komponente/Footer';
import Korpa from './komponente/Korpa';
import Ponuda from './komponente/Ponuda';
import { useState } from 'react';
import Kontakt from './komponente/Kontakt';
function App() {
 
  const [cartNum,setCartNum]=useState(0)
  const [proizvodiUKorpi,setKorpa]=useState([]);
  const [proizvodi]=useState([
      {
        id:1,
        naziv:"Sveska A4",
        opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." ,
        cena:150,
        slika:"https://www.hiper.rs/pub/media/catalog/product/cache/b40488bd01a4e3ef64104ffa50fb0b7d/n/e/neon-zelena-a4.jpg",
        kolicina:0
      },
      {
        id:2,
        naziv:"Sveska A5",
        opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." ,
        cena:170,
        slika:"https://www.hiper.rs/pub/media/catalog/product/cache/b40488bd01a4e3ef64104ffa50fb0b7d/n/e/neon-zelena-a4.jpg",
        kolicina:0
      },
      {
        id:3,
        naziv:"Olovka",
        opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." ,
        cena:100,
        slika:"https://www.hiper.rs/pub/media/catalog/product/cache/b40488bd01a4e3ef64104ffa50fb0b7d/n/e/neon-zelena-a4.jpg",
        kolicina:0
      },
      {
        id:4,
        naziv:"Blokcic",
        opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." ,
        cena:500,
        slika:"https://www.hiper.rs/pub/media/catalog/product/cache/b40488bd01a4e3ef64104ffa50fb0b7d/n/e/neon-zelena-a4.jpg",
        kolicina:0
      },
      {
        id:5,
        naziv:"Gumica",
        opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." ,
        cena:50,
        slika:"https://www.hiper.rs/pub/media/catalog/product/cache/b40488bd01a4e3ef64104ffa50fb0b7d/n/e/neon-zelena-a4.jpg",
        kolicina:0
      }
  ]);
function osveziKorpu(){
  let niz = proizvodi.filter((p)=>p.kolicina>0);
  setKorpa(niz);
}
function onAdd(id){
    setCartNum(cartNum+1);
    for(var i=0;i<proizvodi.length;i++){
      if(proizvodi[i].id==id){
        proizvodi[i].kolicina++;
      }
    }
    osveziKorpu();
}
function onRemove(id){
  setCartNum(cartNum-1);
  for(var i=0;i<proizvodi.length;i++){
    if(proizvodi[i].id==id && proizvodi[i].kolicina!=0 ){
      proizvodi[i].kolicina--;
    }
  }
  osveziKorpu();
}



  return (
    <div  >
      <BrowserRouter className="App">
          <Navbar cartNum={cartNum}></Navbar>
          <Routes>         
               <Route path="/ponuda" element={<Ponuda proizvodi={proizvodi} onAdd={onAdd} onRemove={onRemove}></Ponuda>}></Route>
                <Route path="/korpa" element={<Korpa proizvodi={proizvodiUKorpi} onAdd={onAdd} onRemove={onRemove}></Korpa>}></Route>
                <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>
          </Routes>


          {/* <Footer></Footer> */}
       </BrowserRouter>
    </div>
  );
}

export default App;
