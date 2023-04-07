import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "./Config";
import useRestaurant from "../utils/useRestaurant";
import {Shimmer} from "./Shimmer";
// import { Header } from "./Header";
import Footer from "./Footer";

const RestaurantMenu = () => {
  const { id} = useParams();

  const restaurant = useRestaurant(id);

  const recData =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (items) => items.card.card.title == "Recommended"
    );

  console.log(recData);

  // .find(items => items.card.card.title=="Recommended")

  return !restaurant ? (<Shimmer />) :(
          <>
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <h3 className="text-2xl font-semibold">BEST SELLERS</h3>
              <p className="text-xl ">
                {Object.keys(recData?.card?.card?.itemCards).length} ITEMS
              </p>
            </div>
            
                  
            <div className="menu-items-list">
              {Object.values(recData?.card?.card?.itemCards).map(
                (itemCards) => (
                  
                  <div className="flex">
                    <div className="menu-img-wrapper">
                      {itemCards?.card?.info?.imageId && (
                        <img
                          className="w-52"
                          src={IMG_CDN + itemCards?.card?.info?.imageId}
                          alt={itemCards?.card?.info?.description}
                        />
                      )}
                      <button className="btn bg-orange-400 add-btn">
                      </button>
                    </div>
                    <div className="flex">
                      <h3 className="font-bold m-3 flex">
                        {itemCards?.card?.info?.name}
                      </h3>
                      <p className="flex m-3 ">
                        {itemCards?.card?.info?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(itemCards?.card?.info?.price / 100)
                          : " "}
                      </p>
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
