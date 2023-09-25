import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, picture, title, category, color_text, color_card_bg, color_text_bg } = card;
    const cardBodyStyle = {
        backgroundColor: color_card_bg,
        color: color_text,
    };
    const cardTextBg = {
        backgroundColor: color_text_bg
    }
    return (
        <Link to={`/cardDetails/${id}`}>
        <div className="card card-compact  md:w-[350px] lg:w-[300px] bg-base-100">
            <figure>
                <img className="rounded-t-lg w-full h-[200px] lg:h-[170px] lg:w-[300px]" src={picture} alt="picture" />
            </figure>
            <div className="card-body rounded-b-lg" style={cardBodyStyle}>
                <h3 style={cardTextBg} className=" py-1 w-1/3 rounded-lg text-base font-bold text-center">{category}</h3>
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
      </Link>
    );
};

export default Card;