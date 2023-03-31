import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterData";
import { RESTAURANT_CDN } from "../components/Config";
import { useOnline } from "../utils/useOnline";

const Body = () =>{

    const[searchText,setSearchText] = useState("");
    const[filterRestaurant,setFilterRestaurant] = useState([]);
    const[allRestaurant,setAllRestaurant] = useState([]);
    
    useEffect( () =>{ getRestaurant(); }, [] );

    async function getRestaurant(){
    const data = await fetch(RESTAURANT_CDN);
    const json = await data.json();
    console.log(json);
    setFilterRestaurant(json?.data?.cards) ; 
    setAllRestaurant(json?.data?.cards) ; 
    }

    const isOnline = useOnline();
    if(!isOnline){
    return <h1> You Are Offline Check Your Internet Connection</h1>    
    }
    if(!allRestaurant)return null;

    return (allRestaurant?.length == 0)?(
        <Shimmer/>):(
        <> 
    <div className = 'search-bar'>
        <input 
        type="text" 
        className="search"
        placeholder="What's on your mind?"
        value={searchText}
        onChange={(e)=>{ 
        setSearchText(e.target.value);
        }}
        /> 
        <button 
        className="search-btn" 
        onClick={() =>{
        const data = filterData(searchText,allRestaurant);    
        setFilterRestaurant(data);       
        }}>
        Search</button> 
        </div> 
        <div className = "restaurant-display">
        {filterRestaurant.map((filterRestaurant)=>{
        return(
        <Link to={"/restaurant/" + filterRestaurant.data.data.id}>
        <RestaurantCard {...filterRestaurant.data.data}  />
        </Link> );
        })
        } 
       </div>
       </>
    ) 
    
    }
export default Body;    
