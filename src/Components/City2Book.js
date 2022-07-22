import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Airbnb from '../Images/airbnb.png';
import RentalCar from '../Images/rental-car.png';
import TourGuide from '../Images/tour-guide.png';

const City2Book = ({ city2 }) => {
    const [city2Airbnb, setCity2Airbnb] = useState();
    const [city2Kayak, setCity2Kayak] = useState();
    const [city2GetYourGuide, setCity2GetYourGuide] = useState();

    const getCity2Booking = () => {
        if (city2) {
        let newCity2Airbnb = city2.data.attributes.airbnb_url
        setCity2Airbnb(newCity2Airbnb);

        let newCity2Kayak = city2.data.attributes.kayak_car_rental_url
        setCity2Kayak(newCity2Kayak);
     
        let newCity2GetYourGuide = city2.data.attributes.getyourguide_url
        setCity2GetYourGuide(newCity2GetYourGuide);
        }
    };


    useEffect(() => {
        getCity2Booking()
    }, [city2]);

    if (!city2) {
        return null
    }
    return (
        <Container 
        className="p-5 bg-light border rounded-3 flex-row">
            <Row>
                <Col>
                    <a href={city2Airbnb}>
                        <Image 
                        src={Airbnb}
                        alt="Access Airbnb Website"
                        target="_blank"
                        width={150}
                        height={150}/>
                    </a>
                </Col>
                <Col>
                    <a href={city2Kayak}>
                        <Image 
                        src={RentalCar}
                        alt="Access Kayak Website"
                        target="_blank"
                        width={150}
                        height={150}/>
                    </a>
                </Col>
                <Col>
                    <a href={city2GetYourGuide}>
                        <Image 
                        src={TourGuide}
                        alt="Access GetYourGuide Website"
                        target="_blank"
                        width={150}
                        height={150}/>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-muted mt-3">Book lodging with Airbnb</p>
                </Col>
                <Col>
                    <p className="text-muted mt-3">Book rental cars with Kayak</p>
                </Col>
                <Col>
                    <p className="text-muted mt-3">Book tours and guides with GetYourGuide</p>
                </Col>
            </Row>
        </Container>
    )

}

export default City2Book