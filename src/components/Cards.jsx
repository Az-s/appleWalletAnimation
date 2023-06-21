import { useState, useEffect } from "react";
import { cards } from "../constants/index";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardElements = document.getElementsByClassName("card");
      const windowHeight = window.innerHeight;

      for (let i = 0; i < cardElements.length; i++) {
        const cardElement = cardElements[i];
        const { top, bottom } = cardElement.getBoundingClientRect();

        if (top < windowHeight / 2 && bottom > windowHeight / 2) {
          setActiveCard(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cardContainer = document.getElementsByClassName("card-container")[0];
    if (activeCard !== null) {
      const activeCardStyle = cards[activeCard].style;
      cardContainer.style.background = activeCardStyle.background;
      cardContainer.style.color = activeCardStyle.color;
    } else {
      cardContainer.style.background = "";
      cardContainer.style.color = "";
    }
  }, [activeCard]);

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          className={`card ${activeCard === index ? "active" : ""}`}
          key={card.id}
          style={{
            background: card.style.background,
            color: card.style.color,
          }}
        >
          <div className="block">
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
          <div className="cartIns">
            <h4>card #1</h4>
          </div>
          <div className="cartIns">
            <h4>card #2</h4>
          </div>
          <div className="cartIns">
            <h4>card #3</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
