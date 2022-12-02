import Table from "components/administrator/table";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import salesService from "services/sales-service";
import '../styles/pages/discPanel.scss'

const SalesPanel = () => {
  const navigate = useNavigate();
  const [sales, setSales] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const consulta = await salesService.getAllSales();
                const data = JSON.parse(consulta).map(element => {
                  const dire = element.User.Address.Country + ", " + element.User.Address.City + ", " +
                  element.User.Address.Street + ", No." + element.User.Address.HouseNumber + ", CP: " +
                  element.User.Address.ZIP
                  const buttons = [sendSale, endSale, noSale]
                  return {
                    ID: element.SaleId,
                    Fecha: element.Date.split("T")[0],
                    Total: element.Total,
                    Cliente: element.User.Name + " " + element.User.LastName,
                    Direccion: dire,
                    Discos:  element.SaleDetails.map(disc => {return disc.NameDisc + " - Amount: " + disc.Amount}),
                    Estatus: buttons[element.State - 1](element.SaleId, element.State + 1),
                  }
                })
                setSales(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyAPI();
    }, []);

  const onUpdateSale = async (e, id, state) => {
    e.preventDefault()
      try{
        if (id){
          console.log(id, state);
          await salesService.putSale(id, state)
          .then(() => {
            alert("Se ha actualizado correctamente!")
            navigate("/a/pedidos");
            window.location.reload();
          })
        }
        
      }
      catch(err){
        alert(err)
      }
  }

  const sendSale = (id, state) => {
    return <button onClick={(e) => onUpdateSale(e, id, state)} className="btn btn-success">Enviar</button>
  }

  const endSale = (id, state) => {
    return <button onClick={(e) => onUpdateSale(e, id, state)} className="btn btn-danger">Terminar</button>
  }

  const noSale = (id, state) => {
    return <button className="btn btn-danger" disabled>Finalizado</button>
  }  


  return(
    <div className="content ">
      <h3>Pedidos</h3>
      <Table data={sales} />
    </div>
  )
}

export default SalesPanel;