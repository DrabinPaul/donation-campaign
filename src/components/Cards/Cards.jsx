import Card from "../Card/Card";


const Cards = ({cards}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 p-5 lg:p-0">
                {
                    cards?.map(card=><Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;