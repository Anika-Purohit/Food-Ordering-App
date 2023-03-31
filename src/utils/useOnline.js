import { useState,useEffect } from "react";

export const useOnline = () =>{
const[isOnline,setIsOnline]  = useState(true);

useEffect(()=>{
const onlineFunction = () => {setIsOnline(true)} ;   
const offlineFunction= () => {setIsOnline(false)} ;  
// starting the event listner
window.addEventListener("online",onlineFunction)  ;  
window.addEventListener("offline",offlineFunction)  ;  
// clearing the event listner cache
return ()=>{
window.removeEventListener("online",onlineFunction)  ;     
window.removeEventListener("offline",offlineFunction)  ;     
}
}, []);


return isOnline;
}