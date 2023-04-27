import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Input from "../pages/Input";
import Overview from "../pages/Main";
import RadarChart from "../pages/Charts/RadarC";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean,
}


const routes: RouteType[] =[
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/about",
      component: About,
      name: "About Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard Screen",
      protected: false,
    },
    {
      path: "/profile",
      component: Profile,
      name: "Profile Screen",
      protected: true,
    },
    {
      path: "/input",
      component: Input,
      name: "Input Screen",
      protected: false,
    },
    {
      path: "/main",
      component: Overview,
      name: "Overview Screen",
      protected: false,
    },
    {
      path: "/radarchart",
      component: RadarChart,
      name: "Radar Chart Screen",
      protected: false,
    },
  ];
  
  export default routes
    