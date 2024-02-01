import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Styles/index.css"
import { Navbar } from './assets/Navbar.jsx'
import { App } from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { Serveis, Projectes, Contactans, Sobre_nosaltres } from './pages/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/serveis" element={<Serveis />}/>
            <Route path="/projectes" element={<Projectes />}/>
            <Route path="/contactans" element={<Contactans />}/>
            <Route path="/sobre_nosaltres" element={<Sobre_nosaltres />}/>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
