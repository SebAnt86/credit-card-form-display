import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import { useState } from "react";

function CardForm({
  setCardName,
  setCardNumber,
  setExpMonth,
  setExpYear,
  setCvv,
  setSaveCard,
  saveCard,
  cardName,
  cardNumber,
  expMonth,
  expYear,
  cvv,
}) {
  const [error, setError] = useState({
    cvvErr: "invalid cvv",
    expDateErr: "invalid date",
  });

  const [valid, setValid] = useState({
    cvvValid: false,
    expDateValid: false,
  });

  const newCard = {
    cardName,
    cardNumber,
    expMonth,
    expYear,
    cvv,
  };

  const findDebitCardType = (cardNumber) => {
    const regexPattern = {
      MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
      VISA: /^4[0-9]{2,}$/,
      AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
      DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
      DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
      JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
    };
    for (const card in regexPattern) {
      if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card]))
        return card;
    }
    return "";
  };

  const cardType = findDebitCardType(newCard.cardNumber);
  console.log(cardType);

  // check if the card is expired
  const expDateValidation = () => {
    const currentMonth =
      (new Date().getMonth() + 1).toString.length === 1
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    //console.log(`${currentMonth}/${currentYear}`);
    if (currentMonth > newCard.expMonth && currentYear >= newCard.expYear) {
      //alert("invalid date");
      setValid({...valid, expDateValid: true});
      setError({...error, expDateErr: "Invalid expiry date!"})
    }
  };

  // check if the cvv is a valid digits number
  const cvvValidation = () => {
    if (cardType === "AMERICAN_EXPRESS" && newCard.cvv.length !== 4) {
      //alert("CVV invalid length for Amex");
      setValid({...valid, cvvValid: true});
      setError({...error, cvvErr: "Invalid CVV number for Amex!"})
    } else if (newCard.cvv.length !== 3) {
      //alert("CVV invalid length");
      setValid({...valid, cvvValid: true});
      setError({...error, cvvErr: "Invalid CVV number!"})
    }
  };

  // const cardNumberSpacing = (cardNum) => {
  //   if (cardType !== "") {
  //     if (cardType === "AMERICAN_EXPRESS") {
  //       return cardNum.splice(4, 0, " ");
  //     }
  //   }
  // };

  const onAdd = (e) => {
    e.preventDefault();

    //Validations field
    expDateValidation();
    cvvValidation();
  };

  return (
    <>
      <Form className="form-style p-4" noValidate onSubmit={onAdd}>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              name="number"
              maxlength="19"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Card Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCardName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col xl={8}>
            <Form.Group className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <Row>
                <Col>
                  <Form.Select
                    aria-label="Month select"
                    onChange={(e) => setExpMonth(e.target.value)}
                  >
                    <option>Month</option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </Form.Select>
                </Col>

                <Col>
                  <Form.Select
                    aria-label="Year select"
                    onChange={(e) => setExpYear(e.target.value)}
                  >
                    <option>Year</option>
                    <option value={new Date().getFullYear()}>
                      {new Date().getFullYear()}
                    </option>
                    <option value={new Date().getFullYear() + 1}>
                      {new Date().getFullYear() + 1}
                    </option>
                    <option value={new Date().getFullYear() + 2}>
                      {new Date().getFullYear() + 2}
                    </option>
                    <option value={new Date().getFullYear() + 3}>
                      {new Date().getFullYear() + 3}
                    </option>
                    <option value={new Date().getFullYear() + 4}>
                      {new Date().getFullYear() + 4}
                    </option>
                    <option value={new Date().getFullYear() + 5}>
                      {new Date().getFullYear() + 5}
                    </option>
                    <option value={new Date().getFullYear() + 6}>
                      {new Date().getFullYear() + 6}
                    </option>
                    <option value={new Date().getFullYear() + 7}>
                      {new Date().getFullYear() + 7}
                    </option>
                    <option value={new Date().getFullYear() + 8}>
                      {new Date().getFullYear() + 8}
                    </option>
                    <option value={new Date().getFullYear() + 9}>
                      {new Date().getFullYear() + 9}
                    </option>
                    <option value={new Date().getFullYear() + 10}>
                      {new Date().getFullYear() + 10}
                    </option>
                  </Form.Select>
                </Col>
                {valid.expDateValid && (<Form.Label className="m-0 text-danger ps-2">
                  {error.expDateErr}
                </Form.Label>)}
              </Row>
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setCvv(e.target.value)}
              />
               {valid.cvvValid && (<Form.Label className="m-0 text-danger ps-2">
                  {error.cvvErr}
                </Form.Label>)}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Save card details" />
          </Form.Group>
        </Row>

        <Row className="justify-content-center px-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default CardForm;
