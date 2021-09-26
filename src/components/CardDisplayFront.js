import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chip from "../images/chip.png";

function CardDisplayFront({ cardName, cardNumber, expMonth, expYear, cvv }) {
  return (
    <div className="card-front p-3 mt-5">
        <Row className="justify-content-between mt-1">
            <div className="cc-imgs ms-2">
                <img src={chip} alt="creditcard chip" className="chip m-0"></img>
            </div>
            <div className="cc-imgs">
            LOGO
            </div>
        </Row>
      <Row className="justify-content-center mt-4 mb-3">
        {!cardNumber ? "0000 0000 0000 0000" : (
        <p className="text-center">{cardNumber}</p>
        )}
      </Row>
      <Row className="mb-0">
        <Col className="mb-0">
          <div>
            <p className="mb-0">Card Holder</p>
            <p>{cardName}</p>
          </div>
        </Col>
        <Col className="mb-0">
          <div>
            <p className="mb-0">Expires</p>
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
