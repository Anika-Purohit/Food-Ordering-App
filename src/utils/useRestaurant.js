    import { useEffect,useState } from "react";
   
    const useRestaurant = () => {
    const[restaurant,setRestaurant] = useState({});
  
    useEffect(()=>{getRestaurantInfo();} ,[] );

    async function getRestaurantInfo(){
    const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="+id+"&submitAction=ENTER"
    ) ;
    const json = await data.json();
    console.log(json.data);  
    setRestaurant(json?.data?.cards[0]?.card?.card?.info); 
    }
    return restaurant;
};
export default useRestaurant;