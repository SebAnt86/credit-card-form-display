import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function CardForm() {

  const onAdd = (e) => {
    e.preventDefault();
    console.log("form submitted!");
  }

  return (
    <>
      <Form className="form-style p-4" noValidate onSubmit={onAdd}>
        <Row className="mt-0">
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Card Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col xl={8}>
            <Form.Group className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <Row>
                <Col>
                  <Form.Select aria-label="Month select">
                    <option>Month</option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </Form.Select>
                </Col>

                <Col>
                  <Form.Select aria-label="Year select">
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
              <Form.Control type="number" />
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
