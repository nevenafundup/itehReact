 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './komponente/Footer';
import Korpa from './komponente/Korpa';
import Ponuda from './komponente/Ponuda';
import { useState } from 'react';
function App() {
 
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






  return (
    <div  >
      <BrowserRouter className="App">
          <Navbar cartNum={0}></Navbar>
          <Routes>         
               <Route path="/ponuda" element={<Ponuda proizvodi={proizvodi}></Ponuda>}></Route>
                <Route path="/korpa" element={<Korpa></Korpa>}></Route>
          </Routes>


          {/* <Footer></Footer> */}
       </BrowserRouter>
    </div>
  );
}

export default App;
