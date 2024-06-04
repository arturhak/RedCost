/*
pages
*/
import AuthLayout from "../auth/AuthLayout";
import About from "../pages/About";
import Discover from "../pages/Discover";
import Error from "../pages/Error";
import Investors from "../pages/ForInvestors";


interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const publicRoutes: Array<RouteProps> = [
  { path: "/", component: AuthLayout },
  { path: "/about", component: About },
  { path: "/discover", component: Discover },
  { path: "/investors", component: Investors },
  { path: "*", component: Error },

];

export {
  publicRoutes,
};