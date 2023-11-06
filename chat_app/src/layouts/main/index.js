
import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const isAuthenticated = true;

const MainLayout = () => {

  if(isAuthenticated){
    return <Navigate to='/app'/>;
  }

  return (
    <>
    <div>phac</div>
    <Outlet />
    </>
  );
};

export default MainLayout;
