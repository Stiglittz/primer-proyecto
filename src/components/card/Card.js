import icon from '../../images/card-icon.svg'
import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt=""/>
      </div>
      <div className="card-description">
        <h1 className="card-tile">{props.title}</h1>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card