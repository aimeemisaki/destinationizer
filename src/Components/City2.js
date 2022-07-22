import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'


const City2 = ( { city2 }) => {
    const [city2Name, setCity2Name] = useState('')
    const [city2Attributes, setCity2Attributes] = useState([])
    const [city2Budget, setCity2Budget] = useState('')
    const [city2Population, setCity2Population] = useState('')
    const [city2Icons, setCity2Icons] = useState()
    // const SVG = '.svg'
      
    const getCity2 = () => {
        if (city2) {
        // setting city1Attributes to array with 'known_for' attributes pushed  
        let city2Arr = []
        let city2IconArr = []
        for (let i=0; i<city2.included.length; i++) {
            if (city2.included[i].type.includes('known_for')) {
                city2Arr.push(city2.included[i].attributes.name)
                city2IconArr.push(city2.included[i].attributes.icon)
            } 
        }
        setCity2Attributes(city2Arr);
        setCity2Icons(city2IconArr);
        // setting city name to newCityName
        let newCity2Name = city2.data.attributes.name;
        setCity2Name(newCity2Name)

        let newCity2Budget = city2.data.attributes.budget[1]
        setCity2Budget(newCity2Budget)
        
        let newCity2Population = city2.data.attributes.population
        setCity2Population(newCity2Population)
        // console.log(data.data.attributes.airbnb_url)
        // console.log(data.data.attributes.kayak_car_rental_url)
        }
    }
    
    useEffect(() => {
        getCity2()
    },[city2])

    // data.attributes.budget[1]
    // data.attributes.population

    if(!city2) {
        return null
    }
    return (
        <Card className ="bg-light border rounded-3" style={{ width: '18rem' }}>
            <Card.Title>{city2Name}</Card.Title>
            <Card.Body>
                Budget rating (0-8): {city2Budget} <br/>
                Population: {city2Population} people
            </Card.Body>
            <Card.Header>Known for:</Card.Header>
            <ListGroup className="list-group-flush" direction="horizontal">
                {city2Icons && city2Icons.map(city2Icon => (
                    <Image 
                    key={city2Icon.id}
                    src={city2Icon+".svg"}>
                    </Image>
                ))}
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
            style={{ marginTop: "1em", marginBottom: "1em"}}>
            <Link to='/book/2'>
                Book this city!
            </Link>
            </Button>
        </Card>
    )
}

export default City2