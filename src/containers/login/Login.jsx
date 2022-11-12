import React from 'react';
import 'styles/login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="login">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Ingresa tu cuenta</h1>
				<p className="subtitle">Bienvenido a Mean Chords</p>
				<form action="/" className="form">
					<label className="label">Correo</label>
					<input type="text" id="email" placeholder="Ingresa correo electrónico" className="input" />
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Iniciar sesión" className="primary-button login-button" />
					<Link to="/register"><input type="button" value="Registrarse" className="primary-button login-button" /></Link>
				</form>
			</div>
		</div>
	);
}

export default Login;