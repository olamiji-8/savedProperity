import React from "react";
import ProperyNavigation from "../../rent-apartment/components/ProperyNavigation";
import BuyShowList from "./BuyShowList";
import '../style/buy.scss'

const BuyNavigationComponents = () => {
    return (
        <div>
            <div className="Layout__Constraints">
                <ProperyNavigation />
                <BuyShowList />
            </div>
        </div>
    );
};

export default BuyNavigationComponents;
