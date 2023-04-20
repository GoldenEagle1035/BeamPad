import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import LeftMenu from "../components/LeftMenu";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-white">
      <TopMenu />
      <div className="flex flex-row">
        <LeftMenu />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
};

export default Layout;