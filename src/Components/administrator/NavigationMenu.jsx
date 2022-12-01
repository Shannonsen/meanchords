import { Link } from "react-router-dom";
import 'styles/components/navigationMenu.scss'

const NavigationMenu = () => {
  return(
    <>
    <nav className="navbar1 nav-color navbar-expand-lg">
      <ul className="navbar-nav me-auto mb-2 flex-sm-column">
        <span className="a-img"></span>
        <h3>Bienvenido admin!</h3>
        <span className="line"></span>
        <li className="nav-item text-dark"><Link to="/panel" ><a href="/">Panel</a></Link></li>
        <li className="nav-item text-dark"><Link to="/a/pedidos" ><a href="/">Pedidos</a></Link></li>
        <li className="nav-item text-dark"><Link to="/a/discos" ><a href="/">Discos</a></Link></li>
        <li className="nav-item text-dark"><Link to="/a/reportes" ><a href="/">Reporte</a></Link></li>
        <li className="nav-item text-dark"><Link to="/" ><a href="/">Salir</a></Link></li>
      </ul>
    </nav>
    
    </>
  )
}

export default NavigationMenu;