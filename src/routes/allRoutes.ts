/*
pages
*/
import AuthLayout from "../auth/AuthLayout";
import About from "../pages/About";
import Discover from "../pages/Discover";
import Error from "../pages/Error";
import Investors from "../pages/ForInvestors";
import Contacts from "../pages/Contacts";
import AirDrop from "../pages/AitDrop";
import Market from "../pages/Market";
import NFTDetails from "../pages/NFTDetails";


interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const publicRoutes: Array<RouteProps> = [
  { path: "/", component: AuthLayout },
  { path: "/about", component: About },
  { path: "/discover", component: Discover },
  { path: "/airdrop", component: AirDrop },
  { path: "/investors", component: Investors },
  { path: "/contacts", component: Contacts },
  { path: "/market", component: Market },
  { path: "/market/details", component: NFTDetails },
  { path: "*", component: Error },

];

export {
  publicRoutes,
};
