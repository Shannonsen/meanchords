import React from 'react';
import 'styles/pages/home.scss';
import homeimg from 'assets/img/homeimg.png';
import shopimg from 'assets/img/shop.png';
import { Link } from 'react-router-dom';
import shopServices from 'services/shop-services';
import { useState, useEffect } from 'react';

const Home = () => {
    const [Discs, setDiscs] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const consulta = await shopServices.getQuantyDisc(4);
                console.log(JSON.parse(consulta));
                setDiscs(JSON.parse(consulta));
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyAPI();
    }, []);

    return (
        <div>
            <div className="container-fluid text-center container-img">
                <div className="container-shadow">
                    <img src={homeimg} class="img" alt="CD" />
                    <div className="vinilo-text"><h2>Vinilos</h2></div>
                    <div className="cd-text"><h2>CD's</h2></div>
                </div>
            </div>
            <div className="container-fluid text-center container-newproducts">
                <h2 id="title-products">NUEVOS PRODUCTOS</h2>
                <div className="row">
                    {Discs.map((product) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6" id="product-container">
                                <div className="card">
                                    <img src={product.DiscImgUrl} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to={"/detail/" + product.DiscId}>
                                            <p className="card-text">{product.Name}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4" id="container-button-products"><Link to={"/store"}><input value="Ver productos" className="primary-button login-button" /></Link></div>
                    <div className="col-4"></div>
                </div>
            </div>
            <div className="container-fluid text-center container-about-us">
                <div className="container-filter">
                    <img src={shopimg} className="img2" alt="CD" />
                </div>
                <h2 id="title-about-us">¿QUIÉNES SOMOS?</h2>
                <div className="container-info">
                    <p>
                        Discos chowell es el paraíso de los vinilos con precios totalmente accesibles, No hace mucho que los discos
                         de acetato se pusieron de nuevo en el lente de los melómanos, actualmente encuentras más de una tienda que se dedica a su venta, pero hay algunas que llevan un buen rato en el mercado. Discos Chowell es una de ellas. Esta pequeña tienda cuenta con un amplio catálogo, así que encontrarás de todos los géneros, desde pop, jazz, tecno, rock, metal y hasta música clásica.
                    </p>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4" id="container-button-products"><Link to="/about-us"><input type="button" value="Conocenos" className="primary-button login-button" /></Link></div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;