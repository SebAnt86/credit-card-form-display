import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function CardForm() {
  return (
    <>
      <Form className="mx-5 mb-5 p-3">
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="number" placeholder="0000 0000 0000 0000" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Card Name</Form.Label>
            <Form.Control type="text" placeholder="Name Surname" />
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Month</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col>
          <Form.Label>.</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Year</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default CardForm;
