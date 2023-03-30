// import react and react dom bcs now we have removed cdn links
import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import {createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import AboutUs from "./components/aboutUs";
import Error from "./components/error";
import Contact from "./components/contactPage";
import RestaurantMenu from "./components/restMenu";

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
