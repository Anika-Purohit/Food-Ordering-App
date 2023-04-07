import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () =>{
const {user} = useContext(UserContext) ;  
    return( <h4 className="m-2 p-5 font-bold">developed by {user.name} :)</h4>)
}
export default Footer;