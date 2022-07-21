import React, { useState } from 'react';

const City1Book = ({ city1 }) => {
    const [city1Airbnb, setCity1Airbnb] = useState()
    const [city1Kayak, setCity1Kayak] = useState()
    const [city1GetYourGuide, setCity1GetYourGuide] = useState()

    // getting Airbnb, Kayak and GetYourGuide links
    const getCity1Booking = () => {
        // getting airbnb url from data.attributes
        let newCity1Airbnb = city1.data.attributes.airbnb_url
        setCity1Airbnb(newCity1Airbnb);
        // getting kayak url from data.attributes
        let newCity1Kayak = city1.data.attributes.kayak_car_rental_url
        setCity1Kayak(newCity1Kayak)
        // getting GetYourGuide url from data.attributes
        let newCity1GetYourGuide = city1.data.attributes.getyourguide_url
        setCity1GetYourGuide(newCity1GetYourGuide)
    }
    return (
        <div>
            <a href={city1Airbnb}>Airbnb</a>
            <a href={city1Kayak}>Kayak</a>
            <a href={city1GetYourGuide}>GetYourGuide</a>
        </div>
    )
}

export default City1Book