import React from 'react'
import { useState } from 'react';
import 'styles/pages/profile.scss';
import { useNavigate } from 'react-router-dom';
import profileServices from 'services/profile-services';

const Profile = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    const navigate = useNavigate();

    const [name, setName] = useState(user.Name);
    const [lastname, setLastName] = useState(user.LastName);
    const email = user.Email;
    const [newEmail, setNewEmail] = useState(user.Email);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

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

    return (
        <form onSubmit={editProfile} class="form-profile">
            {/*             <label for="exampleInputEmail1" class="form-label">Correo Actual</label>
            <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} /> */}

            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} />

            <label for="exampleInputEmail1" class="form-label">Apellido</label>
            <input type="text" class="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} />

            <label class="form-label">Contraseña actual</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" />

            <label class="form-label">Nueva contraseña</label>
            <input type="password" onChange={(e) => setNewPassword(e.target.value)} class="form-control" />
            <input type="submit" value="Editar perfil" className="primary-button2 edit-button" />
            {/*    <fieldset disabled>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo</label>
                    <input type="email" class="form-control" value={user.Email} />
                    <div id="emailHelp" class="form-text">No compartiremos tu correo con nadie más.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="text" class="form-control" value={user.Name} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Apellido</label>
                    <input type="text" class="form-control" value={user.LastName} />
                </div>
            </fieldset> */}
            {/*  <input type="button" value="Cerrar sesión" className="primary-button2" /> */}
            {/* <input type="button" value="Editar perfil" className="primary-button2 edit-button" data-bs-toggle="modal" data-bs-target="#exampleModal" /> */}
            {/*             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Editar datos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={editProfile}>
                                <label for="exampleInputEmail1" class="form-label">Correo</label>
                                <input type="email" class="form-control" onChange={(e) => setNewEmail(e.target.value)} />

                                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                <input type="text" class="form-control" onChange={(e) => setName(e.target.value)} />

                                <label for="exampleInputEmail1" class="form-label">Apellido</label>
                                <input type="text" class="form-control" onChange={(e) => setLastName(e.target.value)} />

                                <label class="form-label">Contraseña actual</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" />

                                <label class="form-label">Nueva contraseña</label>
                                <input type="password" onChange={(e) => setNewPassword(e.target.value)} class="form-control" />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </form>
    );
}

export default Profile;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
