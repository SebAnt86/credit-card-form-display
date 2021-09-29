import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CARDICON, CARD_DISPLAY } from "./constants";

import logo from "../images/logoPlaceholder.png";

function CardDisplayBack({ flipCard, setFlipCard, cardType, cvv, cardName, cardPosition, }) {
  return (
    <div className={`card-display mt-5 pt-1 ${CARD_DISPLAY[cardPosition]}`} onClick={() => setFlipCard(!flipCard)}>
      <p className="magn-stripe mt-4 mb-0 pb-0"></p>
      <Row className="justify-content-end align-items-center">
        <div className="cc-imgs">
          {!cardType ? (
            <img src={logo} alt="" className="logo"></img>
          ) : (
            <img src={CARDICON[cardType]} alt="" className="logo"></img>
          )}
        </div>
      </Row>
      <p className="signature-space">Authorised Signature</p>
      <Row className="sing-stripe justify-content-between align-items-center">
          {cardName && (<Col xs={9} className="signature">{cardName}</Col>)}
        <Col xs={3} className="cvv-back">{cardType !== "amex" ? cvv : ""}</Col>
      </Row>
    </div>
  );
}

export default CardDisplayBack;
