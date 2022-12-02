import React from 'react'
import { Link } from 'react-router-dom'
import 'styles/pages/alertresponse.scss';

export default function SucessfullBuy() {
    return (
        <div className="container-sucessfullBuy">
            <h1>¡GRACIAS POR COMPRAR EN DISCOS CHOWELL!</h1>
            <h4>Te hemos enviado un ticket de compra a tu correo electrónico</h4>
            <img className="img-sucess" src="https://drive.google.com/uc?export=view&id=15Km1DBp_ofAaYGipuELzKZoPCADQ3oIW" alt="" />
            <Link to="/"><input type="button" value="Regresar al menu principal" className="primary-button alert-button" /></Link>
        </div>
    )
}
