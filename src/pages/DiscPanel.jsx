import shopServices from "services/shop-services";
import Table from "components/administrator/table";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import deleteImg from "assets/img/delete-a.png"
import editImg from "assets/img/edit-a.png"

import '../styles/pages/discPanel.scss'

const DiscPanel = () => {

  const [disc, setDiscs] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const consulta = await shopServices.getAllDiscs();
                const data = JSON.parse(consulta).map(element => {
                  return {ID: element.DiscId, Name: element.Name, Price: element.Price, Amount: element.Amount}
                })
                setDiscs(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyAPI();
    }, []);

    const edit = (id) => {
      return <Link to={`/a/discos/edit/${id}`} >
        <a href="/" className="btn btn-primary ">
          <img id="panel"className="img-wd"  src={editImg} alt="Editar" />
        </a>
      </Link>
    }
    
    const deleteDisc = (id) => {
      return <Link to={`/a/discos/`} >
        <a href="/" className="btn btn-danger">
          <img id="panel"className="img-wd"  src={deleteImg} alt="Eliminar" />
        </a>
      </Link>
    }

  return (
    <>
    <div className="content ">
      <h3>Administrar Discos</h3>
      <div className="add-disc w-75">
        <label className="mx-2">Agregar disco: </label>
        <Link to="/a/discos/add" ><a href="/" className="btn btn-success">Agregar</a></Link>
      </div>
      <Table data={disc} Editar={edit} Eliminar={deleteDisc} />
    </div>
    </>
  )
}

export default DiscPanel;