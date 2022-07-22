import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Airbnb from '../Images/airbnb.png';
import RentalCar from '../Images/rental-car.png';
import TourGuide from '../Images/tour-guide.png';


const City1Book = ({ city1 }) => {
    const [city1Airbnb, setCity1Airbnb] = useState();
    const [city1Kayak, setCity1Kayak] = useState();
    const [city1GetYourGuide, setCity1GetYourGuide] = useState();

    const getCity1Booking = () => {
        if (city1) {
        let newCity1Airbnb = city1.data.attributes.airbnb_url
        setCity1Airbnb(newCity1Airbnb);

        let newCity1Kayak = city1.data.attributes.kayak_car_rental_url
        setCity1Kayak(newCity1Kayak);
   
        let newCity1GetYourGuide = city1.data.attributes.getyourguide_url
        setCity1GetYourGuide(newCity1GetYourGuide);
        }
    };
    useEffect(() => {
        getCity1Booking()
    }, [city1]);

    if (!city1) {
        return null
    }
    return (
        <Container className="bg-light px-4 py-4 border rounded-3 d-flex align-items-center justify-content-center" style={{ width: '25rem'}}>
            <Row>
                <Col>
                    <a href={city1Airbnb}>
                        <Image 
                        src={Airbnb}
                        alt="Access Airbnb Website"
                        target="_blank"
                        width={150}
                        height={150}/>
                    </a>
                </Col>
                <Col>
                    <a href={city1Kayak}>
                        <Image 
                        src={RentalCar}
                        alt="Access Kayak Website"
                        target="_blank"
                        width={150}
                        height={150}/>
                    </a>
                </Col>
                <Col>
                    <a href={city1GetYourGuide}>
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
                    <p className="text-muted mt-3" style={{fontSize: 18}}>Book lodging with Airbnb</p>
                </Col>
                <Col>
                    <p className="text-muted mt-3" style={{fontSize: 18}}>Book rental cars with Kayak</p>
                </Col>
                <Col>
                    <p className="text-muted mt-3" style={{fontSize: 18}}>Book tours and guides with GetYourGuide</p>
                </Col>
            </Row>
        </Container>
    )
}

export default City1Book