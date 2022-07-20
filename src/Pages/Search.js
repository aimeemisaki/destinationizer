import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, Routes, Route } from 'react-router-dom';
import Compare from './Compare'

const Search = ({ setCity1, setCity2 } ) => {
    // useStates
    const [search1, setSearch1] = useState('')
    const [search2, setSearch2] = useState('')


    const options = {
        'headers': {
          'Authorization': 'Basic YzUyYjczZDk1NTIxOThhNTM3YzA5MDA4OThlOWQ1NTE6MTkxMGQ2M2IxYmFlY2Q4NTMyOTAzNzcwN2JlMDhhZjE=',
        }
      };
    
    let USA = 'usa'

    async function getData1(search1) {
            const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/${search1}-${USA}`, options)
            const res = await data.json()
                setCity1(res.data);
            // (error) = {
            //         // error handle
            //         console.log(error)
            // }
        }
    
    async function getData2(search2) {
        const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/${search2}-${USA}`, options)
        const res = await data.json()
            setCity2(res.data);
        // (error) = {
        //         // error handle
        //         console.log(error)
        // }
    }

    
    // handleChanges
    const handleChange1 = (event) => {
        setSearch1(event.target.value.toLowerCase().replace(' ', '-'));
    }
    const handleChange2 = (event) => {
        setSearch2(event.target.value.toLowerCase().replace(' ','-'))
    }

    // handleSubmits
    const handleSubmit = (event) => {
        event.preventDefault()
        getData1(search1);
        getData2(search2)

    }
    // loading animation 


    return (
        <>
        <Form type="submit" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Choose the first city you would like to compare.</Form.Label>
            <Form.Control 
                type="text" 
                id="city1"
                placeholder="i.e. Los Angeles CA"
                onInput={handleChange1}
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
                onInput={handleChange2}
                value={search2}
            >
            </Form.Control>
            </Form.Group>
            <Button 
            className ="d-grid gap-2" 
            variant="secondary" 
            size="lg" 
            type="submit">
            <Link to="/compare">
                Compare cities
            </Link>
            </Button>
        </Form>
        <Routes>
        <Route path="/compare" element={<Compare city1={setCity1} city2={setCity2}/>}></Route>
        </Routes>
        </>
    )
}

export default Search
