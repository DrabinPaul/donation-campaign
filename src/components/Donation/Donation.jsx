import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import Donated from "../Donated/Donated";


const Donation = () => {
    const donations = useLoaderData();
    const [appliedDonation, setAppliedDonation] = useState([]);
    const [seeAll, setSeeAll] = useState(4);

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const appliedDonationArray = [];
            for (const id of storedDonationIds) {
                const donationApplied = donations.find(donation => donation.id === id);
                if (donationApplied) {
                    appliedDonationArray.push(donationApplied);
                }
            }
            setAppliedDonation(appliedDonationArray);
            console.log(donations, storedDonationIds, appliedDonationArray);
        }
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-12 p-5 lg:p-0">
                {
                    appliedDonation?.slice(0, seeAll).map(donated => <Donated key={donated.id} donated={donated}></Donated>)
                }
            </div>
            <div className="flex justify-center pt-5 pb-5">
                {appliedDonation.length > 3 && (
                    <div>
                        <button
                            onClick={() => setSeeAll(appliedDonation.length)}
                            className="px-4 py-2 bg-[#009444] text-white font-medium rounded-lg"
                        >
                            See All
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Donation;

