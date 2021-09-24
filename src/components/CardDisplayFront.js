import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardDisplayFront({ cardName, cardNumber, expMonth, expYear, cvv }) {
  return (
    <div className="card-front p-3 mt-5">
      <Row className="justify-content-center mt-5">
        {!cardNumber ? "0000 0000 0000 0000" : (
        <p className="text-center">{cardNumber}</p>
        )}
      </Row>
      <Row>
        <Col>
          <div>
            <p>Card Holder</p>
            <p>{cardName}</p>
          </div>
        </Col>

        <Col>
          <div>
            <p>Expires</p>
            <p>
              <span>{expMonth}</span>/<span>{expYear}</span>
            </p>
          </div>
        </Col>
      </Row>

      <p>{cvv}</p>
    </div>
  );
}

export default CardDisplayFront;
