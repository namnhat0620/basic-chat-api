import { Navigate, Outlet } from "react-router-dom";

import SideBar from "./SideBar";

const isAuthenticated = true;

const DashboardLayout = () => {

if(!isAuthenticated){
  return <Navigate to='/auth/login'/>;
}

  return (
    <div direction='row'>
      {/* SideBar */}
      <SideBar/>
      <Outlet />
    </div>
    
  );
};

export default DashboardLayout;
