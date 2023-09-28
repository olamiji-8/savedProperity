import React from 'react';
import SortProperty from '../features/buy-apartment/components/SortProperty';
import ProperyNavigation from '../features/rent-apartment/components/ProperyNavigation';
import Footer from '../layouts/Footer';
import '../styles/pages/search-no-results.scss'

const SearchNoResults = () => {
    return (
        <>
            {/* properrty Naerviation bar */}
            <ProperyNavigation />

            <div className='Layout__Constraints'>
                {/* SORT PROPERTY  */}
                <SortProperty />

                {/* PROPERTY CARD */}
                {/* Search Container */}
                <div className='No_Searh_Resault_container'>
                    {/* Search Property result */}
                    <div className='No_Searh_Resault'>
                        <div className='No_Searh_Resault__text'>
                            <h2>No Properties found, change your filters or zoom out</h2>
                        </div>
                    </div>

                    {/* Search Property Map */}
                    <div className='No_Searh__Result_Map'><h1>MAP</h1></div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default SearchNoResults;
