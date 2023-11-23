import {NavLink } from "react-router-dom"
import '../style/header.css';
export const Header = () => {

    return(
        <div className="header">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/menu" className="link">Menu</NavLink>
            <NavLink to="/about" className="link">About</NavLink>
            <NavLink to="/contact" className="link">Contact</NavLink>
        </div>
    )
}