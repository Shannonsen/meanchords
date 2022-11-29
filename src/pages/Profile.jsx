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
        <form onSubmit={editProfile} className="form-profile">
            {/*             <label for="exampleInputEmail1" class="form-label">Correo Actual</label>
            <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} /> */}

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
    );
}

export default Profile;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
