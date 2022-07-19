import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Search = () => {
    // useStates

    const [city1, setCity1] = useState([])
    const [city2, setCity2] = useState([])

    const [search, setSearch] = useState('')

    const options = {
        'headers': {
          'Authorization': 'Basic YzUyYjczZDk1NTIxOThhNTM3YzA5MDA4OThlOWQ1NTE6MTkxMGQ2M2IxYmFlY2Q4NTMyOTAzNzcwN2JlMDhhZjE=',
        }
      };
      
    useEffect(() => {
        async function getData() {
            const {data} = await fetch(`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search}`, options)
            .then(res => res.json())
            .then(
            (data) => {
                setCity1(data.data);
                setCity2(data.data);
            },
            (error) => {
                    // error handle
                    console.log(error);
            })
        }
    getData()
    }, [search])

    
    // handleChange
    const handleChange = (event) => {
        setCity1(event.target.value.toLowerCase())
        setCity2(event.target.value.toLowerCase())
    }
    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()

    }
    // loading animation 


    return (
        <Form type="submit" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFirstCityInput">
                <Form.Label htmlFor="city1">Choose the first city you would like to compare.</Form.Label>
            <Form.Control 
                type="text" 
                id="city1"
                placeholder="i.e. Los Angeles CA"
                onInput={handleChange}
                value={city1}
            >
            </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSecondCityInput">
                <Form.Label htmlFor ="city2"> Choose the second city you would like to compare.</Form.Label>
            <Form.Control
                type="text"
                id="city2"
                placeholder="i.e. San Francisco CA"
                onInput={handleChange}
                value={city2}
            >
            </Form.Control>
            </Form.Group>
            <Button className ="d-grid gap-2" variant="secondary" size="lg" type="submit">
                Compare cities
            </Button>
        </Form>
    )
}

export default Search
