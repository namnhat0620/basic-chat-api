import { Suspense, lazy } from "react";// use to loading , loading screen until full page is load
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
//import Settings from "../pages/dashboard/Settings";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}> 
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/",
      element: <ChatApp/>
    }
  ]);
}

const LoginPage = Loadable(
  lazy(() => import("../pages/auth/LoginPage/LoginPage")),
);

const ChatApp = Loadable(
  lazy(() => import("../pages/dashboard/ChatApp")),
);

const Page404 = Loadable(
  lazy(() => import("../pages/404ErrorPage")),
);

