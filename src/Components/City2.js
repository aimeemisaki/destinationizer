import React, { useState, useEffect } from 'react';

const City2 = ( { city2 }) => {
    const [city2Name, setCity2Name] = useState('')
    const [city2Attributes, setCity2Attributes] = useState([])
    // const [city2Img, setCity2Img] = useState()

      
    const getCity2 = () => {
        // setting city1Attributes to array with 'known_for' attributes pushed  
        let city2Arr = []
        for (let i=0; i<city2.included.length; i++) {
            if (city2.included[i].type.includes('known_for')) {
                city2Arr.push(city2.included[i].attributes.name)
            } 
        }
        setCity2Attributes(city2Arr);
        // console.log(city2Arr)


        // setting city name to newCityName
        // let newCity2Name = city2.data.attributes.name;
        // setCity2Name(newCity2Name)
        // console.log(data.data.attributes.airbnb_url)
        // console.log(data.data.attributes.kayak_car_rental_url)
    }
    
    useEffect(() => {
    getCity2()
    },[])

    return (
        <div className="city2-container">
            <div className="city2-attributes">
                <h1>{city2Name}</h1>
                <p>{city2Attributes}</p>
            </div>
        </div>
    )
}

export default City2