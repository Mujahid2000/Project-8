import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardsDetails from "../CardsDetails/CardsDetails";

const CardDetails = () => {
  const [card, setCard] = useState({});

  const { id } = useParams();

  const cards = useLoaderData();

  useEffect(() => {
    const cardDetails = cards.find((card) => card.id == id);
    setCard(cardDetails);
  }, [id, cards]);
  console.log(card);
  return (
    <div>
      <CardsDetails cards={card}></CardsDetails>
    </div>
  );
};

export default CardDetails;
