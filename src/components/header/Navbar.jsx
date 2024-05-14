import React from "react"

export function Navbar() {
  return (
    <div className="navbar-container">
        <nav className="navbar" id="navbar">
          <a className="menu-link active" href="#0">
            <span>inicio</span>
            <div className="background"/>
          </a>
          <a className="menu-link" href="#0">
            <span>productos</span>
            <div className="background"/>
          </a>
          <a className="menu-link" href="#0">
            <span>Servicios</span>
            <div className="background"/>
          </a>
          <a className="menu-link" href="#0">
            <span>contactanos</span>
            <div className="background"/>
          </a>
        </nav>
    </div>
  )
}
