// import react and react dom bcs now we have removed cdn links
import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/ContactPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/FuctionalComponent";
import ClassBasedComponent from "./components/ClassBasedComponent";

const AppLayout = () =>{
  return(<>
  <Header/>
  <Outlet/>
  <Footer/>
  </>  )  
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
  path:"/restaurant/:id",
  element:<RestaurantMenu/>,  
},
],
},
]);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
