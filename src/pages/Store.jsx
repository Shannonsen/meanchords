import React from 'react';
import shopimg from 'assets/img/portada.png';
import { Link } from 'react-router-dom';
import shopServices from 'services/shop-services';
import { useState, useEffect } from 'react';
import 'styles/pages/store.scss';

const Store = () => {
    const [Discs, setDiscs] = useState([]);
    const [Categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const consulta = await shopServices.getAllDiscs();
                console.log(JSON.parse(consulta));
                setDiscs(JSON.parse(consulta));
            } catch (error) {
                console.log(error)
            }
        }
        async function getCategories() {
            try {
                const consulta = await shopServices.getAllCategories();
                console.log(JSON.parse(consulta));
                setCategories(JSON.parse(consulta));
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
        fetchMyAPI();

    }, []);

    const categoryFilter = async(e, id) =>{
        e.preventDefault();
        try {
            const consulta = await shopServices.getByCategory(id);
            setDiscs(JSON.parse(consulta))
        } catch (err) {
            alert(err)
        }
    };

    const titleFilter = async(e, value) =>{
        e.preventDefault();
        try {
            const consulta = await shopServices.getByTitle(value);
            setDiscs(JSON.parse(consulta))
        } catch (err) {
            alert(err)
        }
    };

    return (
        <div className="container-fluid container-store">
            <div className="container-filter">
                <img src={shopimg} className="img2" alt="CD" />
            </div>
            <h2 id="title-store">PRODUCTOS</h2>
            <div className="container-categories">
                {Categories.map((category) => {
                    return (
                        <button type="text" onClick={(e) => categoryFilter(e,category.TagId)} className="badge bg-dark badge-store">{category.Name}</button>
                    );
                })}
            </div>
            <div className='form-store'>
            <form onSubmit={(e) => titleFilter(e, title)}>
                <input type="text" id="title" placeholder="Búsqueda" onChange={(e) => setTitle(e.target.value)} className="input" />
                <button type="submit" className="badge bg-dark badge-store-filter">Buscar</button>
            </form>
            </div>
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
        </div>
    );
}

export default Store;