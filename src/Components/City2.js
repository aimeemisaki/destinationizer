import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


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

    console.log(city2)
    if(!city2) {
        return null
    }
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Title>{city2Name}</Card.Title>
        <Card.Header>Known for:</Card.Header>
        <ListGroup className="list-group-flush">
            {city2Attributes && city2Attributes.map(city2Attribute  => (
                <ListGroup.Item 
                key={city2Attribute.id}>
                {city2Attribute}
                </ListGroup.Item>
            ))}
        </ListGroup>
        <Button
        className ="d-grid gap-2" 
        variant="dark" 
        size="lg"
        target="_blank"
        style={{ marginTop: "1em"}}>
        <Link to='/book'>
            Book this city!
        </Link>
        </Button>
    </Card>
    )
}

export default City2