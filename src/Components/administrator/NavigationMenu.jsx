import { Link } from "react-router-dom";
import 'styles/components/navigationMenu.scss'
import panelImg from "../../assets/img/panel-a.png"
import discImg from "../../assets/img/disc-a.png"
import salesImg from "../../assets/img/sales-a.png"
import reportImg from "../../assets/img/report-a.png"
import exitImg from "../../assets/img/exit-a.png"
import discCHowellImg from "../../assets/img/homeimg.png"

const NavigationMenu = ({admin}) => {
  return(
    <>
    <nav className="navbar1 nav-color navbar-expand-lg">
      <ul className="navbar-nav me-auto mb-2 flex-sm-column flex-column">
        <img id="panel"className="w-100"  src={discCHowellImg} alt="Panel principal" />
        <h4>Bienvenido admin!</h4>
        <span className="line"></span>
        <li className="nav-item text-dark">
          <Link to="/panel" >
            <a href="/">
              <img id="panel"className="img-w"  src={panelImg} alt="Panel principal" /> 
              Panel
            </a>
          </Link>
        </li>
        <li className="nav-item text-dark">
          <Link to="/a/pedidos" >
            <a href="/">
              <img id="panel"className="img-w"  src={salesImg} alt="Pedidos" />
              Pedidos 
            </a>
          </Link>
        </li>
        <li className="nav-item text-dark">
          <Link to="/a/discos" >
            <a href="/">
              <img id="panel"className="img-w"  src={discImg} alt="Discos" />
              Discos
            </a>
          </Link>
        </li>
        <li className="nav-item text-dark">
          <Link to="/a/reportes" >
            <a href="/">
              <img id="panel"className="img-w"  src={reportImg} alt="Reportes" />
              Reporte
            </a>
          </Link>
        </li>
        <li className="nav-item mt-auto text-dark">
          <Link to="/" onClick={() => {admin(false)}}>
            <a href="/">
              <img id="panel"className="img-w"  src={exitImg} alt="Salir" />
              Salir
            </a>
          </Link>
        </li>
      </ul>
    </nav>
    
    </>
  )
}

export default NavigationMenu;