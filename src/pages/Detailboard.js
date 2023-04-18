
import { useEffect, useState } from "react";
import {
    Place,
    Favorite,
    Bed,
    Share,
    Groups,
    PhotoLibrary,
    Visibility,
    Domain,
    AutoGraph,
    Money,
    Photo,
    ArrowCircleUp,
    ArrowCircleDown,
    Wallet,
    Sell
} from '@mui/icons-material';
import house_1 from '../assets/images/house-1.webp';

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

export const options = {
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
const values = [4000, 3000, 2000, 0, 1000, 3000, 2000, 4000]

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'All Time Avg. Price USD 5,2000',
            data: values,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Detailboard = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col m-[20px]">
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-row gap-[20px]">
                    <div className="relative w-7/12 h-[500px] rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src={house_1} alt="" />
                        <Favorite className="absolute top-5 right-5 p-[5px] rounded-full bg-white text-base font-bold text-[#dc2751]" />
                    </div>
                    <div className="w-5/12 flex flex-col gap-[15px]">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-[5px] rounded-full border border-[#dc2751] p-[5px] justify-center items-center">
                                <Bed className="text-[#dc2751]" sx={{ fontSize: 30 }} />
                                <div className="text-[#dc2751] text-base">5 Beds | 2,9990 sqft</div>
                            </div>
                            <Share className="text-black" sx={{ fontSize: 30 }} />
                        </div>
                        <div className="text-4xl font-bold text-black">Beautiful 5-Bedroom Villa with an Incredible View</div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-[5px] items-center">
                                <Groups sx={{ fontSize: 30 }} />
                                <div className="text-base text-black">800 Owners</div>
                            </div>
                            <div className="flex flex-row gap-[5px] items-center">
                                <PhotoLibrary sx={{ fontSize: 30 }} />
                                <div className="text-base text-black">1000 Total NFTs</div>
                            </div>
                            <div className="flex flex-row gap-[5px] items-center">
                                <Visibility sx={{ fontSize: 30 }} />
                                <div className="text-base text-black">0 Views</div>
                            </div>
                            <div className="flex flex-row gap-[5px] items-center">
                                <Favorite sx={{ fontSize: 30 }} />
                                <div className="text-base text-black">280 Favorites</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[5px] itemx-center">
                            <Place className='text-[#dc2751]' sx={{ fontSize: 30 }} />
                            <div className="text-xl text-gray-400">Los Angeles, United States of America</div>
                        </div>
                        <div className="flex flex-row gap-[20px]">
                            <div className="w-1/2 flex flex-col gap-[20px] p-[20px] border border-black rounded-lg">
                                <div className="text-sm text-black">Property price</div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg font-bold text-black">5,200,000 USD</div>
                                    <Domain className="text-gray-300" sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col gap-[20px] p-[20px] border border-black rounded-lg">
                                <div className="text-sm text-black">Dividend Yield</div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg font-bold text-black">7.79%</div>
                                    <AutoGraph className="text-gray-300" sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[20px]">
                            <div className="w-1/2 flex flex-col gap-[20px] p-[20px] border border-black rounded-lg">
                                <div className="text-sm text-black">5 YR Expected return</div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg font-bold text-black">49%</div>
                                    <Money className="text-gray-300" sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col gap-[20px] p-[20px] border border-black rounded-lg">
                                <div className="text-sm text-black">Value of One NFT</div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg font-bold text-black">10/1000</div>
                                    <Photo className="text-gray-300" sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="text-lg font-bold text-black">Price history</div>
                    <div className="flex flex-row gap-[20px]">
                        <div className="w-1/2">
                            <Line options={options} data={data} />
                        </div>
                        <div className="w-1/2">
                            <div className="text-basic text-gray-300">Current Price</div>
                            <div className="flex flex-row justify-between">
                                <div className="flex items-center">
                                    <div className="text-4xl font-bold text-black">5,200</div>
                                    <div className="text-2xl text-gray-300">(2.47ETH)</div>
                                </div>
                                <div className="flex items-center">
                                    <ArrowCircleUp sx={{ fontSize: 30 }} />
                                    <input type="number" placeholder="0" className="p-[2px] text-black text-base border border-gray-300" />
                                    <ArrowCircleDown sx={{ fontSize: 30 }} />
                                </div>
                            </div>
                            <button className="flex flex-row gap-[10px] p-[5px] rounded-lg bg-[#dc2751] text-basic font-bold text-white">
                                <Wallet />
                                <div>Buy Now</div>
                            </button>
                            <button className="flex flex-row gap-[10px] p-[5px] rounded-lg bg-white border border-[#dc2751] text-basic font-bold text-[#dc2751]">
                                <Sell />
                                <div>Make Offer</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detailboard;