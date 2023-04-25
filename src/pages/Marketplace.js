
import { useEffect, useState } from "react";

import {
    ExpandCircleDown,
    Search,
    FileUpload,
    RemoveCircleOutline,
    Edit,
    GridView,
    TableRows,
    Today,
    ExpandMore
} from '@mui/icons-material';

import CompletedPropertyItem from "../components/CompletedPropertyItem";
import FeaturedPropertyItem from "../components/FeaturedPropertyItem";
import UpcomingPropertyItem from "../components/UpcomingPropertyItem";

const Marketplace = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="w-full flex flex-row gap-[10px] p-[30px]">
            <div className="w-full flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[10px]">
                        <div className="text-xl font-bold text-gray-700">Marketplace</div>
                        <div className="text-basic text-gray-300">Buy and Sell Real Estate NFTs Within Seconds</div>
                    </div>
                    <div className="mx-[10px] flex flex-col lg:flex-row gap-[5px] lg:gap-0 items-center justify-between py-[10px] border-y border-gray-300">
                        <div className="w-full lg:w-auto px-[10px] lg:px-[20px] py-[5px] flex flex-row justify-between items-center bg-gray-100 gap-[10px] rounded-full border border-gray-300 hover:cursor-pointer">
                            <div className="text-xs text-gray-300">Property Type</div>
                            <ExpandCircleDown className="text-gray-300" sx={{ fontSize: 20 }} />
                        </div>
                        <div className="w-full lg:w-auto flex px-[10px] lg:px-[20px] py-[5px] flex flex-row justify-between items-center bg-gray-100 gap-[10px] rounded-full border border-gray-300 hover:cursor-pointer">
                            <input placeholder="Search by Name" className="w-full lg:w-[100px] placeholder:text-gray-300 focus:outline-none bg-transparent text-xs text-gray-700" />
                            <Search className="text-gray-300" sx={{ fontSize: 20 }} />
                        </div>
                        <div className="w-full lg:w-auto px-[10px] lg:px-[20px] py-[5px] flex flex-row justify-between items-center bg-gray-100 gap-[10px] rounded-full border border-gray-300 hover:cursor-pointer">
                            <div className="text-xs text-gray-300">Country</div>
                            <ExpandCircleDown className="text-gray-300" sx={{ fontSize: 20 }} />
                        </div>
                        <div className="w-full lg:w-auto px-[10px] lg:px-[20px] py-[5px] flex flex-row justify-between items-center bg-gray-100 gap-[10px] rounded-full border border-gray-300 hover:cursor-pointer">
                            <div className="text-xs text-gray-300">Beds & Sqft</div>
                            <ExpandCircleDown className="text-gray-300" sx={{ fontSize: 20 }} />
                        </div>
                        <div className="w-full lg:w-auto px-[10px] lg:px-[20px] py-[5px] flex flex-row justify-between items-center bg-gray-100 gap-[10px] rounded-full border border-gray-300 hover:cursor-pointer">
                            <div className="text-xs text-gray-300">Price Range</div>
                            <ExpandCircleDown className="text-gray-300" sx={{ fontSize: 20 }} />
                        </div>
                        <div className="w-full lg:w-auto px-[10px] lg:px-[20px] py-[5px] flex flex-row justify-between items-center bg-gray-100 gap-[10px] rounded-full border border-gray-300 hover:cursor-pointer">
                            <div className="text-xs text-gray-300">Price:Low To High</div>
                            <ExpandCircleDown className="text-gray-300" sx={{ fontSize: 20 }} />
                        </div>
                        <div className="w-full lg:w-auto py-[5px] text-xs font-bold text-gray-500 text-center hover:cursor-pointer">Clear all filters</div>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <CompletedPropertyItem />
                        <FeaturedPropertyItem />
                        <CompletedPropertyItem />
                        <FeaturedPropertyItem />
                        <UpcomingPropertyItem />
                        <CompletedPropertyItem />
                        <FeaturedPropertyItem />
                        <UpcomingPropertyItem />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Marketplace;