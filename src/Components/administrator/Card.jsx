import { Link } from "react-router-dom";
import "../../styles/pages/controlpanel.scss"

const Card = ({url, name, description, img}) => {
  return (
    <Link to={url} className="w40 justify-content-center d-flex">
      <div className="card">
        <img src={img} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;