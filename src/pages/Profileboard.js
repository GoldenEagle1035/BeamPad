
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
        <div className="w-full flex flex-col gap-[20px] p-[20px]">
            <div className="relative rounded-xl bg-[#377eff50] overflow-hidden">
                <img className="w-full h-[300px] object-cover" src={profile_banner} alt="" />
                <Edit className="absolute bottom-8 right-8 p-[10px] rounded-full bg-white text-gray-700" sx={{ fontSize: 40 }} />
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4 flex justify-center">
                    <div className="w-full lg:w-5/6 flex flex-col gap-[20px] px-[20px] py-[10px] lg:py-[30px] bg-white border border-gray-300 rounded-xl items-center">
                        <AccountCircle sx={{ color: '#377eff', fontSize: 100 }} />
                        <div className="pt-[5px] lg:pt-[20px] text-2xl font-bold text-gray-700 text-center">Demo Account</div>
                        <div className="text-lg text-gray-500 text-center">0xedd0e...c0f1ece</div>
                        <div className="py-[5px] lg:py-[20px] text-xl text-gray-500 text-center">To add biography, please edit your profile.</div>
                        <button className="rounded-xl bg-[#377eff] px-[20px] py-[5px] lg:py-[10px] text-xl font-bold text-white">Edit Profile</button>
                        <div className="py-[5px] lg:py-[20px] text-xl text-gray-500 text-center">Joined April 2023</div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 flex flex-col">
                    <div className="flex flex-row justify-between p-[20px] items-center">
                        <div className="flex flex-row gap-[20px] items-center">
                            <div className="flex flex-row gap-[10px] items-center hover:cursor-pointer">
                                <CreateNewFolder className="text-gray-500" sx={{ fontSize: 30 }} />
                                <div className="hidden lg:flex text-lg text-gray-500 text-center">My Properties</div>
                            </div>
                            <div className="flex flex-row gap-[10px] items-center hover:cursor-pointer">
                                <History className="text-gray-500" sx={{ fontSize: 30 }} />
                                <div className="hidden lg:flex text-lg text-gray-500 text-center">Transaction History</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[20px] items-center">
                            <div className="hidden lg:flex flex-row px-[10px] py-[5px] rounded-xl border border-gray-300 items-center">
                                <Search className="text-gray-300" sx={{ fontSize: 30 }} />
                                <input placeholder="Search by name" className="w-full text-basic focus:outline-none text-gray-500 bg-transparent" />
                            </div>
                            <div className="text-basic text-[#377eff] hover:cursor-pointer">View All</div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-[10px] px-[10px]">
                        <ProfilePropertyItem />
                        <ProfilePropertyItem />
                        <ProfilePropertyItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profileboard;