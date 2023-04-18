
import { Wallet } from '@mui/icons-material';

import logo from '../assets/images/logo.webp';

const TopMenu = () => {
    return (
        <div className="flex justify-between p-[20px] items-center border-b border-b-gray-100">
            <div>
                <img className="w-auto h-[50px]" src={logo} alt="" />
            </div>
            <div>
                <button className="w-auto h-[35px] flex p-[5px] border rounded bg-[#dc2751] text-white text-base">
                    <Wallet className="mr-[10px]"/>
                    <div>Connect Wallet</div>
                </button>
            </div>
        </div>
    )
};

export default TopMenu;