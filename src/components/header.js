import { useState } from "react";
import { Link } from "react-router-dom";
export const Title =()=> {
    return(
    <img className = 'logo' src={"https://www.designhill.com/design-blog/wp-content/uploads/2015/01/2-min-4.jpg"} width="210"></img>
     )}
     
export const Header = ()=>{
        const[isLoggedIn,setIsLoggedIn] = useState(true);
        return(
        <>
        <div className='header'>
            <Title/>
        
            <div className='navigation'>
               <ul>
               <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/about">
                <li>About Us</li>
                </Link>
                <Link to="/contact">
                <li>Contact Us</li>
                </Link>
                <Link to="/cart">
                <li>Cart</li>
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
   