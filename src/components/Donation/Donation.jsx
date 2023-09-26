import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import Donated from "../Donated/Donated";


const Donation = () => {
    const donations = useLoaderData();
    const [appliedDonation, setappliedDonation] = useState([]);
    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const appiledDonation = [];
            for (const id of storedDonationIds) {
                const donationapplied = donations.find(donationapplied => donationapplied.id === id);
                if (donationapplied) {
                    appiledDonation.push(donationapplied);
                }
            }
            setappliedDonation(appiledDonation);
            console.log(donations, storedDonationIds, appiledDonation);
        }
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-12 p-5 lg:p-0">
                {
                    appliedDonation?.map(donated =><Donated key={donated.id} donated={donated}></Donated> )
                }
            </div>
        </div>
    );
};

export default Donation;