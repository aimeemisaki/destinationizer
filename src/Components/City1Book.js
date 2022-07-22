import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image'
import Airbnb from '../Images/airbnb.png'
import RentalCar from '../Images/rental-car.png'
import TourGuide from '../Images/tour-guide.png'

const City1Book = ({ city1 }) => {
    const [city1Airbnb, setCity1Airbnb] = useState()
    const [city1Kayak, setCity1Kayak] = useState()
    const [city1GetYourGuide, setCity1GetYourGuide] = useState()

    // getting Airbnb, Kayak and GetYourGuide links
    const getCity1Booking = () => {
        if (city1) {
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
    }

    useEffect(() => {
        getCity1Booking()
    }, [city1])

    if (!city1) {
        return null
    }
    return (
        <div>
            <a href={city1Airbnb}>
                <Image 
                src={Airbnb}
                alt="Access Airbnb Website"/>
            </a>
            <a href={city1Kayak}>
                <Image 
                src={RentalCar}
                alt="Access Kayak Website"/>
            </a>
            <a href={city1GetYourGuide}>
                <Image 
                src={TourGuide}
                alt="Access GetYourGuide Website"/>
            </a>
        </div>
    )
}

export default City1Book