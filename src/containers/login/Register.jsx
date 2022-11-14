import React from 'react';
import 'styles/login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import authService from 'services/auth-services';

const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await authService.signup(name, lastName, email, password).then(
                () => {
                    navigate("/login");
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Registrate</h1>
                <p className="subtitle">Bienvenido a Mean Chords</p>
                <form onSubmit={handleRegister} className="form">
                    <label className="label">Nombre</label>
                    <input type="text" id="lastname" placeholder="Ingresa nombre" onChange={(e) => setName(e.target.value)} className="input" />
                    <label className="label">Apellido</label>
                    <input type="text" id="name" placeholder="Ingresa apellido" onChange={(e) => setLastName(e.target.value)} className="input" />
                    <label className="label">Correo</label>
                    <input type="text" id="email" placeholder="Ingresa correo electrónico" onChange={(e) => setEmail(e.target.value)} className="input" />
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)} className="input input-password" />
                    <button type="submit">Continuar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;