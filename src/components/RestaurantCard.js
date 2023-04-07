import { IMG_CDN } from "./Config";


const RestaurantCard =({cloudinaryImageId,name,area,costForTwoString}) =>
{
 return(
 <div className = "px-2 align-top h-80 w-60 flex-wrap inline-block m-7 shadow-lg">
 <img className="h-40 w-60 "src={IMG_CDN + cloudinaryImageId} ></img>
 <h2 className="text-xl font-bold ">{name}</h2> 
 <h3>{area}</h3> 
 <h3 className="font-light">{costForTwoString}</h3> 
 
 </div>   
 )   
}

export default RestaurantCard;