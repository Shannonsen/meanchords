import React from 'react'
import { useEffect, useState } from 'react';
import shopServices from 'services/shop-services';
import profileServices from 'services/profile-services';
import 'styles/pages/buy.scss';
import Paypal from 'components/Paypal';
/* import { Link } from 'react-router-dom'; */
/* Paq UPS https://drive.google.com/uc?export=view&id=1rUkNUQvC5qTlBRPuDHXPqBPNRf5yL6XP */
/* Paq FEDEX https://drive.google.com/uc?export=view&id=1JgI6V-jodamoGqyE3lla0pPHFCm-O1Oh */
/* Paq EMS https://drive.google.com/uc?export=view&id=1XSwkjyADzv0BgesqBdTIwkHVcwykvgKt */
/* Paq DHL https://drive.google.com/uc?export=view&id=1MjrcgN8zcte12XiBuQ-dpu_F1n0e0pj_ */
const Buy = () => {
    const total = sessionStorage.getItem("total-car");
    const [Car, setCar] = useState([]);
    const [Address, setAddress] = useState([]);
    const [Package, setPackage] = useState("");
    const [AddressUser, setAddressUser] = useState(0);
    const [Checked, setChecked] = useState(false);

    const [totalWithDelivery, setTotalWithDelivery] = useState(0);
    const packages = [
        {
            "id": 1,
            "name": "DHL",
            "price": 250,
            "days": 2,
            "image": "https://drive.google.com/uc?export=view&id=1MjrcgN8zcte12XiBuQ-dpu_F1n0e0pj_"
        },
        {
            "id": 2,
            "name": "UPS",
            "price": 200,
            "days": 3,
            "image": "https://drive.google.com/uc?export=view&id=1rUkNUQvC5qTlBRPuDHXPqBPNRf5yL6XP"
        },
        {
            "id": 3,
            "name": "FEDEX",
            "price": 100,
            "days": 5,
            "image": "https://drive.google.com/uc?export=view&id=1JgI6V-jodamoGqyE3lla0pPHFCm-O1Oh"
        },
        {
            "id": 4,
            "name": "EMS",
            "price": 75,
            "days": 6,
            "image": "https://drive.google.com/uc?export=view&id=1XSwkjyADzv0BgesqBdTIwkHVcwykvgKt"
        },
    ];

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const consulta = await shopServices.getShoppingCart(sessionStorage.getItem('userID'));
                setCar(JSON.parse(consulta));
            } catch (error) {
                console.log(error)
            }
        }
        async function getAddress() {
            try {
                const consulta = await profileServices.getAllAddress(sessionStorage.getItem('userID'));
                setAddress(JSON.parse(consulta));
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyAPI();
        getAddress();
    }, []);


    const TerminateBuy = async (e) => {
        e.preventDefault();
        console.log(Package);
        sessionStorage.setItem("delivery", String(Package));
        sessionStorage.setItem("address", JSON.stringify(Number(AddressUser)));
        let totalcito = 0;
        switch (Package) {
            case 'DHL':
                setTotalWithDelivery(Number(total) + 250)
                totalcito = Number(total) + 250
                break;
            case 'UPS':
                setTotalWithDelivery(Number(total) + 200)
                totalcito = Number(total) + 200
                break;
            case 'FEDEX':
                setTotalWithDelivery(Number(total) + 100)
                totalcito = Number(total) + 100
                break;
            case 'EMS':
                setTotalWithDelivery(Number(total) + 75)
                totalcito = Number(total) + 75
                break;
            default:
                return 'foo';
        }
        sessionStorage.setItem("total", JSON.stringify(totalcito));
        setChecked(true)
    };

    return (
        <div>
            <div className="container-fluid container-buy">
                <div className="row">
                    <div className="col-6">
                        <h2>Productos a pagar</h2>
                        {/*  <h2>MXN {total}</h2> */}
                        {Car.map((attributes) => {
                            return (
                                <div className="container-car">
                                    <div className="row row-buy">
                                        <div className="col-4 container-img-car">
                                            <img src={attributes.DiscImgUrl} id="img-disc" alt="" />
                                        </div>
                                        <div className="col-8 container">
                                            <div className="container-name"> {attributes.Name}</div>
                                            <div className="container-description"> {attributes.Author?.FullName} {attributes.Author?.ShortName}</div>
                                            <div className="container-price"> {"$" + attributes.Price + " MXN"}</div>
                                            {/* <button type="submit" className="btn btn-danger button-delete">eliminar</button> */}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className='packages'>
                            <h2>Paquetería</h2>
                            {
                                packages.map((pack) => {
                                    return (
                                        <div className='pack-container'>
                                            <div className='row row-container'>
                                                <div class="col-4">
                                                    <img src={pack.image} id="img-pack" alt="" />
                                                    <input class="form-check-input mt-4" type="checkbox" value={pack.name} onChange={(e) => setPackage(e.target.value)} aria-label="Checkbox for following text input" />
                                                </div>
                                                <div class="col-8">
                                                    <h6>Precio: ${pack.price} Entrega en {pack.days} días </h6>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='info-address'>
                            <h2>Direcciones</h2>
                            <ul class="list-group">
                                {Address.map((address) => {
                                    return (
                                        <li class="list-group-item">
                                            <input class="form-check-input me-1" type="checkbox" value={address.AddressId} onChange={(e) => setAddressUser(e.target.value)}aria-label="..." />
                                            {address.City}, {address.Country}
                                            <br />
                                            Calle {address.Street}, No. {address.HouseNumber}. CP: {address.ZIP}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='info-buy'>
                            <h4>Subtotal: MXN ${total}</h4>
                            {
                                Checked ?
                                    <div>
                                        <h3>Total: ${totalWithDelivery}</h3>
                                        <Paypal />
                                    </div>
                                    :
                                    <form onSubmit={TerminateBuy}>
                                        <button type="submit" className="btn btn-danger button-delete">Pagar</button>
                                    </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buy;