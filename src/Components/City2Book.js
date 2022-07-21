import React, { useState } from 'react';

const City2Book = ({ city2 }) => {
    const [city2Airbnb, setCity2Airbnb] = useState()
    const [city2Kayak, setCity2Kayak] = useState()
    const [city2GetYourGuide, setCity2GetYourGuide] = useState()

    const getCity1Booking = () => {
        // getting airbnb url from data.attributes
        let newCity2Airbnb = city2.data.attributes.airbnb_url
        setCity2Airbnb(newCity2Airbnb);
        // getting kayak url from data.attributes
        let newCity2Kayak = city2.data.attributes.kayak_car_rental_url
        setCity2Kayak(newCity2Kayak)
        // getting GetYourGuide url from data.attributes
        let newCity2GetYourGuide = city2.data.attributes.getyourguide_url
        setCity2GetYourGuide(newCity2GetYourGuide)
    }

return (
    <div>
        <a href={city2Airbnb}>Airbnb</a>
        <a href={city2Kayak}>Kayak</a>
        <a href={city2GetYourGuide}>GetYourGuide</a>
    </div>
)

}

export default City2Book