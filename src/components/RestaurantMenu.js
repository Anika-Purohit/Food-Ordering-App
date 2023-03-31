import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { img_cdn } from "./Config";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = () =>{
    const {id} = useParams();
    const[restaurant,setRestaurant] = useState({});
    const[restaurantMenu,setRestaurantMenu] = useState({});
    useEffect(()=>{getRestaurantInfo();} ,[] );

    async function getRestaurantInfo(){
    const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="+id+"&submitAction=ENTER"
    ) ;
    const json = await data.json();
    console.log(json.data);  
    setRestaurant(json?.data?.cards[0]?.card?.card?.info); 
    setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card); 
    }
    return (!restaurant)?(<Shimmer/>):
    (
        <>
        <div className = 'eachRestaurantInfo'>
        <h1>Restaurant id : {id} </h1>
        <img src ={img_cdn+restaurant.cloudinaryImageId} width='300px'/>
        <h2>{restaurant.name}</h2>
        <h3>Area: {restaurant.areaName} </h3>
        <h3>Average Rating: {restaurant.avgRating} Stars</h3>
        <h3>Cost: {restaurant.costForTwoMessage}</h3>
       
        </div>
        </>
    )    
    }
    export default RestaurantMenu