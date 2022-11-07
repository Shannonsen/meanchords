import React from 'react'
import 'styles/components/header.scss';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item item-inicio">
                            <a class="nav-link" aria-current="page" href="/#">INICIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">CONOCENOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">TIENDA</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item item-title">
                            <a class="nav-link" href="/#">MEAN CHORDS</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item item-sesion">
                            <a class="nav-link" href="/#">INICIA SESIÓN</a>
                        </li>
                    </ul>
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