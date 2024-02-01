import "../Styles/Navbar.css"
import { useRef } from "react";
import {Link} from "react-router-dom"

export function Navbar () {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }    

    return (
        <header class="header">
            <Link to="/" className="logotip">Logo</Link>

            <label htmlFor="nav-toggle" className="iconos">
                <i id="nav-toggle" className="nav-btn nav-close-btn bx bx-menu" onClick={showNavbar}></i>
            </label>

            <nav ref={navRef} className="navbar">
                <Link to="/serveis">Serveis</Link>
                <Link to="/projectes">Projectes</Link>
                <Link to="/contactans">Contactan's</Link>
                <Link to="/sobre_nosaltres">Sobre nosaltres</Link>
            </nav>
    </header>
    )
}