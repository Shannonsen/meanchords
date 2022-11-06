import React from 'react';
import 'styles/login.scss';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Registrate</h1>
                <p className="subtitle">Bienvenido a Mean Chords</p>
                <form action="" className="form">
                    <label className="label">Correo</label>
                    <input type="text" id="email" className="input" />
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <label for="new-password" className="label">Confirmar contraseña</label>
                    <input type="password" id="confirm-password" placeholder="*********" className="input input-password" />
                    <Link to="/login"><input type="button" value="Continuar" className="primary-button login-button" /></Link>
                </form>
            </div>
        </div>
    );
}

export default Register;