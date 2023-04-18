
import { useEffect, useState } from "react";
import {
    Edit,
    AccountCircle,
    CreateNewFolder,
    History,
    Search
} from '@mui/icons-material';
import profile_banner from '../assets/images/profile_banner.png';

import ProfilePropertyItem from "../components/ProfilePropertyItem";

const Profileboard = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col gap-[20px] bg-gray-200 p-[20px]">
            <div className="relative rounded-xl bg-[#dc275150]">
                <img className="w-full h-[300px] object-cover rounded" src={profile_banner} alt="" />
                <Edit className="absolute bottom-8 right-8 p-[10px] rounded-full bg-white text-black" sx={{ fontSize: 50 }} />
            </div>
            <div className="flex flex-row">
                <div className="w-1/3">
                    <div className="flex flex-col gap-[20px] p-[20px] bg-white rounded-xl items-center">
                        <AccountCircle sx={{ color: '#dc2751', fontSize: 100 }} />
                        <div className="text-4xl font-bold text-black text-center">Demo Account</div>
                        <div className="text-2xl font-bold text-gray-500 text-center">0xedd0e...c0f1ece</div>
                        <div className="py-[30px] text-xl font-bold text-gray-500 text-center">To add biography, please edit your profile.</div>
                        <button className="rounded-xl bg-[#dc2751] p-[20px] text-xl font-bold text-white">Edit Profile</button>
                        <div className="py-[30px] text-xl font-bold text-gray-500 text-center">Joined April 2023</div>
                    </div>
                </div>
                <div className="w-2/3 flex flex-col">
                    <div className="flex flex-row justify-between p-[20px] items-center">
                        <div className="flex flex-row gap-[20px] items-center">
                            <div className="flex flex-row gap-[10px] items-center">
                                <CreateNewFolder className="text-gray-500" sx={{ fontSize: 30 }} />
                                <div className="text-xl text-gray-500 text-center">My Properties</div>
                            </div>
                            <div className="flex flex-row gap-[10px] items-center">
                                <History className="text-gray-500" sx={{ fontSize: 30 }} />
                                <div className="text-xl text-gray-500 text-center">Transaction History</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[20px] items-center">
                            <div className="flex flex-row p-[10px] rounded-xl bg-gray-300 items-center">
                                <Search className="text-gray-500" sx={{ fontSize: 30 }} />
                                <input placeholder="Search by name" className="w-full text-basic font-bold text-gray-500 bg-transparent"></input>
                            </div>
                            <div className="text-xl text-[#dc2751]">View All</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] px-[10px]">
                        <ProfilePropertyItem />
                        <ProfilePropertyItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profileboard;