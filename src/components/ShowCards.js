import CardDisplayFront from "./CardDisplayFront";
import CardDisplayBack from "./CardDisplayBack";

//import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function ShowCards({ cards, flipCard, setFlipCard, deleteCard}) {
  return (
    <div>
      <ul className="mb-5 ps-0">
        {cards.map((card) => (
          <li key={card.cardId} className="card-list-element">
            {!flipCard && (
              <CardDisplayFront
                cardName={card.cardName}
                cardNumber={card.cardNumber}
                expMonth={card.expMonth}
                expYear={card.expYear}
                cvv={card.cvv}
                cardType={card.cardType}
                flipCard={flipCard}
                setFlipCard={setFlipCard}
                cardPosition="static"
              />
            )}
            {flipCard && (
              <CardDisplayBack
                flipCard={flipCard}
                setFlipCard={setFlipCard}
                cardType={card.cardType}
                cvv={card.cvv}
                cardName={card.cardName}
                cardPosition="static"
              />
            )}
            <Row className="justify-content-end mt-1">
              <span className="pe-4 delete-card" onClick={() => deleteCard(card.cardId)}>Delete Card</span>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowCards;
