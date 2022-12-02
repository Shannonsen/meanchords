import React from 'react'
import { useEffect, useState } from 'react';
import shopServices from 'services/shop-services';
import 'styles/pages/car.scss';
import { Link } from 'react-router-dom';
const Car = () => {
    const [Car, setCar] = useState([]);
    const [Total, setTotal] = useState(0);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const consulta = await shopServices.getShoppingCart(sessionStorage.getItem('userID'));
                console.log(JSON.parse(consulta));
                setCar(JSON.parse(consulta));
                let totalCount = 0;
                JSON.parse(consulta).forEach((el) => {
                    totalCount = totalCount + Number(el.Price);
                })
                setTotal(totalCount);
                sessionStorage.setItem("total-car", JSON.stringify(totalCount));
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
            <div>
                <h4>Total: ${Total}</h4>
            </div>
            <div class="alert alert-light" role="alert">
                El precio total aún no contempla en envió.
            </div>
            <Link to={"/buyproducts"}>
            <button className="primary-button button-buy">PAGAR</button>
            </Link>
        </div>
    );
}

export default Car;