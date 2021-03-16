import check from '../../images/check.svg'
import './Price.css'

function Price() {
  return(
    <div className="containerPrice">
      <div className="titlePrice">
        <p>Premium Pricing</p>
        <div className="numberContain">
          <p className="number">$59</p>
          <p className="month">/ month</p>
        </div>
      </div>  
      <div className="descriptionPackage">
        <p>Many of us have at least been tempted at the flashy array of photo printers which seemingly leap
          off the shelves at even the least tech-savvy. </p>
      </div>
      <div className="beneficContainer">
        <div className="checkBenefic">
          <img src={check} alt=""/>
          <p>Unmatched Toner Cartridge</p>
        </div>
        <div className="checkBenefic">
          <img src={check} alt=""/>
          <p>An Ugly Myspace Profile Will Sure</p>
        </div>
        <div className="checkBenefic">
          <img src={check} alt=""/>
          <p>Buying Used Electronic Test</p>
        </div>
        <div className="checkBenefic">
          <img src={check} alt=""/>
          <p>Where Can You Find Unique</p>
        </div>
      </div>
      <button className="buy">Click to buy</button>
    </div>
  );
}

export default Price