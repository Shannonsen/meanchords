import React from 'react';
import 'styles/login.scss';

const Login = () => {
	return (
		<div className="login">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Ingresa tu cuenta</h1>
				<p className="subtitle">Bienvenido a Mean Chords</p>
				<form action="/" className="form">
					<label className="label">Correo</label>
					<input type="text" id="email" className="input" />
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Iniciar sesión" className="primary-button login-button" />
					<input type="submit" value="Registrate" className="primary-button" />
				</form>
			</div>
		</div>
	);
}

export default Login;