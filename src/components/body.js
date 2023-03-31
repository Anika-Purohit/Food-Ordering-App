import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterData";


const Body = () =>{

    const[searchText,setSearchText] = useState("");
    const[filterRestaurant,setFilterRestaurant] = useState([]);
    const[allRestaurant,setAllRestaurant] = useState([]);
    
    useEffect( () =>{ getRestaurant(); }, [] );

    async function getRestaurant(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
    const json = await data.json();
    console.log(json);
    setFilterRestaurant(json?.data?.cards) ; 
    setAllRestaurant(json?.data?.cards) ; 
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
