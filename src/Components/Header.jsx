import React from 'react'
import 'styles/components/header.scss';
import { Link } from 'react-router-dom';
import authService from 'services/auth-services';

const Header = ({admin}) => {

    console.log(admin);

    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item item-inicio">
                            <Link to="/"><a className="nav-link" href="/#">INICIO</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us"><a className="nav-link" href="/#">CONOCENOS</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/store"><a className="nav-link" href="/#">TIENDA</a></Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item item-title">
                            <Link to="/"><h5 className="h1 text-white">Discos Chowell</h5></Link>
                        </li>
                    </ul>

                    <div>
                        {!sessionStorage.getItem('user') ?
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item item-sesion">
                                    <Link to="/login"><a className="nav-link" href="/#">INICIA SESIÓN</a></Link>
                                </li>
                            </ul> :
                            <div>
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item item-sesion">
                                        <Link to="/profile"><a className="nav-link" href="/#">Hola, {JSON.parse(sessionStorage.getItem('user')).Name}</a></Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    {authService.getCurrentUserRol() === 1 ? 
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item item-icon">
                                <Link to="/panel" onClick={() => admin(true)} >Panel</Link>
                            </li>
                        </ul>
                        :
                        null
                    }
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item item-icon">
                        <Link to="/shoppingCar"><img id="shopping-cart" src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-442-1151214.png" alt="carrito" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;