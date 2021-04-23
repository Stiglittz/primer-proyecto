import React from 'react';
import check from '../../images/check-circle-solid.svg';
import './price.css'

const Price = (props) => {
  return (
    <div className="price-container">
      <div className="title-price">
        <p>Premium Pricing</p>
      </div>
      <div className="number">
        <p>$59</p>
        <span>/ month</span>
      </div>
      <div className="description-price">
        <p>Many of us have at least been tempted at the flashy array of photo printers which seemingly leap off the shelves at even the least tech-savvy. </p>
      </div>
      <div className="check-list">
        <img className="check-icon" src={check} alt=""/>
        <p>Unmatched Toner Cartridge</p>
      </div>
      <div className="check-list">
        <img className="check-icon" src={check} alt=""/>
        <p>An Ugly Myspace Profile Will Sure</p>
      </div>
      <div className="check-list">
        <img className="check-icon" src={check} alt=""/>
        <p>Buying Used Electronic Test</p>
      </div>
      <div className="check-list">
        <img className="check-icon" src={check} alt=""/>
        <p>Where Can You Find Unique</p>
      </div>
      <div className="button-price">
        <button>Click to buy</button>
      </div>
    </div>
  );
};

export default Price;