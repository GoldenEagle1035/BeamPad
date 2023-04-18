
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Place,
    Toll,
    Shuffle,
    CalendarMonth,
    Favorite
} from '@mui/icons-material';
import house_1 from '../assets/images/house-1.webp';

const ProfilePropertyItem = () => {

    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    return (
        <div className="w-1/2 h-auto flex flex-col gap-[10px] m-[20px] border border-gray-300 rounded-xl overflow-hidden"
            onClick={(e) => { console.log("asdf"), navigate("detail") }}
        >
            <div className="relative w-full h-[300px]">
                <img className="w-full h-full object-cover" src={house_1} alt="" />
                <div className="absolute top-5 left-5 w-auto p-[5px] rounded-xl border-2 border-[#dc2751] bg-white text-base font-bold text-[#dc2751]">Rental Property</div>
                <Favorite className="absolute top-5 right-5 p-[5px] rounded-full bg-white text-base font-bold text-[#dc2751]" />
                <div className="absolute bottom-20 right-5 w-auto p-[5px] rounded-xl border-2 border-[#dc2751] bg-white text-base font-bold text-[#dc2751]">Rented</div>
                <div className="absolute bottom-5 right-5 w-auto p-[5px] rounded-xl border-2 border-[#dc2751] bg-white text-base font-bold text-[#dc2751]">1 Bed</div>
            </div>
            <div className="w-full h-auto flex flex-col gap-[10px]">
                <div className="w-1/2 h-[50px] flex flex-row gap-[5px] items-center p-[10px] border border-[#13CF8F30] bg-[#13CF8F] rounded-r-full">
                    <div className="text-base font-bold text-white">215 USD*</div>
                    <div className="text-sm text-white">starting price</div>
                </div>
                <div className="mx-[20px] text-3xl font-bold text-black mb-[15px]">1-Bedroom Studio Apartment Near of the City Center</div>
                <div className="mx-[20px] flex flex-row gap-[5px] itemx-center">
                    <Place className='text-[#dc2751]' sx={{ fontSize: 30 }} />
                    <div className="text-2xl text-gray-400">Manchester, United Kingdom</div>
                </div>
                <div className="flex flex-row justify-between mx-[20px] mb-[15px] rounded-xl p-[10px] bg-gray-100">
                    <div className="flex flex-col gap-[5px] items-center">
                        <div className="text-lg font-bold text-[#dc2751]">38%</div>
                        <div className="text-sm">Expected Return</div>
                        <Toll sx={{ fontSize: 20 }} />
                    </div>
                    <div className="flex flex-col gap-[5px] items-center">
                        <div className="text-lg font-bold text-[#dc2751]">5.66%</div>
                        <div className="text-sm">Dividend Vield</div>
                        <Shuffle sx={{ fontSize: 20 }} />
                    </div>
                    <div className="flex flex-col gap-[5px] items-center">
                        <div className="text-lg font-bold text-[#dc2751]">Monthly</div>
                        <div className="text-sm">Dividend Frequency</div>
                        <CalendarMonth sx={{ fontSize: 20 }} />
                    </div>
                </div>
                <div className="mx-[20px] mb-[20px] flex flex-row justify-between">
                    <div className="flex flex-col gap-[5px]">
                        <div className="text-base text-gray-400">Price of Real Estate*</div>
                        <div className="text-xl font-bold text-black">215,000 USD</div>
                    </div>
                    <button className="p-[10px] rounded-xl bg-[#dc2751] text-white">OPTIONS</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePropertyItem;