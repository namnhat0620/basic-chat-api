import { Suspense, lazy } from "react";// use to loading , loading screen until full page is load
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import AuthenLayout from "../layouts/AuthenLayout";
import MainLayout from "../layouts/MainLayout";

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
      path: '/auth',
      element: <AuthenLayout/>,
      children:[
        {element: <LoginPage/>, path:'login'},
        /*/{element: <RegisterPage/>, path:'register'},
        {element: <ResetPasswordPage/>, path:'reset-password'},
        {element: <NewPasswordPage/>, path:'new-password'},*/
      ]
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <ChatApp /> },
        { path: "allmessages", element: <AllMessages /> },
        { path: "allfriends", element: <AllFriends /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
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

const AllMessages = Loadable(
  lazy(()=>import("../components/Messages/AllMessages"))
)

const AllFriends = Loadable(
  lazy(()=>import("../components/AllFriends/AllFriends"))
)