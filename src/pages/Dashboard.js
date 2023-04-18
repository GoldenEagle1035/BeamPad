
import { useEffect, useState } from "react";

import bannerImg from '../assets/images/bannerImg.webp';

import PropertyItem from "../components/PropertyItem";

const Dashboard = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col gap-[10px] p-[20px]">
            <div className="relative rounded-xl bg-[#dc275150]">
                <img className="w-full h-[300px] object-cover rounded" src={bannerImg} alt="" />
                <div className="absolute top-16 left-16 w-auto text-4xl font-bold text-white">Buy Your First Real Estate in Seconds</div>
                <div className="absolute top-28 left-16 w-auto text-2xl text-white">The world’s first NFT marketplace backed by real-world properties</div>
                <button className="absolute top-44 left-16 w-[200px] p-[10px] rounded-xl bg-white text-lg font-bold text-[#dc2751] text-center">JOIN PRESALE NOW</button>
                <button className="absolute top-44 left-72 w-[200px] p-[10px] rounded-xl bg-[#dc2751] border-1 border-white text-lg font-bold text-white text-center">HOW IT WORKS</button>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-bold text-2xl text-black">Discover New Properties</div>
                <div className="flex flex-row">
                    <PropertyItem />
                    <PropertyItem />
                    <PropertyItem />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;