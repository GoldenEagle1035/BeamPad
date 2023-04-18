
import logo from '../assets/images/logo.webp';

const TopMenu = () => {
    return (
        <div className="flex flex-row gap-[20px] py-[100px] px-[50px] bg-gray-500">
            <div className='w-1/3 flex flex-col gap-[20px]'>
                <img className="w-[300px] h-auto" src={logo} alt="" />
                <div className='flex flex-row gap-[20px]'>
                    <svg fill="#ffffff" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
                    <svg fill="#ffffff" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"/></svg>
                    <svg fill="#ffffff" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"/></svg>
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" fill="#ffffff"/></svg>
                </div>
            </div>
            <div className='w-2/3 flex flex-row gap-[20px]'>
                <div className='w-1/3 flex flex-col gap-[30px]'>
                    <div className="text-3xl font-bold text-white">Product</div>
                    <div className="text-xl text-white">How Does It Work?</div>
                    <div className="text-xl text-white">What Is a Real Estate NFT?</div>
                    <div className="text-xl text-white">Real Estate NFT Calculator</div>
                    <div className="text-xl text-white">Key Risks</div>
                    <div className="text-xl text-white">FAQ</div>
                </div>
                <div className='w-1/3 flex flex-col gap-[30px]'>
                    <div className="text-3xl font-bold text-white">Company</div>
                    <div className="text-xl text-white">About Us</div>
                    <div className="text-xl text-white">Contact Us</div>
                    <div className="text-xl text-white">Why BeemPad?</div>
                </div>
                <div className='w-1/3 flex flex-col gap-[30px]'>
                    <div className="text-3xl font-bold text-white">Legal</div>
                    <div className="text-xl text-white">Cookie Policy</div>
                    <div className="text-xl text-white">Privacy Policy</div>
                    <div className="text-xl text-white">Terms of Service</div>
                </div>
            </div>
        </div>
    )
};

export default TopMenu;