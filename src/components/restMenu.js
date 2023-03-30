import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { img_cdn } from "./config";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = () =>{
    const {id} = useParams();
    const[restaurant,setRestaurant] = useState({});
    const[restaurantMenu,setRestaurantMenu] = useState({});
    useEffect(()=>{getRestaurantInfo();} ,[] );

    async function getRestaurantInfo(){
    const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=523794&submitAction=ENTER"
    ) ;
    const json = await data.json();
    console.log(json.data);  
    setRestaurant(json?.data?.cards?.find((o)=>o.card)?.card?.card?.info); 
    setRestaurantMenu(json?.data?.cards
        ?.find((o)=>o.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (o) => o?.card?.card?.itemCards || o?.card?.card?.categories   
        )
    ); 
    }
    return (!restaurant)?(<Shimmer/>):
    (
        <>
        <h1>Restaurant id : {id} </h1>
        <img src ={img_cdn+restaurant.cloudinaryImageId} width='300px'/>
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.cuisines}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.restaurantMenu}</h3>
        
        </>
    )    
    }
    export default RestaurantMenu