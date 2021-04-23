import React from 'react';
import icon from '../../images/icon.svg'
import './Card.css'

function Card(props) {
  return (
    <div className="card-container">
      <div className="icon-background">
        <img src={icon} alt=""/>
      </div>
      <div className="title-description">
        <h2>Popular Uses Of The Internet</h2>
        <p>Many of us have at least been tempted at the flashy array of photo printers which seemingly leap off the shelves at even the least tech-savvy. </p>
      </div>
    </div>
  );
};

export default Card;