import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const City2 = ( { city2 }) => {
    const [city2Name, setCity2Name] = useState('')
    const [city2Attributes, setCity2Attributes] = useState([])
    // const [city2Img, setCity2Img] = useState()

      
    const getCity2 = () => {
        if (city2) {
        // setting city1Attributes to array with 'known_for' attributes pushed  
        let city2Arr = []
        for (let i=0; i<city2.included.length; i++) {
            if (city2.included[i].type.includes('known_for')) {
                city2Arr.push(city2.included[i].attributes.name)
            } 
        }
        setCity2Attributes(city2Arr);
        // setting city name to newCityName
        let newCity2Name = city2.data.attributes.name;
        setCity2Name(newCity2Name)
        // console.log(data.data.attributes.airbnb_url)
        // console.log(data.data.attributes.kayak_car_rental_url)
        }
    }
    
    useEffect(() => {
        getCity2()
    },[city2])

    if(!city2) {
        return null
    }
    return (
        <div className="city2-container">
            <div className="city2-attributes">
                <h1>{city2Name}</h1>
                <ul>
                    {city2Attributes && city2Attributes.map(city2Attribute  => (
                        <li 
                        key={city2Attribute.id}>
                        {city2Attribute}
                        </li>
                    ))}
                </ul>
            </div>
            <Button
            className ="d-grid gap-2" 
            variant="secondary" 
            size="lg">
                <Link to="/book">
                    Book this city!
                </Link>
            </Button>
        </div>
    )
}

export default City2