import { IMG_CDN } from "./config";


const RestaurantCard =({cloudinaryImageId,name,areaName,costForTwo}) =>
{
 return(
    
 <div className = "bg-white p-2 hover:scale-110 align-top h-80 w-60 m-7 flex-wrap inline-block  shadow-2xl rounded-2xl justify-around">
 <img className=" h-40 w-60  rounded-2xl "src={IMG_CDN + cloudinaryImageId} ></img>
 <h2 className="text-orange-900 text-xl font-bold ">{name}</h2> 
 <h3 className="font-mono my-2 text-orange-900">{areaName}</h3>  
 <h3 className="font-light font-mono text-orange-900">{costForTwo}</h3> 
 
 </div>   
 )   
}

export default RestaurantCard;