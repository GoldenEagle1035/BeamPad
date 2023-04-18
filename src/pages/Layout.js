import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import LeftMenu from "../components/LeftMenu";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <LeftMenu />
        <div className="w-full flex flex-col">
          <TopMenu />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Layout;