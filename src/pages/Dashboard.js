
import { useEffect, useState } from "react";

import {
    AccountCircle,
    Message,
    Opacity,
    MonetizationOn,
    CalendarMonth,
    DateRange,
    Schedule,
    Person,
    Group,
    Favorite,
    Star,
} from "@mui/icons-material";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import FeaturedPropertyItem from "../components/FeaturedPropertyItem";
import UpcomingPropertyItem from "../components/UpcomingPropertyItem";
import CompletedPropertyItem from "../components/CompletedPropertyItem";
import NotableAsset from "../components/NotableAsset";

import tether from '../assets/images/tether.png';
import avatar_1 from '../assets/images/avatar-1.png';
import avatar_2 from '../assets/images/avatar-2.png';
import avatar_3 from '../assets/images/avatar-3.png';
import avatar_4 from '../assets/images/avatar-4.png';
import avatar_5 from '../assets/images/avatar-5.png';
import avatar_6 from '../assets/images/avatar-6.png';
import avatar_7 from '../assets/images/avatar-7.png';
import avatar_8 from '../assets/images/avatar-8.png';
import avatar_9 from '../assets/images/avatar-9.png';
import avatar_10 from '../assets/images/avatar-10.png';
import avatar_11 from '../assets/images/avatar-11.png';
import avatar_12 from '../assets/images/avatar-12.png';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const price_chart_options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'price chart',
        },
    },
};

export const profit_chart_options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'price chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const values = [4000, 3000, 2000, 0, 1000, 3000, 2000]

export const price_chart_data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'All Time Avg. Price USD 5,2000',
            data: values,
            borderColor: '#377eff',
            backgroundColor: '#377eff50',
        },
    ],
};

const labels_profit = ['Today', 'Year1', 'Year2', 'Year3', 'Year4', 'Year5'];
const values_profit = [20000, 21000, 22000, 23000, 24000, 25000]

export const profit_chart_data = {
    labels: labels_profit,
    datasets: [
        {
            fill: true,
            label: 'Profit',
            data: values_profit,
            borderColor: '#377eff',
            backgroundColor: '#377eff50',
        },
    ],
};

const Dashboard = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="w-full flex flex-col gap-[30px] p-[30px]">
            {/* <div className="relative rounded-xl bg-[#dc275150]">
                <img className="w-full h-[300px] object-cover rounded" src={bannerImg} alt="" />
                <div className="absolute top-16 left-16 w-auto text-4xl font-bold text-white">Buy Your First Real Estate in Seconds</div>
                <div className="absolute top-28 left-16 w-auto text-2xl text-white">The world’s first NFT marketplace backed by real-world properties</div>
                <button className="absolute top-44 left-16 w-[200px] p-[10px] rounded-xl bg-white text-lg font-bold text-[#dc2751] text-center">JOIN PRESALE NOW</button>
                <button className="absolute top-44 left-72 w-[200px] p-[10px] rounded-xl bg-[#dc2751] border-1 border-white text-lg font-bold text-white text-center">HOW IT WORKS</button>
            </div> */}
            <div className="flex flex-col">
                <div className="flex flex-row items-center ">
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="text-xl font-bold text-gray-700">Featured Items</div>
                        {/* <div className="rounded-full px-[8px] bg-gray-700 text-basic text-white">5</div> */}
                    </div>
                    {/* <div className="text-basic text-[#377eff] hover:cursor-pointer">See All</div> */}
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <FeaturedPropertyItem />
                    <FeaturedPropertyItem />
                    <FeaturedPropertyItem />
                    <FeaturedPropertyItem />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center ">
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="text-xl font-bold text-gray-700">Upcoming Offerings</div>
                        {/* <div className="rounded-full px-[8px] bg-gray-700 text-basic text-white">5</div> */}
                    </div>
                    {/* <div className="text-basic text-[#377eff] hover:cursor-pointer">See All</div> */}
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <UpcomingPropertyItem />
                    <UpcomingPropertyItem />
                    <UpcomingPropertyItem />
                    <UpcomingPropertyItem />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center ">
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="text-xl font-bold text-gray-700">Completed Offerings</div>
                        {/* <div className="rounded-full px-[8px] bg-gray-700 text-basic text-white">5</div> */}
                    </div>
                    {/* <div className="text-basic text-[#377eff] hover:cursor-pointer">See All</div> */}
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <CompletedPropertyItem />
                    <CompletedPropertyItem />
                    <CompletedPropertyItem />
                    <CompletedPropertyItem />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[30px]">
                <div className="w-full lg:w-1/2 mx-[10px] flex flex-col gap-[30px]">
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="w-[30px] h-[30px] bg-[#377eff] rounded-full flex justify-center items-center">
                            <Favorite className="text-white" sx={{ fontSize: 10 }} />
                        </div>
                        <div className="text-xl font-bold text-gray-700">Top Sellers</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[30px]">
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_1} alt="" className="w-[70px] h-[70px] rounded-full border-2 border-[#377eff]" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">Nael G</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">163.72</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_2} alt="" className="w-[70px] h-[70px] rounded-full border-2 border-[#377eff]" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">Degen Demons</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">163.72</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_3} alt="" className="w-[70px] h-[70px] rounded-full border-2 border-[#377eff]" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">Bored Clowns</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">149.58</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_4} alt="" className="w-[70px] h-[70px] rounded-full border-2 border-[#377eff]" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">ZOOBKO</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">123.73</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_5} alt="" className="w-[70px] h-[70px] rounded-full border-2 border-[#377eff]" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">implyse</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">103.56</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_6} alt="" className="w-[70px] h-[70px] rounded-full border-2 border-[#377eff]" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">Skere</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">87.83</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mx-[10px] flex flex-col gap-[30px]">
                    <div className="flex flex-row gap-[10px]">
                        <div className="w-[30px] h-[30px] bg-[#377eff] rounded-full flex justify-center items-center">
                            <Star className="text-white" sx={{ fontSize: 10 }} />
                        </div>
                        <div className="text-xl font-bold text-gray-700">Top Buyers</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[30px]">
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_7} alt="" className="w-[70px] h-[70px] rounded-full" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">Xiaoba_ART</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">123.1</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_8} alt="" className="w-[70px] h-[70px] rounded-full" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">J.pegVC</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">92.87</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_9} alt="" className="w-[70px] h-[70px] rounded-full" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">VISIONARY</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">83.43</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_10} alt="" className="w-[70px] h-[70px] rounded-full" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">Private Collector 1</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">64.54</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_11} alt="" className="w-[70px] h-[70px] rounded-full" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">Generation Wealth</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">61.98</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={avatar_12} alt="" className="w-[70px] h-[70px] rounded-full" />
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-basic font-bold text-gray-700">hichhaneh</div>
                                <div className="flex flex-row gap-[5px]">
                                    <img className="w-[15px] h-[15px] object-cover" src={tether} alt="" />
                                    <div className="text-sm text-gray-500">49.22</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center ">
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="text-xl font-bold text-gray-700">Notable Assets</div>
                    </div>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <NotableAsset />
                    <NotableAsset />
                    <NotableAsset />
                    <NotableAsset />
                    <NotableAsset />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center ">
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="text-xl font-bold text-gray-700">Top property Buys</div>
                    </div>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <NotableAsset />
                    <NotableAsset />
                    <NotableAsset />
                    <NotableAsset />
                    <NotableAsset />
                </div>
            </div>
            {/* <div className="m-0 lg:m-[10px] flex flex-col gap-[20px] rounded-xl border border-gray-300 p-[20px]">
                <div className="flex flex-row justify-between">
                    <div className="text-xl font-bold text-gray-700">Users</div>
                    <div className="flex flex-row py-[5px] rounded-lg border border-gray-300">
                        <div className="px-[5px] lg:px-[10px] flex flex-row items-center gap-[5px] lg:gap-[10px] border-r border-gray-300 hover:cursor-pointer">
                            <Person className="text-gray-300" sx={{ fontSize: 20 }} />
                            <div className="text-xs text-gray-300">Top Buyers</div>
                        </div>
                        <div className="px-[5px] lg:px-[10px] flex flex-row items-center gap-[5px] lg:gap-[10px] hover:cursor-pointer">
                            <Person className="text-[#377eff]" sx={{ fontSize: 20 }} />
                            <div className="text-xs text-gray-700">Top Sellers</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-row gap-[10px] justify-between items-center p-[10px] border-b border-gray-300">
                        <div className="flex flex-row items-center gap-[5px]">
                            <AccountCircle className="text-[#377eff]" sx={{ fontSize: 50 }} />
                            <div className="flex flex-row gap-[10px]">
                                <div className="text-sm text-gray-700">Mark Bernardo</div>
                                <div className="text-sm text-gray-400">14x Use</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[20px]">
                            <div className="text-sm text-gray-700">$15,210</div>
                            <Message className="text-gray-400 hover:cursor-pointer" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] justify-between items-center p-[10px] border-b border-gray-300">
                        <div className="flex flex-row items-center gap-[5px]">
                            <AccountCircle className="text-[#377eff]" sx={{ fontSize: 50 }} />
                            <div className="flex flex-row gap-[10px]">
                                <div className="text-sm text-gray-700">Willamina Fleming</div>
                                <div className="text-sm text-gray-400">14x Use</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[20px]">
                            <div className="text-sm text-gray-700">$15,210</div>
                            <Message className="text-gray-400 hover:cursor-pointer" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] justify-between items-center p-[10px] border-b border-gray-300">
                        <div className="flex flex-row items-center gap-[5px]">
                            <AccountCircle className="text-[#377eff]" sx={{ fontSize: 50 }} />
                            <div className="flex flex-row gap-[10px]">
                                <div className="text-sm text-gray-700">Cedric Kossoou</div>
                                <div className="text-sm text-gray-400">14x Use</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[20px]">
                            <div className="text-sm text-gray-700">$15,210</div>
                            <Message className="text-gray-400 hover:cursor-pointer" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] justify-between items-center p-[10px] border-b border-gray-300">
                        <div className="flex flex-row items-center gap-[5px]">
                            <AccountCircle className="text-[#377eff]" sx={{ fontSize: 50 }} />
                            <div className="flex flex-row gap-[10px]">
                                <div className="text-sm text-gray-700">Yves Adjanohoun</div>
                                <div className="text-sm text-gray-400">14x Use</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[20px]">
                            <div className="text-sm text-gray-700">$15,210</div>
                            <Message className="text-gray-400 hover:cursor-pointer" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] justify-between items-center p-[10px]">
                        <div className="flex flex-row items-center gap-[5px]">
                            <AccountCircle className="text-[#377eff]" sx={{ fontSize: 50 }} />
                            <div className="flex flex-row gap-[10px]">
                                <div className="text-sm text-gray-700">Barbara Liskov</div>
                                <div className="text-sm text-gray-400">14x Use</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[20px]">
                            <div className="text-sm text-gray-700">$15,210</div>
                            <Message className="text-gray-400 hover:cursor-pointer" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="m-0 lg:m-[10px] h-full flex flex-row justify-between items-center rounded-xl border border-gray-300 p-[20px]">
                <div className="w-[150px] h-auto lg:h-[150px] p-[20px] flex flex-col justify-center rounded-xl bg-[#ebf4f3]">
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center mb-[20px]">
                        <AccountCircle className="text-[#377eff]" sx={{ fontSize: 30 }} />
                    </div>
                    <div className="text-basic font-bold text-gray-700">$1,214,501</div>
                    <div className="text-sm text-gray-400">Total Use</div>
                </div>
                <div className="w-[150px] h-auto lg:h-[150px] p-[20px] flex flex-col justify-center rounded-xl bg-[#ebf4f3]">
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center mb-[20px]">
                        <CalendarMonth className="text-[#377eff]" sx={{ fontSize: 30 }} />
                    </div>
                    <div className="text-basic font-bold text-gray-700">$7,925</div>
                    <div className="text-sm text-gray-400">Use Today</div>
                </div>
                <div className="w-[150px] h-auto lg:h-[150px] p-[20px] flex flex-col justify-center rounded-xl bg-[#ebf4f3]">
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center mb-[20px]">
                        <Group className="text-[#377eff]" sx={{ fontSize: 30 }} />
                    </div>
                    <div className="text-basic font-bold text-gray-700">2,581</div>
                    <div className="text-sm text-gray-400">Total User</div>
                </div>
                <div className="w-[150px] h-auto lg:h-[150px] p-[20px] flex flex-col justify-center rounded-xl bg-[#ebf4f3]">
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center mb-[20px]">
                        <Opacity className="text-[#377eff]" sx={{ fontSize: 30 }} />
                    </div>
                    <div className="text-basic font-bold text-gray-700">$285,56</div>
                    <div className="text-sm text-gray-400">Average Use</div>
                </div>
            </div> */}
            {/* <div className="flex flex-col lg:flex-row gap-[10px]">
                <div className="w-full lg:w-1/2 m-0 lg:m-[10px] flex flex-col gap-[20px] rounded-xl border border-gray-300 p-[20px]">
                    <div className="flex flex-row justify-between">
                        <div className="text-xl font-bold text-gray-700">Statistics</div>
                        <div className="flex flex-row py-[5px] rounded-lg border border-gray-300">
                            <div className="px-[10px] lg:px-[10px] flex flex-row items-center gap-[5px] lg:gap-[10px] border-r border-gray-300 hover:cursor-pointer">
                                <Opacity className="text-gray-300" sx={{ fontSize: 20 }} />
                                <div className="text-sm text-gray-300">Amount</div>
                            </div>
                            <div className="px-[10px] lg:px-[10px] flex flex-row items-center gap-[5px] lg:gap-[10px] hover:cursor-pointer">
                                <MonetizationOn className="text-[#377eff]" sx={{ fontSize: 20 }} />
                                <div className="text-sm text-gray-700">Total</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Line options={price_chart_options} data={price_chart_data} />
                    </div>
                    <div className="flex flex-row py-[5px] rounded-lg border border-gray-300">
                        <div className="w-1/3 flex flex-row items-center items-center justify-center gap-[10px] border-r border-gray-300 hover:cursor-pointer">
                            <CalendarMonth className="text-[#377eff]" sx={{ fontSize: 20 }} />
                            <div className="text-sm text-gray-700">Month</div>
                        </div>
                        <div className="w-1/3 flex flex-row items-center justify-center gap-[10px] border-r border-gray-300 hover:cursor-pointer">
                            <DateRange className="text-gray-300" sx={{ fontSize: 20 }} />
                            <div className="text-sm text-gray-300">Week</div>
                        </div>
                        <div className="w-1/3 flex flex-row items-center justify-center gap-[10px] hover:cursor-pointer">
                            <Schedule className="text-gray-300" sx={{ fontSize: 20 }} />
                            <div className="text-sm text-gray-300">Day</div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 m-0 lg:m-[10px] flex flex-col gap-[20px] rounded-xl border border-gray-300 p-[20px]">
                    <div className="text-xl font-bold text-gray-700">Users Location</div>
                    <div className="h-full flex flex-col justify-between gap-[10px] px-[10px]">
                        <div className="flex flex-row gap-[10px] justify-between">
                            <div className="text-basic text-gray-400">South Africa</div>
                            <div className="text-basic text-gray-700">30%</div>
                        </div>
                        <div className="flex flex-row gap-[10px] justify-between">
                            <div className="text-basic text-gray-400">United Kingdom</div>
                            <div className="text-basic text-gray-700">23%</div>
                        </div>
                        <div className="flex flex-row gap-[10px] justify-between">
                            <div className="text-basic text-gray-400">Germany</div>
                            <div className="text-basic text-gray-700">10%</div>
                        </div>
                        <div className="flex flex-row gap-[10px] justify-between">
                            <div className="text-basic text-gray-400">Indonesia</div>
                            <div className="text-basic text-gray-700">7%</div>
                        </div>
                        <div className="flex flex-row gap-[10px] justify-between">
                            <div className="text-basic text-gray-400">Argentina</div>
                            <div className="text-basic text-gray-700">5%</div>
                        </div>
                        <div className="flex flex-row gap-[10px] justify-between">
                            <div className="text-basic text-gray-400">Others</div>
                            <div className="text-basic text-gray-700">25%</div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Dashboard;