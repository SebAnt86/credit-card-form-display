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
  const [cardType, setCardType] = useState("");

  //error message states
  const [cardNumErr, setCardNumErr] = useState("");
  const [cardNameErr, setCardNameErr] = useState("");
  const [cvvErr, setCvvErr] = useState("");
  const [expDateErr, setExpDateErr] = useState("");

  //validation state
  const [cardNameValid, setCardNameValid] = useState(true);
  const [cardNumValid, setCardNumValid] = useState(true);
  const [cvvValid, setCvvValid] = useState(true);
  const [expDateValid, setExpDateValid] = useState(true);

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

  //setCardType(findDebitCardType(cardNumber));
  //console.log(cardType);

  const cardNumValidation = () => {
    setCardType(findDebitCardType(cardNumber));
    if (!cardNumber) {
      setCardNumValid(true);
      setCardNumErr("Please enter the card number.");
    } else {
      setCardNumValid(false);
    }
    console.log(cardType);
  };

  const cardNameValidation = () => {
    if (!cardName) {
      setCardNameValid(true);
      setCardNameErr("Please enter the card holder's name.");
    } else {
      setCardNameValid(false);
    }
  };

  // check if the card is expired
  const expDateValidation = () => {
    const currentMonth =
      (new Date().getMonth() + 1).toString.length === 1
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    // console.log(`${currentMonth}/${currentYear}`);
    //console.log(expMonth, expYear);
    if (expMonth && expYear) {
      if (currentMonth > expMonth && currentYear >= expYear) {
        //alert("invalid date");
        setExpDateValid(true);
        setExpDateErr("Invalid expiry date!");
        //console.log(valid.expDateValid, error.expDateErr);
      } else {
        setExpDateValid(false);
      }
    } else {
      if (!expMonth) {
        setExpDateValid(true);
        setExpDateErr("Please select expiry month.");
      } else if (!expYear) {
        setExpDateValid(true);
        setExpDateErr("Please select expiry year.");
      } else {
        setExpDateValid(false);
      }
    }
  };

  // check if the cvv is a valid digits number
  const cvvValidation = () => {
    //setCardType(findDebitCardType(cardNumber));
    if (!cvv) {
      setCvvValid(true);
      setCvvErr("Please enter the CVV number.");
    } else {
      if (cardType === "AMERICAN_EXPRESS") {
        if (cvv.length !== 4) {
          //alert("CVV invalid length for Amex");
          console.log(cvv.length);
          setCvvValid(true);
          setCvvErr("Invalid Amex CVV number!");
        }else {
          setCvvValid(false);
        }
      } else if (cvv.length !== 3) {
        //alert("CVV invalid length");
        setCvvValid(true);
        setCvvErr("Invalid CVV number!");
      } else {
        setCvvValid(false);
      }
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

    //validation before submit
    cardNumValidation();
    expDateValidation();
    cvvValidation();
    cardNameValidation();

    console.log("cardNameValid: " + cardNameValid);
    console.log("cardNumValid: " + cardNumValid);
    console.log("expDateValid: " + expDateValid);
    console.log("cvvValid: " + cvvValid);
    console.log("----------------------");

    // if (
    //   !cardName ||
    //   !cardNumber ||
    //   !expMonth ||
    //   !expYear ||
    //   !cvv
    // ) {
    //   alert("check the fields!");
    if (!cardNameValid && !cardNumValid && !expDateValid && !cvvValid) {
      alert("submited!!!!!");

      setCardName("");
      setCardNumber("");
      setExpMonth("");
      setExpYear("");
      setCvv("");
      setCardNameValid(true);
      setCardNumValid(true);
      setExpDateValid(true);
      setCvvValid(true);
    }
    // }
  };

  return (
    <>
      <Form className="form-style p-4" noValidate onSubmit={onAdd}>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              name="card-number"
              maxLength="19"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              onBlur={cardNumValidation}
            />
            {cardNumValid && (
              <Form.Label className="m-0 text-danger ps-2">
                {cardNumErr}
              </Form.Label>
            )}
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Card Name</Form.Label>
            <Form.Control
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              onBlur={cardNameValidation}
            />
            {cardNameValid && (
              <Form.Label className="m-0 text-danger ps-2">
                {cardNameErr}
              </Form.Label>
            )}
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
                    value={expMonth}
                    onChange={(e) => setExpMonth(e.target.value)}
                    onBlur={expDateValidation}
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
                  {expDateValid && (
                    <Form.Label className="m-0 text-danger ps-2">
                      {expDateErr}
                    </Form.Label>
                  )}
                </Col>

                <Col>
                  <Form.Select
                    aria-label="Year select"
                    value={expYear}
                    onChange={(e) => setExpYear(e.target.value)}
                    onBlur={expDateValidation}
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
              </Row>
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                maxLength="4"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                onBlur={cvvValidation}
              />
              {cvvValid && (
                <Form.Label className="m-0 text-danger ps-2">
                  {cvvErr}
                </Form.Label>
              )}
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
