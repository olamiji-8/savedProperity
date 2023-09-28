
import React from 'react'
import { GrSearch } from "react-icons/gr";
import { AiOutlineHome, AiOutlineDown } from "react-icons/ai";

function ProperyNavigation() {
    return (
        <div className="Rent__Property__Navigation">
            <div className="Rent__Property__Navigation__Column">
                <div className="Rent__Property__Navigation__Column__Item">
                    <div className="Rent__Property__Navigation__Column__Item__Icon">
                        <div className="Rent__Property__Navigation__Search">
                            <GrSearch />
                            <input type="text" placeholder="Search by name, location" />
                        </div>
                    </div>
                </div>
                <div className="Rent__Property__Navigation__Column__Item">
                    <div className="Rent__Property__Navigation__Search__Item">
                        <p>We Found</p>
                        <h4>
                            <AiOutlineHome />
                            10 Properties
                        </h4>
                    </div>
                </div>
                <div className="Rent__Property__Navigation__Column__Item bb">
                    <div className="Rent__Property__Navigation__Search__Filter">
                        <div className="Rent__Property__Navigation__Search__Filter__Column">
                            <div className="Price__Filter">
                                <p>Price</p>
                                <AiOutlineDown />
                            </div>
                        </div>
                        <div className="Rent__Property__Navigation__Search__Filter__Column">
                            <div className="Price__Filter">
                                <p>Beds & Baths</p>
                                <AiOutlineDown />
                            </div>
                        </div>
                        <div className="Rent__Property__Navigation__Search__Filter__Column">
                            <div className="Price__Filter">
                                <p>Type</p>
                                <AiOutlineDown />
                            </div>
                        </div>
                        <div className="Rent__Property__Navigation__Search__Filter__Column">
                            <div className="Price__Filter">
                                <p>more</p>
                                <AiOutlineDown />
                            </div>
                        </div>
                        <div className="Rent__Property__Navigation__Search__Filter__Column">
                            <div className="Price__Filter">
                                <input type="checkbox" name="save" id="save" />
                                <p>save your search</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProperyNavigation
