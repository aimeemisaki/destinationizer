import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';


const City1 = ({ city1 }) => {

    const [city1Name, setCity1Name] = useState('');
    const [city1Attributes, setCity1Attributes] = useState();
    const [city1Population, setCity1Population] = useState('');
    const [city1Icons, setCity1Icons] = useState();
    
    
    
    const getCity1 = () => {
        if (city1) {
        let city1Arr = []
        let city1IconArr = []
        for (let i=0; i<city1.included.length; i++) {
            if (city1.included[i].type.includes('known_for')) {
                city1Arr.push(city1.included[i].attributes.name)
                city1IconArr.push(city1.included[i].attributes.icon)
            } 
        }
        setCity1Attributes(city1Arr);
        setCity1Icons(city1IconArr);

        let newCity1Name = city1.data.attributes.name;
        setCity1Name(newCity1Name)
        
        let newCity1Population = city1.data.attributes.population
        setCity1Population(newCity1Population);
        }
    }

    useEffect(() => {
        getCity1()
    }, [city1]);

if (!city1) {
    return null
}
  return (
    <Card className ="bg-light border rounded-3" style={{ width: '18rem' }}>
        <Card.Title>{city1Name}</Card.Title>
        <Card.Body>
                <strong>Population:</strong> {city1Population} people
        </Card.Body>
        <Card.Header><strong>Known for:</strong></Card.Header>
        <ListGroup className="list-group-flush">
            {city1Icons && city1Icons.map(city1Icon => (
                <Image 
                key={city1Icon.id}
                src={city1Icon+".svg"}
                alt="icon"
                width={10}
                height={10}/>
            ))}
            {city1Attributes && city1Attributes.map(city1Attribute  => (
                <ListGroup.Item 
                key={city1Attribute.id}>
                {city1Attribute}
                </ListGroup.Item>
            ))}
        </ListGroup>
        <Button
        className ="d-grid gap-2" 
        variant="dark" 
        size="lg"
        target="_blank"
        style={{ marginTop: "1em"}}>
        <Link to='/book/1'>
            Book this city!
        </Link>
        </Button>
    </Card>
  )
    
}

export default City1