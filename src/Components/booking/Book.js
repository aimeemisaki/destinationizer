import React from 'react';
// import City1Book from '../Components/City1Book';
// import City2Book from '../Components/City2Book';
import { useLocation } from 'react-router-dom';

const Book = () => {
    // State hook and Variables
    // ===========================================================================
    const location = useLocation()
    const city = location.state.data.attributes
    const name = city.name
    const airbnb = city.airbnb_url
    const kayak = city.kayak_car_rental_url
    const guide = city.getyourguide_url

    return (
        <div class="grid place-items-center h-screen">
            <div 
            id="city-container" 
            class="rounded-full w-80 h-112 md:w-4/12 py-12"
            >
                <p id="city-header">
                    {name}
                </p>
                <p id="city-text">
                    {airbnb}
                </p>
                <p id="city-text">
                    {kayak}
                </p>
                <p id="city-text">
                    {guide}
                </p>
            </div>
        </div>
    )
}

export default Book
