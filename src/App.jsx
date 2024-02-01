import { Route, Routes } from "react-router-dom"
import { Navbar } from "./assets/Navbar";


export function App() {
   return (
     <div className="App">
       <Navbar />
       <Routes>
        <Route path="/serveis" element={<Serveis />}/>
        <Route path="/projectes" element={<Projectes />}/>
        <Route path="/contactans" element={<Contactans />}/>
        <Route path="/sobre_nosaltres" element={<Sobre_nosaltres />}/>
      </Routes>
     </div>
    );
}

