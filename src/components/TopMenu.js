
import { useNavigate } from 'react-router-dom';

import { Wallet, Search, Notifications, Settings, AccountCircle, ExpandMore } from '@mui/icons-material';

import logo from '../assets/images/cropped-1logo.png';

const TopMenu = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-between pl-[50px] lg:pl-[30px] pr-[10px] lg:pr-[30px] py-[10px] bg-[#ebf4f3] items-center">
            <div className='flex flex-row gap-[50px] items-center'>
                <img className="w-auto h-[40px] hover:cursor-pointer" src={logo} alt="" onClick={(e) => { navigate("/") }} />
                <div className='hidden lg:flex flex-row items-center'>
                    <Search className='text-gray-400' sx={{ fontSize: 25 }} />
                    <input type="text" placeholder="Search campain, donor, and more..." className="w-[300px] p-[2px] focus:outline-none bg-transparent text-black text-base" />
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <div className='flex flex-row gap-[20px] items-center ml-[20px]'>
                    <div className='hidden lg:flex flex-row gap-[20px] items-center'>
                        <Notifications className="hover:cursor-pointer" sx={{ fontSize: 20 }} />
                        <Settings className="hover:cursor-pointer" sx={{ fontSize: 20 }} />
                    </div>
                    <div className='flex flex-row gap-[5px] items-center hover:cursor-pointer'>
                        <button className="flex p-[10px] rounded-full bg-[#377eff] text-white text-base">
                            <Wallet sx={{ fontSize: 20 }} />
                        </button>
                        <ExpandMore className='text-gray-300' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TopMenu;