import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "./Config";
import useRestaurant from "../utils/useRestaurant";
import {Shimmer} from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem} from "../utils/cartSlice";


const RestaurantMenu = () => {
  const { id} = useParams();

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const handleAddItem = (itemCards) =>{
    dispatch(addItem(itemCards));
  };
  const handleRemoveItem = (itemCards) =>{
    dispatch(removeItem(itemCards));
  };
  
  const recData =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (items) => items?.card?.card?.title == "Recommended"
    );

  console.log(recData);

  // .find(items => items.card.card.title=="Recommended")

  return !recData ? (<Shimmer />) :(
          <>
          <div data-testid="menu" className="bg-yellow-50">
            <div className="ml-5 text-red-900">
              <h3 className="text-2xl font-bold ">Best Sellers:</h3>
              <p className="text-xl font-mono">
                {Object?.keys(recData?.card?.card?.itemCards).length} Items
              </p>
            </div>
            
                  
            <div className="">
              {Object.values(recData?.card?.card?.itemCards).map(
                (itemCards) => (
                  
                  <div className="inline-block w-52 m-5 h-32px bg-white rounded-2xl align-top ">
                    <div className="menu-img-wrapper">
                      {itemCards?.card?.info?.imageId && (
                        <img
                          className="w-52 shadow-2xl rounded-2xl border-8 border-white"
                          src={IMG_CDN + itemCards?.card?.info?.imageId}
                          alt={itemCards?.card?.info?.description}
                        />
                      )}
                     
                    </div>
                    <div className="text-orange-900 grid grid-rows-4">             {/*grid container*/}
                       <div class="row-span-2">                                                          {/* div in grid #1 */}
                         <h3 className="font-bold text-lg m-3 flex text-red-900 ">
                         {itemCards?.card?.info?.name}
                         </h3>
                       </div>
                      
                       <div className="row-span-1">
                         <p className=" m-3  text-lg text-red-90 font-mono">
                          {itemCards?.card?.info?.price > 0 ?new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                             }).format(itemCards?.card?.info?.price / 100): "Not Mentioned"}
                         </p>
                       </div>
                       <div className="mb-auto">
                         <button data-testid="addBtn" className = "bg-orange-900  font-mono w-20 ml-2 text-white rounded-full h-9"onClick={()=>handleAddItem(itemCards?.card?.info)}>
                         Add</button>
                         <button className = "bg-orange-900 w-24 ml-2  font-mono text-white rounded-full  h-9"onClick={()=>handleRemoveItem(itemCards?.card?.info)}>
                         Remove</button> 
                       
                       </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
    
    </>
  );
}

export default RestaurantMenu;
