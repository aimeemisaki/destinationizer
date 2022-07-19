import React, { useState, useEffect } from 'react';

const City2 = () => {
    const [city2Name, setCity2Name] = useState()
    const [city2Attributes, setCity2Attributes] = useState()
    const [city2Img, setCity2Img] = useState()

    const options = {
        'headers': {
          'Authorization': 'Basic YzUyYjczZDk1NTIxOThhNTM3YzA5MDA4OThlOWQ1NTE6MTkxMGQ2M2IxYmFlY2Q4NTMyOTAzNzcwN2JlMDhhZjE=',
        }
      };
      
    const getCity2 = () => {
        fetch('https://api.roadgoat.com/api/v2/destinations/san-francisco-ca-usa', options)
        .then(res => res.json())
        .then(
        (data) => {
            let newCity2Attributes = () => {
                for (let i=0; i<data.included.length; i++) {
                    if (data.included[i].type.includes('known_for')) {
                    return data.included[i].attributes.name
                    }
                }
            };
            setCity2Attributes(newCity2Attributes);

            let newCity2Name = data.data.attributes.name;
            setCity2Name(newCity2Name)

            console.log(data.included)
            // console.log(data.data.attributes.airbnb_url)
            // console.log(data.data.attributes.kayak_car_rental_url)
        },
        (error) => {
            console.log(error)
        }
        )
    }
    useEffect(() => {
    getCity2()
    })

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