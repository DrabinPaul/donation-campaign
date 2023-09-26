import React from 'react';

const Donated = ({ donated }) => {
    const { id, picture, price, title, category, color_text, color_card_bg, color_text_bg } = donated;
    const cardBodyStyle = {
        backgroundColor: color_card_bg,
        color: color_text,
    };
    const cardTextBg = {
        backgroundColor: color_text_bg
    }
    const buttonStyle = {
        backgroundColor: color_text
    };
    return (

        <div className="card md:card-side bg-base-100 lg:h-[200px] lg:w-[620px] mb-2">
            <figure><img className='md:h-full md:w-[250px]' src={picture} alt="picture" /></figure>
            <div className="pt-5 h-[200px] md:w-[500px] lg:w-[400px] md:rounded-r-lg pl-3" style={cardBodyStyle}>
                <h3 style={cardTextBg} className="w-1/3 rounded-lg text-base font-bold text-center pb-1">{category}</h3>
                <h2 className="card-title text-2xl font-bold pb-1">{title}</h2>
                <h2 className="card-title">${price}.00</h2>
                <div className="card-actions justify-start">
                    <button className="text-white font-bold my-5 absolute p-2 rounded-md" style={buttonStyle}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Donated;