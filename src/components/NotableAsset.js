
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Place,
    Bolt
} from '@mui/icons-material';
import house_4 from '../assets/images/house-4.png';
import tether from '../assets/images/tether.png';

const NotableAsset = () => {

    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col gap-[10px] m-[10px] bg-white border border-gray-300 rounded-xl overflow-hidden drop-shadow-xl"
            onClick={(e) => { navigate("/detail") }}
        >
            <div className="relative w-full h-[200px] hover:cursor-pointer">
                <img className="w-full h-full object-cover" src={house_4} alt="" />
            </div>
            <div className="w-full flex flex-col gap-[10px] p-[20px]">
                <div className="text-sm font-bold text-gray-700">Bedroom Studio Apartment Near of the City Center</div>
                <div className="flex flex-row">
                    <div className="w-1/2 flex flex-col gap-[5px]">
                        <div className="text-xs text-gray-500">FLOOR</div>
                        <div className="flex flex-row gap-[5px] items-center">
                            <img className="w-[10px] h-[10px] object-cover" src={tether} alt="" />
                            <div className="text-sm font-bold text-gray-700">50</div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-[5px]">
                        <div className="text-xs text-gray-500">TOTAL VOLUME</div>
                        <div className="flex flex-row gap-[5px] items-center">
                            <img className="w-[10px] h-[10px] object-cover" src={tether} alt="" />
                            <div className="text-sm font-bold text-gray-700">100,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotableAsset;