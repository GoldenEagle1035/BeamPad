
import { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
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
    Sell,
    ExpandMore,
    FormatListBulleted,
    LocalActivity,
    ChildCare,
    Pool,
    OutdoorGrill,
    FitnessCenter,
    Living,
    LocalParking,
    Wifi,
    LocalBar,
    Weekend,
    Spa,
    BabyChangingStation,
    SmokeFree,
    MeetingRoom,
    Deck,
    Details,
    Wysiwyg,
    Toll,
    Home,
    BarChart,
    Insights,
    Download
} from '@mui/icons-material';
import house_1 from '../assets/images/house-1.webp';
import map_1 from '../assets/images/map_01.png';

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
            borderColor: '#dc2751',
            backgroundColor: '#dc275150',
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
            borderColor: '#dc2751',
            backgroundColor: '#dc275150',
        },
    ],
};

const Detailboard = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="flex flex-row gap-[20px] m-[20px]">
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
                            <div className="w-1/2 flex flex-col gap-[20px] p-[20px] border border-gray-500 rounded-lg">
                                <div className="text-sm text-black">Property price</div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg font-bold text-black">5,200,000 USD</div>
                                    <Domain className="text-gray-300" sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col gap-[20px] p-[20px] border border-gray-500 rounded-lg">
                                <div className="text-sm text-black">Dividend Yield</div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg font-bold text-black">7.79%</div>
                                    <AutoGraph className="text-gray-300" sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[20px]">
                            <div className="w-1/2 flex flex-col gap-[20px] p-[20px] border border-gray-500 rounded-lg">
                                <div className="text-sm text-black">5 YR Expected return</div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg font-bold text-black">49%</div>
                                    <Money className="text-gray-300" sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col gap-[20px] p-[20px] border border-gray-500 rounded-lg">
                                <div className="text-sm text-black">Value of One NFT</div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg font-bold text-black">10/1000</div>
                                    <Photo className="text-gray-300" sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-[20px] m-[20px]">
                    <div className="text-lg font-bold text-black">Price history</div>
                    <div className="flex flex-row gap-[20px]">
                        <div className="w-1/2">
                            <Line options={price_chart_options} data={price_chart_data} />
                        </div>
                        <div className="w-1/2 flex flex-col gap-[20px]">
                            <div className="text-basic text-gray-300">Current Price</div>
                            <div className="flex flex-row justify-between">
                                <div className="flex items-center gap-[10px]">
                                    <div className="text-4xl font-bold text-black">5,200</div>
                                    <div className="text-2xl text-gray-300">(2.47ETH)</div>
                                </div>
                                <div className="flex items-center gap-[5px]">
                                    <ArrowCircleUp sx={{ fontSize: 30 }} />
                                    <input type="number" placeholder="0" className="p-[2px] text-black text-base border border-gray-300" />
                                    <ArrowCircleDown sx={{ fontSize: 30 }} />
                                </div>
                            </div>
                            <button className="flex flex-row justify-center gap-[10px] p-[20px] rounded-lg bg-[#dc2751] text-basic font-bold text-2xl text-white items-center">
                                <Wallet sx={{ fontSize: 30 }} />
                                <div>Buy Now</div>
                            </button>
                            <button className="flex flex-row justify-center gap-[10px] p-[20px] rounded-lg bg-white border border-[#dc2751] text-2xl font-bold text-[#dc2751] items-center">
                                <Sell sx={{ fontSize: 30 }} />
                                <div>Make Offer</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] m-[20px]">
                    <div className="">
                        <Accordion className="!shadow-none !rounded-2xl border border-gray-200">
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                            >
                                <div className="flex flex-row gap-[1px] items-center">
                                    <Sell className="text-black" sx={{ fontSize: 30 }} />
                                    <div className="text-lg font-bold text-black">Listing</div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="flex flex-col gap-[20px]">
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm font-bold text-black">Price</div>
                                        <div className="w-1/5 text-sm font-bold text-black">Ethereum</div>
                                        <div className="w-1/5 text-sm font-bold text-black">Expiration</div>
                                        <div className="w-1/5 text-sm font-bold text-black">From</div>
                                        <div className="w-1/5 text-sm font-bold text-black"> </div>
                                    </div>
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm text-black">$ 5200</div>
                                        <div className="w-1/5 text-sm text-black">2.88 ETH</div>
                                        <div className="w-1/5 text-sm text-black">7 Days</div>
                                        <div className="w-1/5 text-sm font-bold text-[#dc2751]">Gohard</div>
                                        <div className="w-1/5">
                                            <button className="rounded-xl bg-[#dc2751] p-[5px] text-sm font-bold text-white">BUY NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="">
                        <Accordion className="!shadow-none !rounded-2xl border border-gray-200">
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                            >
                                <div className="flex flex-row gap-[1px] items-center">
                                    <FormatListBulleted className="text-black" sx={{ fontSize: 30 }} />
                                    <div className="text-lg font-bold text-black">Offers</div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="flex flex-col gap-[20px]">
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm font-bold text-black">Price</div>
                                        <div className="w-1/5 text-sm font-bold text-black">Ethereum</div>
                                        <div className="w-1/5 text-sm font-bold text-black">Floor Difference</div>
                                        <div className="w-1/5 text-sm font-bold text-black">Expiration</div>
                                        <div className="w-1/5 text-sm font-bold text-black">From</div>
                                    </div>
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm text-black">$ 5200</div>
                                        <div className="w-1/5 text-sm text-black">2.88 ETH</div>
                                        <div className="w-1/5 text-sm text-black">1.9 % bello</div>
                                        <div className="w-1/5 text-sm text-black">about 4 hours</div>
                                        <div className="w-1/5 text-sm font-bold text-[#dc2751]">SuperNova</div>
                                    </div>
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm text-black">$ 5200</div>
                                        <div className="w-1/5 text-sm text-black">2.78 ETH</div>
                                        <div className="w-1/5 text-sm text-black">3.8 % bello</div>
                                        <div className="w-1/5 text-sm text-black">about 8 hours</div>
                                        <div className="w-1/5 text-sm font-bold text-[#dc2751]">MikelovesNFT</div>
                                    </div>
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm text-black">$ 5200</div>
                                        <div className="w-1/5 text-sm text-black">2.72 ETH</div>
                                        <div className="w-1/5 text-sm text-black">5.7 % bello</div>
                                        <div className="w-1/5 text-sm text-black">about 9 hours</div>
                                        <div className="w-1/5 text-sm font-bold text-[#dc2751]">June24x</div>
                                    </div>
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm text-black">$ 5200</div>
                                        <div className="w-1/5 text-sm text-black">2.55 ETH</div>
                                        <div className="w-1/5 text-sm text-black">7.7 % bello</div>
                                        <div className="w-1/5 text-sm text-black">about 10 hours</div>
                                        <div className="w-1/5 text-sm font-bold text-[#dc2751]">KevinCranel</div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="">
                        <Accordion className="!shadow-none !rounded-2xl border border-gray-200">
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                            >
                                <div className="flex flex-row gap-[1px] items-center">
                                    <LocalActivity className="text-black" sx={{ fontSize: 30 }} />
                                    <div className="text-lg font-bold text-black">Activity</div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="flex flex-col gap-[20px]">
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm font-bold text-black">Event</div>
                                        <div className="w-1/5 text-sm font-bold text-black">Price</div>
                                        <div className="w-1/5 text-sm font-bold text-black">From</div>
                                        <div className="w-1/5 text-sm font-bold text-black">To</div>
                                        <div className="w-1/5 text-sm font-bold text-black">Date</div>
                                    </div>
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm text-black">Sale</div>
                                        <div className="w-1/5 text-sm text-black">$ 5,000</div>
                                        <div className="w-1/5 text-sm text-black">MoneyMaster_</div>
                                        <div className="w-1/5 text-sm text-black">Gohard</div>
                                        <div className="w-1/5 text-sm font-bold text-[#dc2751]">2 days ago</div>
                                    </div>
                                    <div className="flex flex-row items-center mx-[10px]">
                                        <div className="w-1/5 text-sm text-black">Mint</div>
                                        <div className="w-1/5 text-sm text-black">$ 4,500 x 1,000</div>
                                        <div className="w-1/5 text-sm text-black">NullAddress</div>
                                        <div className="w-1/5 text-sm text-black">Multiple Accounts</div>
                                        <div className="w-1/5 text-sm font-bold text-[#dc2751]">2 days ago</div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] bg-gray-200 p-[20px]">
                    <div className="text-4xl font-bold text-black text-center py-[50px]">How much can you earn with this Property?*</div>
                    <div className="flex flex-row">
                        <div className="w-2/3 flex flex-col gap-[20px] pr-[20px] border-r border-gray-300">
                            <div className="flex flex-col gap-[10px]">
                                <div className="flex flex-row gap-[20px]">
                                    <div className="w-1/2 flex flex-col gap-[10px]">
                                        <div className="text-basic text-black">Initial Amount</div>
                                        <input placeholder="USD 20,000" type="number" className="p-[5px] bg-white rounded" />
                                    </div>
                                    <div className="w-1/2 flex flex-col gap-[10px]">
                                        <div className="text-basic text-black">Expected Annual Appreciaton</div>
                                        <input placeholder="2 %" type="number" className="p-[5px] bg-white rounded" />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-[20px]">
                                    <div className="w-1/2 flex flex-col gap-[10px]">
                                        <div className="text-basic text-black">Net Dividend Yield</div>
                                        <input placeholder="7.79 %" type="number" className="p-[5px] bg-white rounded" />
                                    </div>
                                    <div className="w-1/2 flex flex-col gap-[10px]">
                                        <div className="text-basic text-black">Holding Period</div>
                                        <input placeholder="5 Years" type="number" className="p-[5px] bg-white rounded" />
                                    </div>
                                </div>
                            </div>
                            <Line options={profit_chart_options} data={profit_chart_data} />
                        </div>
                        <div className="w-1/3 flex flex-col gap-[50px] ml-[20px]">
                            <div className="flex flex-col gap-[20px]">
                                <div className="text-lg text-black">Total Average Annualized Return</div>
                                <div className="text-basic font-bold text-black">9.79%</div>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="text-lg text-black">Total Rental Income</div>
                                <div className="text-basic font-bold text-black">USD 7,790</div>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="text-lg text-black">Expected Capital Appreciation</div>
                                <div className="text-basic font-bold text-black">USD 2,000</div>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="text-lg text-black">Total Return</div>
                                <div className="text-basic font-bold text-black">USD 9,790</div>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="text-lg font-basic text-gray-500">Total Expected Value After 5 Years</div>
                                <div className="text-4xl font-bold text-[#dc2751]">USD 29,790</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button className="rounded-xl bg-[#dc2751] p-[20px] text-xl text-white">BUY NOW</button>
                    </div>
                    <div className="text-sm text-gray-500 text-center mb-[20px]">This calculator is for illustrative purposes only. Buying a real-estate NFT carries risk and you may not receive the anticipated returns.</div>
                </div>
                <div className="flex flex-col gap-[20px] p-[50px]">
                    <div className="text-4xl font-bold text-black text-center py-[20px]">Overview</div>
                    <div className="flex flex-row gap-[50px]">
                        <div className="w-1/2 flex flex-col gap-[30px]">
                            <div className="text-lg font-bold text-black">About the Property</div>
                            <div className="text-basic text-black">Here you will find all available information regarding the specific property. For example, this might entail where the property is located, what makes it unique, and why it could interest you. Furthermore, Metropoly provides insights about market conditions and why our team believes that the property value will increase in the long term. We evaluate crucial aspects of the property, including the area, surrounding development, service charges, building quality, number of amenities, developer, and expected supply.</div>
                            <div className="text-basic text-black">All real estate offered on the Metropoly marketplace must pass a strict screening and selection process to provide users with the best opportunity to earn both rental yield and capital appreciation. In addition, we leverage data from leading third - party vendors to ensure that all of our internal research and analysis tools are accurate and reliable in current market conditions.</div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-[20px]">
                            <div className="flex flex-row">
                                <div className="w-1/5 flex flex-col items-center justify">
                                    <ChildCare className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Children's Play Area</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <Pool className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Swimming Poll</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <OutdoorGrill className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">BBQ Area</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <FitnessCenter className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Gym</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <Living className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Buit-in Wardrobes</div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-1/5 flex flex-col items-center">
                                    <LocalParking className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Free Public Parking</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <Wifi className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">WiFi</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <LocalBar className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Bar</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <Weekend className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Lounge</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <Spa className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Spa</div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-1/5 flex flex-col items-center">
                                    <BabyChangingStation className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Babysitting</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <SmokeFree className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Non-Smoking Areas</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <MeetingRoom className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Family Rooms</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <Deck className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Garden</div>
                                </div>
                                <div className="w-1/5 flex flex-col items-center">
                                    <MeetingRoom className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 text-sm text-gray-500 text-center">Interconnected Rooms</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] p-[20px]">
                    <div className="text-4xl font-bold text-black text-center py-[30px]">Financial Details</div>
                    <div className="flex flex-row gap-[20px]">
                        <div className="w-1/2">
                            <Accordion className="!shadow-none !rounded-2xl border border-gray-200">
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <div className="flex flex-row gap-[10px] items-center">
                                        <Details className="text-black" sx={{ fontSize: 40 }} />
                                        <div className="flex flex-col gap-[5px]">
                                            <div className="text-lg text-[#dc2751]">Transaction</div>
                                            <div className="text-xl font-bold text-black">Details</div>
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="flex flex-col gap-[20px]">
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Property Listing Price :</div>
                                            <div className="text-lg text-black">USD 4,1000,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg font-bold text-black">Transaction Costs</div>
                                            <div className="text-lg font-bold text-black">USD 400,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Title Search & Insurance (0.5% - 1%)</div>
                                            <div className="text-lg text-black">USD 40,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Recording Fees (0.2% - 0.5%)</div>
                                            <div className="text-lg text-black">USD 20,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Legal Fees (0.5% - 1%)</div>
                                            <div className="text-lg text-black">USD 40,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Taxes (1%)</div>
                                            <div className="text-lg text-black">USD 40,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Broker Fee (3%)</div>
                                            <div className="text-lg text-black">USD 120,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Renovation Costs (2%)</div>
                                            <div className="text-lg text-black">USD 80,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Metropoly fee (1.5%)</div>
                                            <div className="text-lg text-black">USD 60,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg font-bold text-[#dc2751]">Total Acquisition Cost :</div>
                                            <div className="text-lg font-bold text-[#dc2751]">USD 4,500,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Total Number of NFTs :</div>
                                            <div className="text-lg text-black">1,000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Value of One NFT :</div>
                                            <div className="text-lg text-black">1 / 1000</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg font-bold text-[#dc2751]">Mint Price Per NFT :</div>
                                            <div className="text-lg font-bold text-[#dc2751]">USD 4,500</div>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="w-1/2">
                            <Accordion className="!shadow-none !rounded-2xl border border-gray-200">
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <div className="flex flex-row gap-[10px] items-center">
                                        <Wysiwyg className="text-black" sx={{ fontSize: 40 }} />
                                        <div className="flex flex-col gap-[5px]">
                                            <div className="text-lg text-[#dc2751]">Rental</div>
                                            <div className="text-xl font-bold text-black">Breakdown</div>
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="flex flex-col gap-[20px]">
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Gross Yield</div>
                                            <div className="text-lg text-black">12.79%</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg font-bold text-black">Gross Rent Per Year</div>
                                            <div className="text-lg font-bold text-black">USD 655,808</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Service Charges (10%)</div>
                                            <div className="text-lg text-black">USD 65,508</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Property Management (15%)</div>
                                            <div className="text-lg text-black">USD 98,262</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Property Insurance</div>
                                            <div className="text-lg text-black">USD 20,722</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Maintenance Charges (10%)</div>
                                            <div className="text-lg text-black">USD 65,506</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg text-black">Net Dividend Yield</div>
                                            <div className="text-lg text-black">7.79%</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-lg font-bold text-[#dc2751]">Annual Rental income</div>
                                            <div className="text-lg font-bold text-[#dc2751]">USD 405,080</div>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center pb-[30px]">
                        <div className="w-2/3 text-lg text-gray-500 text-center">This financial breakdown is entirely fictitious and serves only as an illustration. Prices and costs may vary and depend on the city, the country, the applicable laws, and other factors.</div>
                    </div>
                </div>
                <div className="flex flex-row gap-[20px] bg-gray-200 py-[50px]">
                    <div className="w-1/2 flex flex-col gap-[30px]">
                        <div className="text-4xl font-bold text-black text-center py-[20px]">Property Info</div>
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-row">
                                <div className="w-1/2 flex flex-col gap-[20px] items-center">
                                    <Toll className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 flex flex-col">
                                        <div className="text-basic text-gray-500 text-center">Minimum. amount</div>
                                        <div className="text-lg text-black font-bold text-center">$ 5,200</div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col gap-[20px] items-center">
                                    <Groups className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 flex flex-col">
                                        <div className="text-basic text-gray-500 text-center">Number of NFT holders</div>
                                        <div className="text-lg text-black font-bold text-center">800</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-1/2 flex flex-col gap-[20px] items-center">
                                    <Home className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 flex flex-col">
                                        <div className="text-basic text-gray-500 text-center">Suggested holding period</div>
                                        <div className="text-lg text-black font-bold text-center">5 Years</div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col gap-[20px] items-center">
                                    <Money className="text-white bg-gray-500 rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 flex flex-col">
                                        <div className="text-basic text-gray-500 text-center">Annual Rent</div>
                                        <div className="text-lg text-black font-bold text-center">$ 405,080</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-[30px]">
                        <div className="text-4xl font-bold text-black text-center py-[20px]">Rental Yields</div>
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-row">
                                <div className="w-1/2 flex flex-col gap-[20px] items-center">
                                    <AutoGraph className="text-white bg-[#dc2751] rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 flex flex-col">
                                        <div className="text-basic text-gray-500 text-center">Expected Dividend Yield</div>
                                        <div className="text-lg text-black font-bold text-center">7.79 %</div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col gap-[20px] items-center">
                                    <BarChart className="text-white bg-[#dc2751] rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 flex flex-col">
                                        <div className="text-basic text-gray-500 text-center">Gross yield</div>
                                        <div className="text-lg text-black font-bold text-center">12.79 %</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-1/2 flex flex-col gap-[20px] items-center">
                                    <Money className="text-white bg-[#dc2751] rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 flex flex-col">
                                        <div className="text-basic text-gray-500 text-center">5 YR Expected Return</div>
                                        <div className="text-lg text-black font-bold text-center">48.95 %</div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col gap-[20px] items-center">
                                    <Insights className="text-white bg-[#dc2751] rounded-full p-[15px]" sx={{ fontSize: 60 }} />
                                    <div className="w-2/3 flex flex-col">
                                        <div className="text-basic text-gray-500 text-center">Devidend Frequency</div>
                                        <div className="text-lg text-black font-bold text-center">Monthly</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] bg-[#dc2751] py-[50px]">
                    <div className="text-4xl font-bold text-white text-center pt-[30px]">Documents</div>
                    <div className="text-xl text-white text-center pt-[10px] pb-[30px]">Confidential property documents</div>
                    <div className="flex flex-row gap-[20px] justify-center">
                        <div className="flex flex-row gap-[10px] items-center p-[20px] bg-white rounded-2xl">
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-lg font-bold text-black">Download</div>
                                <div className="text-basic text-[#dc2751]">Independent Property Report</div>
                            </div>
                            <Download className="text-gray-500" sx={{ fontSize: 30 }} />
                        </div>
                        <div className="flex flex-row gap-[10px] items-center p-[20px] bg-white rounded-2xl">
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-lg font-bold text-black">Download</div>
                                <div className="text-basic text-[#dc2751]">Independent Area Report</div>
                            </div>
                            <Download className="text-gray-500" sx={{ fontSize: 30 }} />
                        </div>
                        <div className="flex flex-row gap-[10px] items-center p-[20px] bg-white rounded-2xl">
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-lg font-bold text-black">Download</div>
                                <div className="text-basic text-[#dc2751]">Memorandum & Disclaimer</div>
                            </div>
                            <Download className="text-gray-500" sx={{ fontSize: 30 }} />
                        </div>
                        <div className="flex flex-row gap-[10px] items-center p-[20px] bg-white rounded-2xl">
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-lg font-bold text-black">Download</div>
                                <div className="text-basic text-[#dc2751]">Projections Report</div>
                            </div>
                            <Download className="text-gray-500" sx={{ fontSize: 30 }} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-[70px]">
                    <div className="text-4xl font-bold text-black text-center py-[20px]">Location</div>
                    <img src={map_1} alt=""></img>
                </div>
                <div className="flex flex-col gap-[20px] bg-gray-200 p-[30px]">
                    <div className="text-4xl font-bold text-black text-center py-[30px]">Developer & Property Manager</div>
                    <div className="flex flex-row gap-[50px]">
                        <div className="w-1/2 flex flex-col gap-[20px]">
                            <div className="text-2xl text-black text-center">Titan</div>
                            <div className="text-lg font-bold text-black text-center">Developer: Titan Real Estate Corp</div>
                            <div className="text-lg text-gray-500 text-center">This company is fictitious and for illustrative purposes only. Titan is a multinational real estate development company based in London, UK. The company operates internationally and provides real estate development and management services.</div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-[20px]">
                            <div className="text-2xl text-black text-center">Bed & Chill</div>
                            <div className="text-lg font-bold text-black text-center">Property Manager: Ben & Chill</div>
                            <div className="text-lg text-gray-500 text-center">This company is fictitious and for illustrative purposes only. Founded in 2012, Bed & Chill specializes in full-service property management services. The company’s mission is to help landlords save time and turn their house or apartment into a profitable revenue stream.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detailboard;