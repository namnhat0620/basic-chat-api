import { Navigate, Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import UserInfo from "../components/Sidebar/UserInfo";

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
      <UserInfo/>
      <Outlet />
    </div>
    
  );
};

export default MainLayout;
