import React from 'react'
import SortProperty from '../features/buy-apartment/components/SortProperty'
import ProperyNavigation from '../features/rent-apartment/components/ProperyNavigation'
import Footer from '../layouts/Footer'
import '../styles/pages/search.scss'

const Search = () => {
    return (
        <>
            {/* properrty Naerviation bar */}
            <ProperyNavigation />

            <div className='Layout__Constraints'>
                {/* SORT PROPERTY  */}
                <SortProperty />

                {/* PROPERTY CARD */}
                {/* Search Container */}
                <div className='Searh_container'>
                    {/* Search Property result */}
                    <div className='Search__Property'>

                        {/* 1 */}
                        <div className='Search__Property__Results'>
                            <div className='Search-Card'>
                                {/* Card Image */}
                                <div className='Search_Card__Inner '>
                                    <img
                                        className="Search__Image"
                                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="food"
                                    />
                                </div>

                                {/* Card text */}
                                <div className="Search__Text__Container">
                                    <div className="Search__for__sale">
                                        <p>For Sale</p>
                                        <p>Land</p>
                                    </div>

                                    <div className="Search__for__sale__description">
                                        <p>Private Room in 4 bedroom house </p>
                                        <span>Ibeju Lekki</span>
                                        <h4>N4,000,000</h4>

                                        <div className="Search__for__sale__desc__short">
                                            <span>3 Bedrooms&nbsp;</span>
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='Search__Card__Spacing '></div>

                            <div className='Search-Card'>
                                {/* Card Image */}
                                <div className='Search_Card__Inner '>
                                    <img
                                        className="Search__Image"
                                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="food"
                                    />
                                </div>

                                {/* Card text */}
                                <div className="Search__Text__Container">
                                    <div className="Search__for__sale">
                                        <p>For Sale</p>
                                        <p>Land</p>
                                    </div>

                                    <div className="Search__for__sale__description">
                                        <p>Private Room in 4 bedroom house </p>
                                        <span>Ibeju Lekki</span>
                                        <h4>N4,000,000</h4>

                                        <div className="Search__for__sale__desc__short">
                                            <span>3 Bedrooms&nbsp;</span>
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* 2 */}
                        <div className='Search__Property__Results'>
                            <div className='Search-Card'>
                                {/* Card Image */}
                                <div className='Search_Card__Inner '>
                                    <img
                                        className="Search__Image"
                                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="food"
                                    />
                                </div>

                                {/* Card text */}
                                <div className="Search__Text__Container">
                                    <div className="Search__for__sale">
                                        <p>For Sale</p>
                                        <p>Land</p>
                                    </div>

                                    <div className="Search__for__sale__description">
                                        <p>Private Room in 4 bedroom house </p>
                                        <span>Ibeju Lekki</span>
                                        <h4>N4,000,000</h4>

                                        <div className="Search__for__sale__desc__short">
                                            <span>3 Bedrooms&nbsp;</span>
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='Search__Card__Spacing '></div>

                            <div className='Search-Card'>
                                {/* Card Image */}
                                <div className='Search_Card__Inner '>
                                    <img
                                        className="Search__Image"
                                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="food"
                                    />
                                </div>

                                {/* Card text */}
                                <div className="Search__Text__Container">
                                    <div className="Search__for__sale">
                                        <p>For Sale</p>
                                        <p>Land</p>
                                    </div>

                                    <div className="Search__for__sale__description">
                                        <p>Private Room in 4 bedroom house </p>
                                        <span>Ibeju Lekki</span>
                                        <h4>N4,000,000</h4>

                                        <div className="Search__for__sale__desc__short">
                                            <span>3 Bedrooms&nbsp;</span>
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className='Search__Property__Results'>
                            <div className='Search-Card'>
                                {/* Card Image */}
                                <div className='Search_Card__Inner '>
                                    <img
                                        className="Search__Image"
                                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="food"
                                    />
                                </div>

                                {/* Card text */}
                                <div className="Search__Text__Container">
                                    <div className="Search__for__sale">
                                        <p>For Sale</p>
                                        <p>Land</p>
                                    </div>

                                    <div className="Search__for__sale__description">
                                        <p>Private Room in 4 bedroom house </p>
                                        <span>Ibeju Lekki</span>
                                        <h4>N4,000,000</h4>

                                        <div className="Search__for__sale__desc__short">
                                            <span>3 Bedrooms&nbsp;</span>
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='Search__Card__Spacing '></div>

                            <div className='Search-Card'>
                                {/* Card Image */}
                                <div className='Search_Card__Inner '>
                                    <img
                                        className="Search__Image"
                                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="food"
                                    />
                                </div>

                                {/* Card text */}
                                <div className="Search__Text__Container">
                                    <div className="Search__for__sale">
                                        <p>For Sale</p>
                                        <p>Land</p>
                                    </div>

                                    <div className="Search__for__sale__description">
                                        <p>Private Room in 4 bedroom house </p>
                                        <span>Ibeju Lekki</span>
                                        <h4>N4,000,000</h4>

                                        <div className="Search__for__sale__desc__short">
                                            <span>3 Bedrooms&nbsp;</span>
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className='Search__Property__Results'>
                            <div className='Search-Card'>
                                {/* Card Image */}
                                <div className='Search_Card__Inner '>
                                    <img
                                        className="Search__Image"
                                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="food"
                                    />
                                </div>

                                {/* Card text */}
                                <div className="Search__Text__Container">
                                    <div className="Search__for__sale">
                                        <p>For Sale</p>
                                        <p>Land</p>
                                    </div>

                                    <div className="Search__for__sale__description">
                                        <p>Private Room in 4 bedroom house </p>
                                        <span>Ibeju Lekki</span>
                                        <h4>N4,000,000</h4>

                                        <div className="Search__for__sale__desc__short">
                                            <span>3 Bedrooms&nbsp;</span>
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='Search__Card__Spacing '></div>

                            <div className='Search-Card'>
                                {/* Card Image */}
                                <div className='Search_Card__Inner '>
                                    <img
                                        className="Search__Image"
                                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="food"
                                    />
                                </div>

                                {/* Card text */}
                                <div className="Search__Text__Container">
                                    <div className="Search__for__sale">
                                        <p>For Sale</p>
                                        <p>Land</p>
                                    </div>

                                    <div className="Search__for__sale__description">
                                        <p>Private Room in 4 bedroom house </p>
                                        <span>Ibeju Lekki</span>
                                        <h4>N4,000,000</h4>

                                        <div className="Search__for__sale__desc__short">
                                            <span>3 Bedrooms&nbsp;</span>
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Search Property Map */}
                    <div className='Search__Property__Map'><h1>MAP</h1></div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Search