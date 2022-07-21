import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


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
    <Card style={{ width: '18rem' }}>
        <Card.Title>{city1Name}</Card.Title>
        <Card.Header>Known for:</Card.Header>
        <ListGroup className="list-group-flush">
            {city1Attributes && city1Attributes.map(city1Attribute  => (
                <ListGroup.Item 
                key={city1Attribute.id}>
                {city1Attribute}
                </ListGroup.Item>
            ))}
        </ListGroup>
        <Button
        className ="d-grid gap-2" 
        variant="secondary" 
        size="lg"
        target="_blank"
        style={{ marginTop: "1em"}}>
        <Link to='/book/q?=1'>
            Book this city!
        </Link>
        </Button>
    </Card>
  )
    
}

export default City1