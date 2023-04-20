
import { useNavigate } from 'react-router-dom';

import {
    Home,
    Flag,
    RocketLaunch,
    AccountBox,
    Group,
    Payments,
    Domain,
    Menu
} from '@mui/icons-material';
import { Drawer } from '@mui/material';
import { useState } from 'react';

const LeftMenu = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex flex-col border-r-none lg:border-r-2 border-gray-300">
            <div className='absolute -mt-[40px] ml-[15px] lg:hidden flex hover:cursor-pointer' onClick={(e) => { setOpen(!open) }}>
                <Menu className='text-gray-400 hover:bg-[#ebf4f3]' />
            </div>
            <div className='lg:hidden flex'>
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => { if (open) setOpen(false) }}
                >
                    <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-s-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                        onClick={(e) => { navigate("/") }}
                    >
                        <Home className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                    </div>
                    <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-s-2 border-white hover:border-s-[#377eff] hover:cursor-pointer'
                        onClick={(e) => { navigate("/marketplace") }}
                    >
                        <Flag className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                    </div>
                    <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-s-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                        onClick={(e) => { navigate("/launchpad") }}
                    >
                        <RocketLaunch className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                    </div>
                    <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-s-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                        onClick={(e) => { navigate("/profile") }}
                    >
                        <AccountBox className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                    </div>
                    <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-s-2 border-white hover:border-[#377eff] hover:cursor-pointer'>
                        <Group className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                    </div>
                    <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-s-2 border-white hover:border-[#377eff] hover:cursor-pointer'>
                        <Payments className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                    </div>
                    <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-s-2 border-white hover:border-[#377eff] hover:cursor-pointer'>
                        <Domain className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                    </div>
                </Drawer>
            </div>
            <div className='lg:flex flex-col hidden'>
                <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-r-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                    onClick={(e) => { navigate("/") }}
                    title="Dashboard"
                >
                    <Home className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                </div>
                <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-r-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                    onClick={(e) => { navigate("/marketplace") }}
                    title="Marketplace"
                >
                    <Flag className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                </div>
                <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-r-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                    onClick={(e) => { navigate("/launchpad") }}
                    title="Upcoming"
                >
                    <RocketLaunch className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                </div>
                <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-r-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                    onClick={(e) => { navigate("/profile") }}
                    title="Profile"
                >
                    <AccountBox className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                </div>
                <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-r-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                    onClick={(e) => { }}
                    title="Group"
                >
                    <Group className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                </div>
                <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-r-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                    onClick={(e) => { }}
                    title="Payment"
                >
                    <Payments className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                </div>
                <div className='px-[25px] py-[20px] group hover:bg-[#ebf4f3] border-r-2 border-white hover:border-[#377eff] hover:cursor-pointer'
                    onClick={(e) => { }}
                    title="Property"
                >
                    <Domain className='text-gray-400 group-hover:text-[#377eff]' sx={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    )
};

export default LeftMenu;