import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'

const City2Book = ({ city2 }) => {
    const [city2Airbnb, setCity2Airbnb] = useState()
    const [city2Kayak, setCity2Kayak] = useState()
    const [city2GetYourGuide, setCity2GetYourGuide] = useState()

    const getCity2Booking = () => {
        if (city2) {
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
    }

    useEffect(() => {
        getCity2Booking()
    }, [city2])

    if (!city2) {
        return null
    }
    return (
        <div>
            <Button 
                variant="dark"
                href={city2Airbnb}
                target='_blank'
				rel='noreferrer noopener'
				style={{ marginTop: '1em' }}>Book Loding with Airbnb
            </Button>
            <Button 
                variant="dark"
                href={city2Kayak}
                target='_blank'
				rel='noreferrer noopener'
				style={{ marginTop: '1em' }}>Book Rental Cars with Kayak
            </Button>
            <Button 
                variant="dark"
                href={city2GetYourGuide}
                target='_blank'
				rel='noreferrer noopener'
				style={{ marginTop: '1em' }}>Book tours and guides with GetYourGuide
            </Button>
        </div>
    )

}

export default City2Book