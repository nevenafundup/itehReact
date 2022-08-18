 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './komponente/Footer';
import Korpa from './komponente/Korpa';
import Ponuda from './komponente/Ponuda';
function App() {
  return (
    <div  >
      <BrowserRouter className="App">
          <Navbar cartNum={0}></Navbar>
          <Routes>         
               <Route path="/ponuda" element={<Ponuda></Ponuda>}></Route>
                <Route path="/korpa" element={<Korpa></Korpa>}></Route>
          </Routes>


          {/* <Footer></Footer> */}
       </BrowserRouter>
    </div>
  );
}

export default App;
