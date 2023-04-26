import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterData";
import { RESTAURANT_CDN } from "./config";
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
    <div className="bg-yellow-50">
    <div data-testid="search-input" className = ' flex justify-center'>
        <div>
        <input 
        type="text" 
        className='w-96 p-2 rounded-l-full shadow-lg border-2  font-mono border-orange-900 '
        placeholder="What's on your mind?"
        value={searchText}
        onChange={(e)=>{ 
        setSearchText(e.target.value);
        }}
        /> 
        <button className='text-white font-mono shadow-lg p-2 border-2 border-orange-900 rounded-r-full bg-orange-900   ' 
        data-testid="search-button"
        onClick={() =>{
        const data = filterData(searchText,allRestaurant);    
        setFilterRestaurant(data);       
        }}>search
        </button> 
        </div>
   </div> 
        <div data-testid="rest-list"className = "justify-around ">
        {filterRestaurant.map((filterRestaurant)=>{
        return(
        <Link to={"/restaurant/" + filterRestaurant.data.data.id}>
        <RestaurantCard {...filterRestaurant.data.data}  />
        </Link> );
        })
        } 
       </div>
       </div>
    ) 
    
    }
export default Body;    
