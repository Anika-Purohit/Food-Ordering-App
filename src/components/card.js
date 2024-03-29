import { img_cdn } from "./config";

const RestaurantCard =({cloudinaryImageId,name,area,costForTwoString}) =>
{
 return(
 <div className = 'card'>
 <img src={img_cdn+cloudinaryImageId} 
 width="200"></img>
 <h2>{name}</h2> 
 <h3>{area}</h3> 
 <h3>{costForTwoString}</h3> 
 </div>   
 )   
}
export default RestaurantCard;