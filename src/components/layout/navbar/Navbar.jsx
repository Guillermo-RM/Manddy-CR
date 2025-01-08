import React from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'

function Navbar () {

    return (
        <nav className={`navbar-expand-lg navbar ${styles['navbar-container']}`}>
            <div className="container-fluid">
                <h1 className='color-primary-300 font-titles'><Link to="/">Manddy <span>Crochet CR</span></Link> </h1>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link color-primary-300 font-text" to="/">Inicio</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color-primary-300 font-text" to="/amigurumis">Amigurumis</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color-primary-300 font-text" to="/tops">Topcitos</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color-primary-300 font-text" to="/gifts">Regalos</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color-primary-300 font-text" to="/keyrings">Llaveritos</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color-primary-300 font-text" to="/about">Nosotros</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar