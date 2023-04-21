import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () =>{
const {user} = useContext(UserContext) ;  
    return( <h4 className=" p-5 bg-orange-900 font-bold text-white">developed by {user.name} :)</h4>)
}
export default Footer;