import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import chip from "../images/chip.png";
import logo from "../images/logoPlaceholder.png";

import { CARDICON } from "./constants";


function CardDisplayFront({
  cardName,
  cardNumber,
  expMonth,
  expYear,
  cvv,
  cardType,
  flipCard, setFlipCard
}) {
  return (
    <div className="card-front px-3 mt-5" onClick={() => setFlipCard(!flipCard)}>
      <Row className="justify-content-end align-items-center">
        <div className="cc-imgs">
          {!cardType ? (
            <img src={logo} alt="" className="logo"></img>
          ) : (
            <img src={CARDICON[cardType]} alt="" className="logo"></img>
          )}
        </div>
      </Row>
      <Row className="">
        <div className="cc-imgs ms-2">
          <img src={chip} alt="creditcard chip" className="chip"></img>
        </div>
        {(cardType === "amex") && (<p className="ccv-front">{cvv}</p>)}
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

    </div>
  );
}

export default CardDisplayFront;
