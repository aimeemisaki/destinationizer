import '../Styles/Compare.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const City2 = ( { city2 }) => {
    const [city2Name, setCity2Name] = useState('');
    const [city2Attributes, setCity2Attributes] = useState([]);
    const [city2Population, setCity2Population] = useState('');
    const [city2Icons, setCity2Icons] = useState();
      
    const getCity2 = () => {
        if (city2) {
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

        let newCity2Name = city2.data.attributes.name
        setCity2Name(newCity2Name);
        
        let newCity2Population = city2.data.attributes.population
        setCity2Population(newCity2Population);
        }
    }
    
    useEffect(() => {
        getCity2()
    },[city2]);

    if(!city2) {
        return null
    }
    return (
        <Card className="px-2 py-2" border="dark" style={{ width: '18rem' }}>
            <Card.Title>{city2Name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                <strong>Population:</strong> {city2Population} people
            </Card.Subtitle>
            <Card.Header><strong>Known for:</strong></Card.Header>
                <Row>
                    <Col>
                        {city2Attributes && city2Attributes.map(city2Attribute  => (
                                <div> 
                                    <p>{city2Attribute}</p>
                                </div>
                        ))}
                    </Col>
                    <Col>
                        {city2Icons && city2Icons.map(city2Icon => (
                            <div>
                                <Image 
                                key={city2Icon.id}
                                src={city2Icon+".svg"}
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
                <Link to='/book/2'>
                    Book this city!
                </Link>
            </Button>
        </Card>
    )
}

export default City2