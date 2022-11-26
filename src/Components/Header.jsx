import React from 'react'
import 'styles/components/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item item-inicio">
                            <Link to="/"><a class="nav-link" href="/#">INICIO</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about-us"><a class="nav-link" href="/#">CONOCENOS</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/store"><a class="nav-link" href="/#">TIENDA</a></Link>
                        </li>
                    </ul>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item item-title">
                            <Link to="/"><h5 class="h1 text-white">Mean Chords</h5></Link>
                        </li>
                    </ul>

                    <div>
                        {!sessionStorage.getItem('user') ?
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item item-sesion">
                                    <Link to="/login"><a class="nav-link" href="/#">INICIA SESIÓN</a></Link>
                                </li>
                            </ul> :
                            <div>
                                <ul class="navbar-nav mb-2 mb-lg-0">
                                    <li class="nav-item item-sesion">
                                        <Link to="/"><a class="nav-link" href="/#">HOLA! {sessionStorage.getItem('userID')}</a></Link>
                                    </li>
                                </ul>
                            </div>
                        }

                    </div>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item item-icon">
                            <a class="nav-link" href="/#"><img id="shopping-cart" src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-442-1151214.png" alt="carrito" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;