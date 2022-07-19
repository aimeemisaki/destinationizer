import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Search = ( {setCity1, setCity2} ) => {
    // useStates
    const [search1, setSearch1] = useState('')
    const [search2, setSearch2] = useState('')


    const options = {
        'headers': {
          'Authorization': 'Basic YzUyYjczZDk1NTIxOThhNTM3YzA5MDA4OThlOWQ1NTE6MTkxMGQ2M2IxYmFlY2Q4NTMyOTAzNzcwN2JlMDhhZjE=',
        }
      };

    async function getData1(search1) {
            const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search1}`, options)
            const res = await data.json()
                setCity1(res.data);
            // (error) = {
            //         // error handle
            //         console.log(error)
            // }
        }
    
    async function getData2(search2) {
        const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search2}`, options)
        const res = await data.json()
            setCity2(res.data);
        // (error) = {
        //         // error handle
        //         console.log(error)
        // }
    }

    
    // handleChange
    const handleChange = (event) => {
        setSearch1(event.target.value.toLowerCase().replace(' ', '-'));
        setSearch2(event.target.value.toLowerCase().replace(' ','-'))
    }
    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        getData1(search1);
        getData2(search2)

    }
    // loading animation 


    return (
        <Form type="submit" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Choose the first city you would like to compare.</Form.Label>
            <Form.Control 
                type="text" 
                id="city1"
                placeholder="i.e. Los Angeles CA"
                onInput={handleChange}
                value={search1}
            >
            </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Choose the second city you would like to compare.</Form.Label>
            <Form.Control
                type="text"
                id="city2"
                placeholder="i.e. San Francisco CA"
                onInput={handleChange}
                value={search2}
            >
            </Form.Control>
            </Form.Group>
            <Button 
            className ="d-grid gap-2" 
            variant="secondary" 
            size="lg" 
            type="submit">
                Compare cities
            </Button>
        </Form>
    )
}

export default Search
