
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Place,
    Bolt,
    Edit
} from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import house_1 from '../assets/images/house-1.png';
import tether from '../assets/images/tether.png';

const PropertyItem = () => {

    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col gap-[10px] m-[10px] bg-white border border-gray-300 rounded-xl overflow-hidden"
            onClick={(e) => { navigate("/detail") }}
        >
            <div className="relative w-full h-[200px] hover:cursor-pointer">
                <img className="w-full h-full object-cover" src={house_1} alt="" />
                <div className="absolute top-5 left-5 p-[2px] rounded-xl border border-white bg-transparent">
                    <div className="px-[10px] py-[5px] rounded-lg bg-white text-xs text-[#377eff]">
                        74 DAYS LEFT
                    </div>
                </div>
                <div className="absolute bottom-5 left-5 w-[50px] h-[50px] p-[2px] rounded-full border border-white bg-transparent flex justify-center items-center">
                    <div className="w-full h-full p-[5px] rounded-full bg-white flex justify-center items-center">
                        <div className="text-sm text-[#377eff]">
                            75%
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-5 right-5 p-[2px] rounded-xl border border-[#377eff] bg-transparent">
                    <div className="p-[5px] rounded-lg bg-[#377eff] flex justify-center items-center">
                        <Bolt className="text-white" sx={{ fontSize: 15 }} />
                        <div className="text-xs text-white">FEATURED</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <div className="mx-[20px] text-basic text-gray-700 py-[10px]">Bedroom Studio Apartment Near of the City Center</div>
                <div className="mx-[20px] flex flex-row gap-[5px] items-center">
                    <Place className='text-[#377eff]' sx={{ fontSize: 20 }} />
                    <div className="text-sm text-gray-400">Manchester, United Kingdom</div>
                </div>
                <LinearProgress className="mx-[20px] my-[5px]" variant="determinate" value={75} sx={{ height: 5, borderRadius: 5 }} />
                <div className="mx-[20px] my-[5px] flex flex-row gap-[5px] items-center">
                    <div className="text-gray-700 text-sm">50</div>
                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                    <div className="text-gray-700 text-sm">/ REATS</div>
                </div>
                <div className="flex flex-row bg-gray-100 items-center border-gray-300 py-[10px]">
                    <div className="w-1/3 flex flex-col gap-[5px] items-center border-r border-gray-300">
                        <div className="text-xs text-gray-400">Returns</div>
                        <div className="text-xs text-gray-700">30%</div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-[5px] items-center border-r border-gray-300">
                        <div className="text-xs text-gray-400">Dividends</div>
                        <div className="text-xs text-gray-700">$200,000</div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-[5px] items-center">
                        <div className="text-xs text-gray-400">Left</div>
                        <div className="text-xs text-gray-700">10/1000</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center mb-[10px]">
                <button className="rounded-xl bg-[#377eff] px-[20px] py-[5px] text-sm text-white">INVEST NOW</button>
            </div>
        </div>
    );
};

export default PropertyItem;