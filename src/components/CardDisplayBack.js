import Row from "react-bootstrap/Row";

import { CARDICON } from "./constants";

import logo from "../images/logoPlaceholder.png";

function CardDisplayBack({ flipCard, setFlipCard, cardType, cvv }) {
  return (
    <div className="card-front mt-5" onClick={() => setFlipCard(!flipCard)}>
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
      <p className="signature">Authorised Signature</p>
      <Row className="sing-stripe justify-content-end align-items-center">
        <p className="cvv-back">{cardType !== "amex" ? cvv : ""}</p>
      </Row>
    </div>
  );
}

export default CardDisplayBack;
