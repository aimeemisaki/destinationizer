import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
    <Card className ="px-2 py-2" border="dark" style={{ width: '18rem' }}>
        <Card.Title>{city1Name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
                <strong>Population:</strong> {city1Population} people
        </Card.Subtitle>
        <Card.Header><strong>Known for:</strong></Card.Header>
            <Row>
                <Col>
                    {city1Attributes && city1Attributes.map(city1Attribute  => (
                        <div>
                            <p>{city1Attribute}</p>
                        </div>
                    ))}
                </Col>
                <Col>
                    {city1Icons && city1Icons.map(city1Icon => (
                        <div>
                            <Image 
                            key={city1Icon.id}
                            src={city1Icon+".svg"}
                            alt="icon"
                            width={35}
                            height={35}
                            style={{ marginRight: "5em", marginTop: ".25em"}}/>
                        </div>
                    ))}
                </Col>
            </Row>
        <Button
        className ="d-grid gap-2" 
        variant="dark" 
        size="lg"
        style={{ marginTop: "1em"}}>
        <Link to='/book/1'>
            Book this city!
        </Link>
        </Button>
    </Card>
  )
    
}

export default City1