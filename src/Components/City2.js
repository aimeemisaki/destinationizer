import React, { useState, useEffect } from 'react';

const City2 = () => {
    const [city2Name, setCity2Name] = useState()
    // useStates for city attributes
    
    const [city2Attributes, setCity2Attributes] = useState()

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
    }, [])

    return (
        <div></div>
    )
}

export default City2