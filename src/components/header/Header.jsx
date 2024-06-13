import React from "react"

import {Navbar} from "./Navbar"
import {CarritoHeader} from "./CarritoHeader"
import { Logo } from "../../img/Logo"
import { Link } from "react-router-dom"

export function Header() {
    
  return (
    <>
        <header className="header">
            <Link to={"/"}>
                <div className="contenedor-logo">
                    <Logo/>
                    <div className="texto-logo"><h1>El Rincón <br/>del Vino</h1></div>
                </div>
            </Link>
            <Navbar/>
            <Link to={"/carrito"}>
                <CarritoHeader/>
            </Link>
        </header>
    </>
)
}
