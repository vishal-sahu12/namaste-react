import resList from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";





const Body = () => (
    <div className="body">
        <div className="seachbar">
            <h2>
                Search
            </h2>
            <div className="res-container">
            {resList.map((restaurant) =>(
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
             ) )}
            </div>
           

        </div>
       

    </div>

);

export default Body;