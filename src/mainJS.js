// import react and react dom bcs now we have removed cdn links
import React,{ useContext,useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/ContactPage";
import RestaurantMenu from "./components/RestaurantMenu";
import ClassBasedComponent from "./components/ClassBasedComponent";
import { lazy,Suspense } from "react";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./utils/UserContext";


// the components are called as default export
// hooks and config and constants as named export
// naming convention

const Cart = lazy(()=>import ("./components/Cart"));
const AppLayout = () =>{
  const [user,setUser] = useState({
    name: "Anika Purohit",
  });
  return(
  <UserContext.Provider value ={{ user:user,}}>
  <Header/>
  <Outlet/>
  <Footer/>
  </UserContext.Provider>  
  )  
  }
const appRouter = createBrowserRouter([
{
path:"/",
element:<AppLayout/>, 
errorElement:<Error/>, 
children:[
  {
  path:"/about",
  element:<AboutUs/>, 
  children:[
    {
    path:"profile",
    element:<ClassBasedComponent/> , 
    },
  ] 
},
{
  path:"/contact",
  element:<Contact/>,  
},
{
  path:"/",
  element:<Body/>,  
},
{
  path:"/cart",
  element:<Suspense fallback ={<Shimmer/>}><Cart/></Suspense>,  
},
{
  path:"/restaurant/:id",
  element:<RestaurantMenu/>,  
},
],
},
]);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
