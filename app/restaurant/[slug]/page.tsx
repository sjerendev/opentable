import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantReservation from "./components/RestaurantReservation";
import Reviews from "./components/Reviews";
import Description from "./components/Description";
import Title from "./components/Title";
import RestaurantReviews from "./components/RestaurantReviews";

export default function RestaurantDetails() {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Title />
          <Reviews />
          <Description />
          <RestaurantImages />
          <RestaurantReviews />
        </div>
        <div className="w-[27%] relative text-reg">
          <RestaurantReservation />
        </div>
      </div>
    </>
  );
}
