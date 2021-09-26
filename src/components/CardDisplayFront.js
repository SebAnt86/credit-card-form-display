import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import chip from "../images/chip.png";

function CardDisplayFront({ cardName, cardNumber, expMonth, expYear, cvv }) {
  return (
    <div className="card-front p-3 mt-5">
        <Row className="justify-content-end mt-1">
            <div className="cc-imgs">
            LOGO
            </div>
        </Row>
        <Row>
        <div className="cc-imgs ms-2 ">
                <img src={chip} alt="creditcard chip" className="chip mt-1"></img>
            </div>
        </Row>
      <Row className="justify-content-center mt-1 mb-1 card-number">
        <p className="text-center">{!cardNumber ? "0000 0000 0000 0000" : cardNumber}</p>
      </Row>
      <Row className="mb-0">
        <Col xs={9} className="">
          <Row className="card-holder">
            <p className="mb-1">Card Holder</p>
            <p className="mb-1">{!cardName ? "XXXXX XXXXXXXX" : cardName.toUpperCase()}</p>
          </Row>
        </Col>
        <Col xs={2} className="mb-0">
          <div>
            <p className="mb-1">Expires</p>
            <p>
              <span>{!expMonth ? "MM" : expMonth}</span>/<span>{!expYear ? "YY" : (expYear).toString().slice(-2)}</span>
            </p>
          </div>
        </Col>
      </Row>

      <p>{cvv}</p>
    </div>
  );
}

export default CardDisplayFront;
