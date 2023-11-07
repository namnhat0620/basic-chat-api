import { Navigate, Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const isAuthenticated = true;

const MainLayout = () => {

if(!isAuthenticated){
  return <Navigate to='/auth/login'/>;
}

  return (
    <div>
      {/* SideBar */}
      <Header/>
      <Sidebar/>
      <Outlet />
    </div>
    
  );
};

export default MainLayout;
