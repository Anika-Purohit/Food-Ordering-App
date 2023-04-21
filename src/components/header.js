import { useState} from "react";
import { Link } from "react-router-dom";
import MyLogo from "../utils/MyLogo.jpeg";
import { useSelector } from "react-redux";

 const Title =()=> (
    <a href="/">
    <img data-testid="logo" className="w-40 h-28 items-start" src={MyLogo}/>
    </a>  );
     
export const Header = ()=>{
        const[isLoggedIn,setIsLoggedIn] = useState(true);
       const cartItems = useSelector(reduxStore => reduxStore.cart.items);
       console.log(cartItems);
       return(
        <div className="">
        <div className="flex  justify-between">
            <Title/>
        
            <div className="m-auto">
               <ul className="flex m-auto text-white">
               <Link to="/">
                <li className="px-7 font-bold m-2 p-2 bg-orange-900 rounded-full ">Home</li>
                </Link>
                <Link to="/about">
                <li className="px-7 font-bold m-2 p-2 bg-orange-900 rounded-full">About Us</li>
                </Link>
                <Link to="/contact">
                <li className="px-7 font-bold m-2 p-2 bg-orange-900 rounded-full">Contact Us</li>
                </Link>
                <Link to="/cart">
                <li data-testid="cart" className="px-7 m-2 p-2 font-bold  bg-orange-900 rounded-full">Cart - {cartItems.length} items</li>
                </Link>
               </ul> 
           </div>
           <div className="my-auto mr-16 ml-12">
            {
             isLoggedIn?
             (<button onClick={() => setIsLoggedIn(false)} className="font-bold text-orange-900">Logout</button>):
             (<button onClick={() => setIsLoggedIn(true)} className="font-bold text-orange-900">Login</button>)
             
            }
            </div> 
        </div>
        </div>
    );}
   