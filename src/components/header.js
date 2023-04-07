import { useState} from "react";
import { Link } from "react-router-dom";
import MyLogo from "../utils/MyLogo.jpeg";

 const Title =()=> (
    <a href="/">
    <img className="w-40" src={MyLogo}/>
    </a>  );
     
export const Header = ()=>{
        const[isLoggedIn,setIsLoggedIn] = useState(true);
       
        return(
        <>
        <div className="flex ">
            <Title/>
        
            <div className="flex ">
               <ul className="flex m-auto ">
               <Link to="/">
                <li className="px-7 font-bold">Home</li>
                </Link>
                <Link to="/about">
                <li className="px-7 font-bold">About Us</li>
                </Link>
                <Link to="/contact">
                <li className="px-7 font-bold">Contact Us</li>
                </Link>
                <Link to="/cart">
                <li className="px-7 font-bold">Cart</li>
                </Link>
               </ul> 
            </div>
            
            {
             isLoggedIn?
             (<button onClick={() => setIsLoggedIn(false)}>Logout</button>):
             (<button onClick={() => setIsLoggedIn(true)}>Login</button>)
             
            }
        </div>
        </>
    );}
   