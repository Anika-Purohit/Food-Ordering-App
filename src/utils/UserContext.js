import { createContext } from "react";

const UserContext = createContext({user:{
 name: "Anika" ,
 email: "anika@yumasianfood.com",
}});
export default UserContext;