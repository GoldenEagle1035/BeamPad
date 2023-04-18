import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import LeftMenu from "../components/LeftMenu";

const Layout = () => {
  return (
    <div className="flex flex-row h-[1200px]">
      <LeftMenu />
      <div className="w-full flex flex-col">
        <TopMenu />
        <Outlet />
      </div>
      
    </div>
  )
};

export default Layout;