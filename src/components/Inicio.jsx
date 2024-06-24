import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2"
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import {Loader} from '../components/Loader'


export const Inicio = () => {

    let [categorias, setCategorias] = useState()

    useEffect(() => {
        const categoriasRef = collection(db, "categorias")
        getDocs(categoriasRef)
        .then(res => {
            setCategorias(res.docs[0].data()) 
        })
    }, [])

    
    
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
            customClass: {
                container: "popup-inicio"
            }
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
    {
        categorias ?
        <>
            <h2>Conocé nuestra variedad de vinos</h2>
            <div className="bg-container">
                <div className='container-tintos'>
                    <div className='titulo-tipo'>
                    <h3>Vinos blancos</h3>
                    </div>
                    {
                    categorias.tintos.map((tinto) => {
                        return(
                            <div key={tinto.id} className="links-container">
                                <Link to={`/categorias/${tinto.id}`}>
                                    <div className='link-item'>
                                        <h4>{tinto.nombre}</h4>
                                        <img className='slide-in-right' src={`../img/inicio/${tinto.id}.png`} />
                                        <div className="variedad">
                                            <h5>Variedad</h5>
                                            <p>100% {tinto.nombre}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
                <div className='container-blancos'>
                    <div className='titulo-tipo'>
                    <h3>Vinos blancos</h3>
                    </div>
                    {
                    categorias.blancos.map((blanco) => {
                        return(
                            <div key={blanco.id} className="links-container">
                                <Link to={`/categorias/${blanco.id}`}>
                                    <div className='link-item'>
                                        <h4>{blanco.nombre}</h4>
                                        <img className='slide-in-right' src={`../img/inicio/${blanco.id}.png`} />
                                        <div className="variedad">
                                            <h5>Variedad</h5>
                                            <p>100% {blanco.nombre}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
        : <Loader/>
    }
    </div>
  )
}
