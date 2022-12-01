import React from 'react'
import { useState, useEffect } from 'react';
import 'styles/pages/profile.scss';
import { useNavigate } from 'react-router-dom';
import profileServices from 'services/profile-services';

const Profile = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    const navigate = useNavigate();
    /*  profile */
    const [name, setName] = useState(user.Name);
    const [lastname, setLastName] = useState(user.LastName);
    const email = user.Email;
    const [newEmail, setNewEmail] = useState(user.Email);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    /* address */
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [zip, setZip] = useState("");
    const [AllAddress, setAllAddress] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const consulta = await profileServices.getAllAddress(sessionStorage.getItem("userID"));
                console.log(JSON.parse(consulta));
                setAllAddress(JSON.parse(consulta));
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyAPI();
    }, []);

    const editProfile = async (e) => {
        alert(name, lastname, email, newEmail, password, newPassword)
        e.preventDefault();
        try {
            await profileServices.editprofile(name, lastname, email, newEmail, password, newPassword).then(
                () => {
                    const valuexd = {
                        Name: name,
                        LastName: lastname,
                        Email: newEmail,
                    }
                    sessionStorage.setItem("user", JSON.stringify(valuexd));
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

    const addAddress = async (e) => {
        e.preventDefault();
        try {
            await profileServices.postAddress(country, city, street, houseNumber, zip, sessionStorage.getItem("userID")).then(
                () => {
                    alert("Has agregado una nueva dirección a tu perfil")
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

    const deleteAddress = async (e) => {
        
    };

    
    

    return (
        <div>
            <form onSubmit={editProfile} className="form-profile">

                <label for="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="text" className="form-control" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

                <label for="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

                <label for="exampleInputEmail1" className="form-label">Apellido</label>
                <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} />

                <label className="form-label">Contraseña actual</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />

                <label className="form-label">Nueva contraseña</label>
                <input type="password" onChange={(e) => setNewPassword(e.target.value)} className="form-control" />
                <input type="submit" value="Editar perfil" className="primary-button2 edit-button" />
            </form>
            <div className="container-card-address">
                <h1>Direcciones</h1>
                {AllAddress.map((address) => {
                    return (
                        <form onSubmit={deleteAddress}>
                            <div className="container-card-address-individual">
                                <div className="card w-50 card-address">
                                    <div className="card-body">
                                        <h5 className="card-title">{address.City}, {address.Country}</h5>
                                        <p className="card-text">Calle {address.Street}, No. {address.HouseNumber}. CP: {address.ZIP} </p>
                                        <button type="submit" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    );
                })}
            </div>
            <form onSubmit={addAddress} className="form-profile">
                <label className="form-label">País</label>
                <input type="text" className="form-control" onChange={(e) => setCountry(e.target.value)} />

                <label className="form-label">Ciudad</label>
                <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} />

                <label className="form-label">Calle</label>
                <input type="text" className="form-control" onChange={(e) => setStreet(e.target.value)} />

                <label className="form-label">Numero de hogar</label>
                <input type="text" className="form-control" onChange={(e) => setHouseNumber(e.target.value)} />

                <label className="form-label">Zip</label>
                <input type="text" className="form-control" onChange={(e) => setZip(e.target.value)} />
                <input type="submit" value="Agregar dirección" className="primary-button2 edit-button" />
            </form>
        </div>
    );
}

export default Profile;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
