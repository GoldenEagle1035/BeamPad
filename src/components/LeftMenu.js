
import { 
    AccountCircle, 
    Home, 
    ViewSidebar, 
    AllInbox, 
    Settings, 
    LocalGroceryStore,
    Upcoming,
    Gavel,
    SupervisorAccount,
    Favorite,
    Wallet,
    Domain,
    Payments
} from '@mui/icons-material';

const LeftMenu = () => {
    return (
        <div className="w-[200px] flex flex-col gap-[20px] p-[5px] bg-gray-100">
            <div className='flex flex-row gap-[5px] mt-[10px] items-center'>
                <AccountCircle sx={{ color: '#dc2751', fontSize: 50 }} />
                <div className='flex flex-col'>
                    <div className="text-sm font-bold text-black">Demo Account</div>
                    <div className="text-sm text-gray-500">Level: Broker</div>
                    <div className='flex flex-row gap-[1px]'>
                        <Home className='text-[#dc2751]' sx={{ fontSize: 15 }} />
                        <Home className='text-[#dc2751]' sx={{ fontSize: 15 }} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className="p-[10px] text-xs font-bold text-black">General</div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <ViewSidebar className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Dashboard</div>
                </div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <AllInbox className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Inbox</div>
                </div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <Settings className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Settings</div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className="p-[10px] text-xs font-bold text-black">Market</div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <LocalGroceryStore className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Marketplace</div>
                </div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <Upcoming className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Upcoming</div>
                </div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <Gavel className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Auction</div>
                </div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <SupervisorAccount className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Mortgages</div>
                </div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <Favorite className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Favorites</div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className="p-[10px] text-xs font-bold text-black">My Profile</div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <Wallet className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Overview</div>
                </div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <Domain className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">My Properties</div>
                </div>
                <div className='p-[10px] group hover:cursor-pointer hover:bg-[#dc275130] rounded flex flex-row gap-[5px] items-center text-gray-400'>
                    <Payments className="group-hover:text-[#dc2751] text-gray-700" sx={{ fontSize: 25 }} />
                    <div className="group-hover:text-[#dc2751] text-sm">Payouts</div>
                </div>
            </div>
        </div>
    )
};

export default LeftMenu;