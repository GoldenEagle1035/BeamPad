
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Place,
    Bolt,
    Edit
} from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import house_3 from '../assets/images/house-3.png';
import tether from '../assets/images/tether.png';

const UpcomingPropertyItem = () => {

    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col gap-[10px] m-[10px] bg-white border border-gray-300 rounded-xl overflow-hidden drop-shadow-xl"
            onClick={(e) => { navigate("/detail") }}
        >
            <div className="relative w-full h-[200px] hover:cursor-pointer">
                <img className="w-full h-full object-cover" src={house_3} alt="" />
                <div className="absolute top-5 left-5 p-[2px] rounded-xl border border-white bg-transparent">
                    <div className="px-[10px] py-[5px] rounded-lg bg-white text-xs text-[#377eff]">
                        120 DAYS LEFT
                    </div>
                </div>
                <div className="absolute bottom-5 left-5 w-[50px] h-[50px] p-[2px] rounded-full border border-white bg-transparent flex justify-center items-center">
                    <div className="w-full h-full p-[5px] rounded-full bg-white flex justify-center items-center">
                        <div className="text-sm text-[#377eff]">
                            30%
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-5 right-5 p-[2px] rounded-xl border border-[#377eff] bg-transparent">
                    <div className="p-[5px] rounded-lg bg-[#377eff] flex justify-center items-center">
                        <Bolt className="text-white" sx={{ fontSize: 15 }} />
                        <div className="text-xs text-white">Upcoming</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <div className="mx-[20px] text-lg font-bold text-gray-700 py-[10px]">Bedroom Studio Apartment Near of the City Center</div>
                <div className="mx-[20px] flex flex-row gap-[5px] items-center">
                    <Place className='text-[#377eff]' sx={{ fontSize: 20 }} />
                    <div className="text-sm text-gray-400">Manchester, United Kingdom</div>
                </div>
                <div className="flex flex-col bg-gray-100 my-[5px]">
                    <div className="mx-[20px] my-[20px] flex flex-row gap-[5px] items-center justify-center">
                        <div className="text-gray-700 font-bold text-lg">2000 REATs</div>
                        <div className="text-gray-700 text-xs">/</div>
                        <img className="w-[10px] h-[10px] object-cover" src={tether} alt="" />
                        <div className="text-gray-700 text-xs">100,000</div>
                    </div>
                    <div className="flex flex-row items-center pb-[10px]">
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
            </div>
            <div className="flex flex-row justify-between mx-[20px] mb-[15px]">
                <div className="flex flex-row gap-[5px] items-center justify-center">
                    <img className="w-[13px] h-[13px] object-cover" src={tether} alt="" />
                    <div className="text-gray-700 font-bold text-lg">50</div>
                    <div className="text-gray-700 text-xs">/ REAT</div>
                </div>
                <button className="bg-[#377eff] px-[20px] py-[5px] text-sm font-bold text-white">Notify Me</button>
            </div>
        </div>
    );
};

export default UpcomingPropertyItem;