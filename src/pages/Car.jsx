import React from 'react'
import { useEffect, useState } from 'react';
import shopServices from 'services/shop-services';
import 'styles/pages/car.scss';
const Car = () => {
    const [Car, setCar] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const consulta = await shopServices.getShoppingCart(sessionStorage.getItem('userID'));
                console.log(JSON.parse(consulta));
                setCar(JSON.parse(consulta));
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyAPI();
    }, []);

    return (
        <div className="container-initial">
            <div className="container-title">TU CARRITO</div>
            {Car.map((attributes) => {
                return (
                    <div className="container-fluid container-car">
                        <div className="row">
                            <div className="col-4 container-img-car">
                                <img src={attributes.DiscImgUrl} id="img-disc" alt="" />
                            </div>
                            <div className="col-8 container">
                                <div className="container-name"> {attributes.Name}</div>
                                <div className="container-description"> {attributes.Author?.FullName} {attributes.Author?.ShortName}</div>
                                <div className="container-price"> {"$" + attributes.Price + " MXN"}</div>
                                <button type="submit" className="btn btn-danger button-delete">eliminar</button>
                            </div>
                        </div>
                    </div>
                );
            })}
            <button type="submit" className="primary-button button-buy">PAGAR</button>
        </div>
    );
}

export default Car;