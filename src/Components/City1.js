import React, { useState, useEffect } from 'react';

const City1 = ({ city1 }) => {

    const [city1Name, setCity1Name] = useState('')
    const [city1Attributes, setCity1Attributes] = useState([])
    // const [city1Img, setCity1Img] = useState()

    
    const getCity1 = (city1) => {
        // setting city1Attributes to array with 'known_for' attributes pushed  
        let city1Arr = []
        let getCity1Attributes = () => {
            for (let i=0; i<city1.included.length; i++) {
                if (city1.included[i].type.includes('known_for')) {
                    city1Arr.push(city1.included[i].attributes.name)
                } 
            } 
        } 
        setCity1Attributes(city1Arr);
        // setting city name to newCityName
        // let newCity1Name = city1.data.attributes.name;
        // setCity1Name(newCity1Name)
    }

    useEffect(() => {
    getCity1()
    }, [])

  return (
        <div className="city1-container">
            <div className="city1-list-attributes">
                <h1>{city1Name}</h1>
                <p>{city1Attributes}</p>
            </div>
        </div>
  )
    
}

export default City1