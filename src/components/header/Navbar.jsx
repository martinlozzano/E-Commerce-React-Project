import React from "react"
import { NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <div className="navbar-container">
        <nav className="navbar" id="navbar">
          <NavLink className="menu-link" activeClassName="active" to="/">
            <span>inicio</span>
            <div className="background"/>
          </NavLink>
          <NavLink className="menu-link" activeClassName="active" to="productos">
            <span>productos</span>
            <div className="background"/>
          </NavLink>
          <NavLink className="menu-link" activeClassName="active" to="servicios">
            <span>Servicios</span>
            <div className="background"/>
          </NavLink>
          <NavLink className="menu-link" activeClassName="active" to="contactanos">
            <span>contactanos</span>
            <div className="background"/>
          </NavLink>
        </nav>
    </div>
  )
}
