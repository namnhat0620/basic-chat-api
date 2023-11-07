
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage/LoginPage";


const isAuthenticated = false;

const AuthenLayout = () => {

  if(isAuthenticated){
    return <Navigate to='/'/>;
  }

  return (
    <>
    <LoginPage/>
    <Outlet />
    </>
  );
};

export default AuthenLayout;
