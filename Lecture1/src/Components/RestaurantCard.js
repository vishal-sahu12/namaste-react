import { RES_URL }  from "../Utils/constants";
import { useState } from "react";


const RestaurantCard =(props) =>{

    // Normal Variable

    let listOfRestaurants =[];

    //Local State Variable

    const [listOfRestaurants2] = useState();
    const {resData} = props;
    return(
        
        <div className="res-card">
            <img alt="res-logo" src={RES_URL+resData.info.cloudinaryImageId}>
            </img>
            <h2>{resData.info.name}</h2>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime+" Minutes"}</h4>
            
        </div>
 
    )
};

export default RestaurantCard;