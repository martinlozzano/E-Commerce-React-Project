import React, { useState } from "react"
import { NavLink } from "react-router-dom"

export function Navbar() {
  
  let [desplegado, setDesplegado] = useState(false)

  
  function handleDesplegar() {
    if (!desplegado) {
      setDesplegado(true)
    }else{
      setDesplegado(false)
    }
  }
  
  function handleCambioUrl() {
    if (desplegado) {
      setDesplegado(false)
    }
  }
  
  return (
    <div className="navbar-bg-container" >
        <div onClick={handleDesplegar} className="barras-desplegable">
          <svg viewBox="0 0 24 24">
            <path d="M4 18L20 18" stroke="currentColor" />
            <path d="M4 12L20 12" stroke="currentColor" />
            <path d="M4 6L20 6" stroke="currentColor" />
          </svg>
        </div>
        <div className={`navbar-sm-container ${desplegado ? "" : "no-desplegado"}`}>
          <nav className={`navbar ${desplegado ? "" : "no-desplegado"}`} id="navbar">
            <NavLink onClick={handleCambioUrl} className="menu-link" activeclassname="active" to="/">
              <span>inicio</span>
              <div className="background"/>
            </NavLink>
            <NavLink onClick={handleCambioUrl} className="menu-link" activeclassname="active" to="productos">
              <span>productos</span>
              <div className="background"/>
            </NavLink>
            <NavLink onClick={handleCambioUrl} className="menu-link" activeclassname="active" to="contactanos">
              <span>contactanos</span>
              <div className="background"/>
            </NavLink>
          </nav>
        </div>
    </div>
  )
}
