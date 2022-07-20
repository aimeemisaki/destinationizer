import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const City1 = ({ city1 }) => {

    const [city1Name, setCity1Name] = useState('')
    const [city1Attributes, setCity1Attributes] = useState()
    // const [city1Img, setCity1Img] = useState()
    
    
    
    const getCity1 = () => {
        if (city1) {
        let city1Arr = []
        for (let i=0; i<city1.included.length; i++) {
            if (city1.included[i].type.includes('known_for')) {
                city1Arr.push(city1.included[i].attributes.name)
            } 
        }
        setCity1Attributes(city1Arr);
        // setting city name to newCityName
        let newCity1Name = city1.data.attributes.name;
        setCity1Name(newCity1Name)
        }
    }

    useEffect(() => {
        getCity1()
    }, [city1])

if (!city1) {
    return null
}
  return (
        <div className="city1-container">
            <div className="city1-list-attributes">
                <h1>{city1Name}</h1>
                <ul>
                    {city1Attributes && city1Attributes.map(city1Attribute  => (
                        <li 
                        key={city1Attribute.id}>
                        {city1Attribute}
                        </li>
                    ))}
                </ul>
            </div>
            <Button
            className ="d-grid gap-2" 
            variant="secondary" 
            size="lg">
                <Link to='/book'>
                    Book this city!
                </Link>
            </Button>
            
        </div>
  )
    
}

export default City1