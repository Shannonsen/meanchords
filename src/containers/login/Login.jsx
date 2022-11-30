import React from 'react';
import { useState } from 'react';
import 'styles/login.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import authService from 'services/auth-services';

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await authService.login(email, password).then(
				() => {
					navigate("/");
					window.location.reload();
				},
				(error) => {
					alert("Tu cuenta no ha sido encontrada")
				}
			);
		} catch (err) {
			alert(err)
		}
	};

	return (
		<div className="login">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Ingresa tu cuenta</h1>
				<p className="subtitle">Bienvenido a Mean Chords</p>
				<form onSubmit={handleLogin} className="form">
					<input type="text" id="email" placeholder="Ingresa correo electrónico" onChange={(e) => setEmail(e.target.value)} className="input" />
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)} className="input input-password" />
					<button type="submit" className="primary-button login-button">Continuar</button>
					<Link to="/register"><input type="button" value="Registrarse" className="primary-button login-button" /></Link>
				</form>
			</div>
		</div>
	);
}

export default Login;