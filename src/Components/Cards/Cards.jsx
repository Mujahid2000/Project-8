import Card from "./Card";

const Cards = ({ cards }) => {


    return (

        <div className="grid  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-9 pb-10 px-5">
            {
                cards?.map(card => <Card key={card.id} cards={card}></Card>)

            }
        </div>
    );
};

export default Cards;