import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const [listData, setListData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await data.json();
      const restaurants = json?.data?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      console.log(restaurants);
      setListData(restaurants);
      setFilterData(restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  return listData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="searchbtn"
          onClick={() => {
            const resFilterData = listData.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilterData(resFilterData);
          }}
        >
          search
        </button>
      </div>
      <button
        onClick={() => {
          const filterData = listData.filter(
            (res) => res.card.card.info.avgRatingString > 4.5
          );
          setListData(filterData);
        }}
      >
        TopRatedRestaurant
      </button>
      <div className="restaurantContainer">
        <div className="restaurantCard">
          {filterData.map((restaurant) => (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
