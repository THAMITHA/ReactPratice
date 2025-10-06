import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../constant";
import { RESTAURANT_API } from "../constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId + RESTAURANT_API);
    const json = await data.json();
    setResInfo(json.data);
    console.log(resInfo?.cards?.[2]?.card?.card?.info);
    console.log(
      resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        .card?.itemCards[0]?.card?.info?.price
    );
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, avgRatingString } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      .card || {};
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",")}-{avgRatingString}
      </h2>
      <p>Menu</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}- Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
