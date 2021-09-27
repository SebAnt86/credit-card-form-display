import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import chip from "../images/chip.png";
import amex from "../images/amex.png";
import diners from "../images/diners.png";
import discover from "../images/discover.png";
import visa from "../images/visa.png";
import masterCard from "../images/masterCard.png";
import jcb from "../images/jcb.png";
import logo from "../images/logoPlaceholder.png";

//import { useState } from "react";

function CardDisplayFront({
  cardName,
  cardNumber,
  expMonth,
  expYear,
  cvv,
  cardType,
}) {
 

  const cardIcons = {
    amex,
    diners,
    discover,
    visa,
    masterCard,
    jcb
  };


  return (
    <div className="card-front px-3 mt-5">
      <Row className="justify-content-end align-items-center">
        <div className="cc-imgs">
          {!cardType ? (
            <img src={logo} alt="" className="logo"></img>
          ) : (
            <img src={cardIcons[cardType]} alt="" className="logo"></img>
          )}
        </div>
      </Row>
      <Row>
        <div className="cc-imgs ms-2 ">
          <img src={chip} alt="creditcard chip" className="chip"></img>
        </div>
      </Row>
      <Row className="justify-content-center mt-1 mb-1 card-number">
        <p className="text-center mb-0">
          {!cardNumber ? "0000 0000  0000  0000" : cardNumber}
        </p>
      </Row>
      <Row className="mb-0">
        <Col xs={9} className="">
          <Row className="card-holder">
            <p className="card-label">Card Holder</p>
            <p className="mb-1">
              {!cardName ? "XXXXX XXXXXXXX" : cardName.toUpperCase()}
            </p>
          </Row>
        </Col>
        <Col xs={2} className="mb-0">
          <div>
            <p className="card-label">Expires</p>
            <p>
              <span>{!expMonth ? "MM" : expMonth}</span>/
              <span>{!expYear ? "YY" : expYear.toString().slice(-2)}</span>
            </p>
          </div>
        </Col>
      </Row>

      <p>{cvv}</p>
    </div>
  );
}

export default CardDisplayFront;
