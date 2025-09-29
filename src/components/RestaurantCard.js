import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRatingString, cloudinaryImageId } =
    resData.card.card.info;
  const { deliveryTime } = resData.card.card.info.sla;
  console.log(resData.card.card);

  const stylecard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card" style={stylecard}>
      <img
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} rating</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
