 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div  >
      <BrowserRouter className="App">
          <Navbar cartNum={0}></Navbar>

       </BrowserRouter>
    </div>
  );
}

export default App;
