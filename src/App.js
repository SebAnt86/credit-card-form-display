import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import CardForm from "./components/CardForm";
import CardDisplayFront from "./components/CardDisplayFront";
import CardDisplayBack from "./components/CardDisplayBack";
import ShowCards from "./components/ShowCards";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [cards, setCards] = useState([]);
  const [cardType, setCardType] = useState("");

  const [flipCard, setFlipCard] = useState(false);

  return (
    <div className="main-container d-flex flex-column justify-content-center align-items-center">
      <div className="mt-4 card-flip">
        Click on the card to see the other side
      </div>
      {!flipCard && (
        <CardDisplayFront
          cardName={cardName}
          cardNumber={cardNumber}
          expMonth={expMonth}
          expYear={expYear}
          cvv={cvv}
          cardType={cardType}
          flipCard={flipCard}
          setFlipCard={setFlipCard}
          cardPosition="absolute"
        />
      )}
      <CardForm
        setCardName={setCardName}
        setCardNumber={setCardNumber}
        setExpMonth={setExpMonth}
        setExpYear={setExpYear}
        setCvv={setCvv}
        setCards={setCards}
        cards={cards}
        cardName={cardName}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        cvv={cvv}
        cardType={cardType}
        setCardType={setCardType}
      />
      {flipCard && (
        <CardDisplayBack
          flipCard={flipCard}
          setFlipCard={setFlipCard}
          cardType={cardType}
          cvv={cvv}
          cardName={cardName}
          cardPosition="absolute"
        />
      )}

      {/* {cards.length > 0 ? (
        <ShowCards
          cards={cards}
          flipCard={flipCard}
          setFlipCard={setFlipCard}
          key={cards.cardId}
        />
      ) : (
        ""
      )} */}
    </div>
  );
}

export default App;
