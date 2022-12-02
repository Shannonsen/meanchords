import Card from "components/administrator/Card";
import discImg from "assets/img/disc-a.png"
import salesImg from "assets/img/sales-a.png"
import reportImg from "assets/img/report-a.png"

import "styles/pages/controlpanel.scss"


const ControlPanel = () => {
  return ( 
      <div className="contentt mt-4">
         <h3>Panel de control</h3>
         <div className="d-flex w-75 flex-wrap justify-content-between mt-2">
            <Card url="/a/pedidos" name="Pedidos" description="Administrar pedidos" img={salesImg}/>
            <Card url="/a/discos" name="Discos" description="Administrar y agregar discos" img={discImg}/>
            <Card url="/a/reporte" name="Reportes" description="Obtener reportes mensuales" img={reportImg}/>
         </div>
      </div>
   );
}

export default ControlPanel;