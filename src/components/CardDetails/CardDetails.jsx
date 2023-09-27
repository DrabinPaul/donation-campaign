import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localstorage";
import { useEffect, useState } from "react";

const CardDetails = () => {
    const { id } = useParams()
    const idInt = parseInt(id);
    const [category, setCategory] = useState([]);


    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then(data => {
                const job = data.find((job) => job.id === idInt);
                setCategory(job);
            }).catch((error) => {
                console.error("Error fetching data:", error);
            });

    }, [idInt])

    const buttonStyle = {
        backgroundColor: category.color_text,
    };

    const handleDonation = () => {
        saveDonation(idInt);
        toast("You have successfully donated!");
    }


    return (
        <div className="flex justify-center items-center relative mt-2 p-5 lg:p-0">
            <div className="justify-center items-center w-[1100px]">
                <div className=" relative ">
                    <div className="flex justify-center items-center">
                        <img src={category.picture} className="rounded-t-lg w-full h-[300px] md:h-[400px] lg:h-[500px]" />
                    </div>
                    <div className="absolute bg-black bg-opacity-60 inset-x-0 h-20 bottom-0">
                        <button
                            onClick={handleDonation}
                            style={buttonStyle}
                            className="text-white font-bold left-3 my-5 absolute p-2 ml-8 rounded-md"
                        >
                            Donation ${category.price}
                        </button>
                        <ToastContainer />
                    </div>
                </div>
                <h1 className="font-bold text-4xl pt-3">{category.title}</h1>
                <p className="font-normal text-base text-[#0B0B0BB3] pt-2 pb-2">{category.description}</p>
            </div>
        </div>

    );
};

export default CardDetails;