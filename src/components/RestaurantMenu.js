import { useParams } from "react-router-dom";
import { IMG_CDN } from "./Config";
import useRestaurant from "../utils/useRestaurant";
import { Shimmer } from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  const restaurantMenuInfo = restaurant?.cards;

  const dispatch = useDispatch();
  const handleAddItem = (itemCards) => {
    dispatch(addItem(itemCards));
  };
  const handleRemoveItem = (itemCards) => {
    dispatch(removeItem(itemCards));
  };

  let result = [],
    uniqueFoodItems = [];

  const customFilter = (object, result) => {
    if (object.hasOwnProperty("itemCards")) result.push(object);

    for (var i = 0; i < Object.keys(object).length; i++) {
      if (typeof object[Object.keys(object)[i]] == "object") {
        customFilter(object[Object.keys(object)[i]], result);
      }
    }
  };

  const resMenu =
    restaurantMenuInfo?.length > 0 && customFilter(restaurantMenuInfo, result);

  if (result.length > 0) {
    const uniqueIds = [];
    let uniqueItems = [
      ...new Set(result.flatMap((f) => f.itemCards).map((p) => p.card.info)),
    ];
    uniqueFoodItems = uniqueItems?.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.id);

      if (!isDuplicate) {
        uniqueIds.push(element.id);

        return true;
      }

      return false;
    });
  }

  return (
    <div>
      {!restaurant ? (
        <Shimmer />
      ) : (
        <div className="bg-yellow-50  ">
          <h1 className="text-2xl font-bold text-red-900 ml-5 ">Menu</h1>
          <div className="flex flex-wrap justify-around">
          {uniqueFoodItems.length > 0 ? (
            Object.values(uniqueFoodItems).map((item, index) => {
              if (index < 25 && item?.imageId ) {
                return (
                  <div className=" ">
                  <ul key={index} className="">
                    <div className=" text-red-900">
                      <div className="rounded-lg shadow-xl hover:scale-110 inline-block w-64   m-5  bg-white rounded-2xl align-top ">
                      <div>{(<img  className="rounded-lg" src={IMG_CDN + item?.imageId} alt="item" />)}</div>
                    
                      <div className="grid grid-row-3">
                        <div className="m-2 font-bold ">{item?.name}</div>
                        <div className="font-mono m-2"> ₹ {(item?.price || item?.defaultPrice) / 100} </div>
                      
                      <div className="m-auto pb-2 ">
                        <button className="font-mono p-1 pl-11 pr-11 rounded-full text-white bg-red-900 " onClick={() => {handleAddItem(item);}}> Add </button>
                        <button className="font-mono ml-2 p-1 pl-7 pr-7 rounded-full  text-white bg-red-900" onClick={() => {handleRemoveItem(item); }}>Remove</button>
                      </div>
                      </div> 

                      </div>
                    </div>
                  </ul>
                </div>  
                );
              }
            })
          ) : (
            <span>No restaurant menu items.</span>
          )}
          </div>
      </div>
      )}
    </div>
  );
};
export default RestaurantMenu;