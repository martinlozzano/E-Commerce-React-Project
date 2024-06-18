import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2"
import { Link } from 'react-router-dom'


export const Inicio = () => {

    if(localStorage.getItem("edad") !== "mayor"){
        Swal.fire({
            title: '¿Tienes mas de 18 años?',
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Tengo más de 18 años",
            denyButtonText: "Tengo menos de 18 años",
            background: "rgba($color: #dddd, $alpha: 1.0)",
            color: "#242424",
            iconColor: "#242424",
            padding: "10px",
            allowEscapeKey: false,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isDenied) {
                Swal.fire({
                    title: "¡Lo sentimos!",
                    text: "Tiene que ser mayor de 18 años",
                    showConfirmButton: false,
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                })
            } else if (result.isConfirmed) {
                localStorage.setItem("edad", "mayor")
            }
        })
    }

    
  return (
    <div className='inicio-container'>
        <h2>Conocé nuestra variedad de vinos</h2>
        <div className="bg-container">
            <div className='container-tintos'>
                <div className="titulo-tipo">
                    <h3>Vinos tintos</h3>
                </div>
                <div className="links-container">
                    <Link to={"/categorias/cabernet-sauvignon"}>
                        <div className='link-item'>
                            <h4>Cabernet Sauvignon</h4>
                            <img className='slide-in-right' src={"../img/inicio/cabernet-sauv.png"} />
                            <div className="variedad">
                                <h5>Variedad</h5>
                                <p>100% Cabernet Sauvignon</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/categorias/merlot"}>
                        <div className='link-item'>
                            <h4>Merlot</h4>
                            <img className='slide-in-right' src={"../img/inicio/merlot.png"} alt="" />
                            <div className="variedad">
                                <h5>Variedad</h5>
                                <p>100% Merlot</p>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={"/categorias/malbec"}>
                        <div className='link-item'>
                            <h4>Malbec</h4>
                            <img className='slide-in-right' src={"../img/inicio/malbec.png"} alt="" />
                            <div className="variedad">
                                <h5>Variedad</h5>
                                <p>100% Malbec</p>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={"/categorias/pinot-noir"}>
                        <div className='link-item'>
                            <h4>Pinot Noir</h4>
                            <img className='slide-in-right' src={"../img/inicio/pinot-noir.png"} alt="" />
                            <div className="variedad">
                                <h5>Variedad</h5>
                                <p>100% Pinot Noir</p>
                            </div>
                            
                        </div>
                    </Link>
                </div>
            </div>
            <div className='container-blancos'>
                <div className="titulo-tipo">
                    <h3>Vinos blancos</h3>
                </div>
                <div className="links-container">
                    <Link to={"/categorias/torrontes"}>
                        <div className='link-item'>
                            <h4>Torrontes</h4>
                            <img className='slide-in-right' src={"../img/inicio/torrontes.png"} alt="" />
                            <div className="variedad">
                                <h5>Variedad</h5>
                                <p>100% Torrontes</p>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={"/categorias/sauvignon-blanc"}>
                        <div className='link-item'>
                            <h4>Sauvignon Blanc</h4>
                            <img className='slide-in-right' src={"../img/inicio/sauvignon-blanc.png"} alt="" />
                            <div className="variedad">
                                <h5>Variedad</h5>
                                <p>100% Sauvignon Blanc</p>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={"/categorias/chardonnay"}>
                        <div className='link-item'>
                            <h4>Chardonnay</h4>
                            <img className='slide-in-right' src={"../img/inicio/chardonnay.png"} alt="" />
                            <div className="variedad">
                                <h5>Variedad</h5>
                                <p>100% Chardonnay</p>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={"/categorias/dulce"}>
                        <div className='link-item'>
                            <h4>Dulce</h4>
                            <img className='slide-in-right' src={"../img/inicio/dulce.png"} alt="" />
                            <div className="variedad">
                                <h5>Variedad</h5>
                                <p>100% Dulce</p>
                            </div>
                            
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}
