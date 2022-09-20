import React from 'react';
import { useLocation } from 'react-router-dom';
import './Book.css';

const Book = () => {
    // State hook and Variables
    // ===========================================================================
    const location = useLocation()
    const city = location.state.result.data.attributes
    const name = (city.name).toUpperCase()
    const airbnb = city.airbnb_url
    const kayak = city.kayak_car_rental_url
    const guide = city.getyourguide_url


    return (
        <>
            <video id="search-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src="https://assets.mixkit.co/videos/preview/mixkit-traveling-a-long-road-from-the-heights-42503-large.mp4"></video>
            <div class="grid place-items-center h-screen">
                <div id="booking-container" class="rounded-full w-80 h-112 md:w-4/12 py-12">
                    <p id="booking-header">BOOKING <br/>{name}</p>
                    <div id="booking-inner-container">
                        <a href={airbnb}>
                            <div id="booking-circle" class="rounded-full w-32 h-32 md:w-32">
                                <i id="booking-icon" class="fa-brands fa-airbnb my-3"></i>
                                <p id="booking-text">AIRBNB</p>
                            </div>
                        </a>
                        <a href={kayak}>
                            <div id="booking-circle" class="rounded-full w-32 h-32 md:w-32">
                                <i id="booking-icon" class="fa-solid fa-car my-3"></i> 
                                <p id="booking-text">KAYAK CAR RENTAL</p>
                            </div>
                        </a>
                        <a href={guide}>
                            <div id="booking-circle" class="rounded-full w-32 h-32 md:w-32">
                                <i class="fa-regular fa-flag my-3"></i>
                                <p id="booking-text">GETYOURGUIDE TOURS</p>
                            </div>
                        </a>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Book
