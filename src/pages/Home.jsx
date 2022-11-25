import React from 'react';
import 'styles/pages/home.scss';
import homeimg from 'assets/img/homeimg.png';
import shopimg from 'assets/img/shop.png';
import { Link } from 'react-router-dom';
import authService from 'services/auth-services';

const Home = () => {

    const products = [
        {
            "id": 1,
            "name": "Uttar Pradesh",
            "description": "Lucknow"
        },
        {
            "id": 2,
            "name": "Gujarat",
            "description": "Gandhinagar"
        },
        {
            "id": 3,
            "name": "Karnataka",
            "description": "Bengaluru"
        },
        {
            "id": 4,
            "name": "Punjab",
            "description": "Chandigarh"
        },
        {
            "id": 5,
            "name": "Maharashtra",
            "description": "Mumbai"
        }
    ]

    return (
        <div>
            <div class="container-fluid text-center container-img">
                <div class="container-shadow">
                    <img src={homeimg} class="img" alt="CD" />
                    <div class="vinilo-text"><h2>Vinilos</h2></div>
                    <div class="cd-text"><h2>CD's</h2></div>
                </div>
            </div>
            <div class="container-fluid text-center container-newproducts">
                <h2 id="title-products">NUEVOS PRODUCTOS</h2>
                <div class="row">
                    {products.map((product) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-sm-6" id="product-container">
                                <div class="card">
                                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/1150690/capsule_616x353.jpg?t=1655277094" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{product.name}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" id="container-button-products"><Link to="/register"><input type="button" value="Ver productos" className="primary-button login-button" /></Link></div>
                    <div class="col-4"></div>
                </div>
            </div>
            <div class="container-fluid text-center container-about-us">
                <div class="container-filter">
                    <img src={shopimg} class="img2" alt="CD" />
                </div>
                <h2 id="title-about-us">¿QUIÉNES SOMOS?</h2>
                <div class="container-info">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi pariatur reiciendis beatae porro corporis eveniet itaque, hic vitae! Delectus asperiores laudantium fugiat illo, eius dolor totam aut. Porro, qui.
                    </p>
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" id="container-button-products"><Link to="/register"><input type="button" value="Conocenos" className="primary-button login-button" /></Link></div>
                    <div class="col-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;