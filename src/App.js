 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './komponente/Footer';
function App() {
  return (
    <div  >
      <BrowserRouter className="App">
          <Navbar cartNum={0}></Navbar>
          <Footer></Footer>
       </BrowserRouter>
    </div>
  );
}

export default App;
