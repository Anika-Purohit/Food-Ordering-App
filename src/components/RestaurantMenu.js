import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { img_cdn } from "./Config";
import { Shimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () =>{
    const {id} = useParams();
    const restaurant = useRestaurant();    
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