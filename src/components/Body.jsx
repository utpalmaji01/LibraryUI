import React from "react";
import AllAssets from "./AllAssets.jsx";
import "../style/body.scss";

const Body = () => {
    return ( <div className="body-container">
        <div className="all-assets">
            <AllAssets />
        </div>
    </div> );
}
 
export default Body;