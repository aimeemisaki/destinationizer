import React, { useState } from 'react';

const Form = () => {
    // useState for city search
    const initialState = {
        city1: '',
        city2: ''
    };

    const [city1, setCity1] = useState(initialState)
    const [city2, setCity2] = useState(initialState)
    // handleChange
    const handleChange = (event) => {
        setCity1({...city1, [event.target.id]: event.target.value})
        setCity2({...city2, [event.target.id]: event.target.value})
    }
    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        setCity1(initialState)
        setCity2(initialState)
    }
    // loading animation 


    return (
        <form type="submit" onSubmit={handleSubmit}>
            <label htmlFor="city1">Choose the first city you would like to compare.</label>
            <input 
            type="text" 
            id="city1"
            onChange={handleChange}
            value={city1}
            >
            </input>
            <label htmlFor ="city2"> Choose the second city you would like to compare.</label>
            <input
            type="text"
            id="city2"
            onChange={handleChange}
            value={city2}
            >
            </input>
            <button type="submit">Compare</button>
        </form>
    )
}

export default Form
