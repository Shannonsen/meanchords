/* import React from 'react'; */
import 'styles/pages/details.scss';
/* import { Link } from 'react-router-dom'; */
import { useParams } from 'react-router-dom';
import shopServices from 'services/shop-services';
import { useEffect, useState } from 'react';

const Details = () => {
    const [Disc, setDisc] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchMyAPI(id) {
            try {
                const consulta = await shopServices.getDisc(id);
                console.log(JSON.parse(consulta));
                setDisc(JSON.parse(consulta));
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyAPI(id);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

        const handleAddCarrito = async (e) => {
            e.preventDefault();
            try {
                await shopServices.postShoppingCart(sessionStorage.getItem('userID'), Disc.DiscId).then(
                    () => {
                        alert("Producto agregado al carrito correctamente")
                    },
                    (error) => {
                        alert(error)
                    }
                );
            } catch (err) {
                alert(err)
            }
        };

    return (

        <div>
            <div className="container-fluid container-details">
                <div className="row">
                    <div className="col-5 container-img">
                        <img src={Disc.DiscImgUrl} id="img-disc" alt="" />
                    </div>
                    <div className="col-7 container">
                        <div className="container-name"> {Disc.Name}</div>
                        <div className="container-description"> {Disc.Author?.FullName} {Disc.Author?.ShortName}</div>
                        {Disc.Categories?.map((category) => {
                            return (
                                <span className="badge bg-dark">{category.Name}</span>
                            );
                        })}
                          <div className="container-description"> {Disc.Description}</div>
                          <div className="container-price"> {"$" + Disc.Price + " MXN"}</div>
                          <form onSubmit={handleAddCarrito}>
                            <button type="submit" className="primary-button button-carrito">Agregar al carrito</button>
                          </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;