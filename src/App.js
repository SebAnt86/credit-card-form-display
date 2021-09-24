import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import CardForm from "./components/CardForm";
import CardDisplayFront from "./components/CardDisplayFront";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState([]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <CardDisplayFront
        cardName={cardName}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        cvv={cvv}
      />
      <CardForm
        setCardName={setCardName}
        setCardNumber={setCardNumber}
        setExpMonth={setExpMonth}
        setExpYear={setExpYear}
        setCvv={setCvv}
        setSaveCard={setSaveCard}
        saveCard={saveCard}
        cardName={cardName}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        cvv={cvv}
      />
    </div>
  );
}

export default App;
