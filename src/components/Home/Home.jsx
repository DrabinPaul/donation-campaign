import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";


const Home = () => {
    const [searchCards, setSearchCards] = useState([]);
    const [cards, setCards] = useState([]);

    const handleSearch = (search) => {
        const key = search.target.value.toLowerCase();
        const filters = searchCards.filter((cards) =>
            cards.category.toLowerCase().startsWith(key)
        );
        setSearchCards(filters);
        console.log(filters)
    };

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                setSearchCards(data);
                setCards(data);
                console.log(data)
            });
    }, []);

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            {searchCards.length > 0 ? (
                <Cards cards={searchCards}></Cards>
            ) : (
                <Cards cards={cards}></Cards>
            )}
        </div>
    );
};

export default Home;