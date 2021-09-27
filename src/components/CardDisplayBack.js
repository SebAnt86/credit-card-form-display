import Row from "react-bootstrap/Row";

function CardDisplayBack({ flipCard, setFlipCard, cardType, cvv }) {
  return (
    <div className="card-front mt-5" onClick={() => setFlipCard(!flipCard)}>
      <p className="magn-stripe mt-4">.............</p>
      
      <p className="signature">Authorised Signature</p>
      <Row className="sing-stripe justify-content-end align-items-center">
        <p className="cvv-back">{cardType !== "amex" ? cvv : ""}</p>
      </Row>
    </div>
  );
}

export default CardDisplayBack;
