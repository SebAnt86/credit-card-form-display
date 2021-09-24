import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

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
  const onAdd = (e) => {
    e.preventDefault();
    const newCard = {
      cardName,
      cardNumber,
      expMonth,
      expYear,
      cvv,
    };
    console.log(newCard.cardName);
    console.log(newCard.cardNumber);
    console.log(newCard.expMonth);
    console.log(newCard.expYear);
    console.log(newCard.cvv);
  };

  return (
    <>
      <Form className="form-style p-4" noValidate onSubmit={onAdd}>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="number" onChange={(e) =>setCardNumber(e.target.value)}/>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Card Name</Form.Label>
            <Form.Control type="text" onChange={(e) =>setCardName(e.target.value)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col xl={8}>
            <Form.Group className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <Row>
                <Col>
                  <Form.Select aria-label="Month select" onChange={(e) =>setExpMonth(e.target.value)}>
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
                  <Form.Select aria-label="Year select" onChange={(e) =>setExpYear(e.target.value)}>
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
              <Form.Control type="number" onChange={(e) =>setCvv(e.target.value)}/>
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
