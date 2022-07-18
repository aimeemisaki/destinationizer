import React, { useState, useEffect } from 'react';

const Compare = () => {
    // useStates for city names
    const [city1Name, setCity1Name] = useState()
    const [city2Name, setCity2Name] = useState()
    // useStates for city attributes
    const [city1Attributes, setCity1Attributes] = useState()
    const [city2Attributes, setCity2Attributes] = useState()

    const options = {
        'headers': {
          'Authorization': 'Basic YzUyYjczZDk1NTIxOThhNTM3YzA5MDA4OThlOWQ1NTE6MTkxMGQ2M2IxYmFlY2Q4NTMyOTAzNzcwN2JlMDhhZjE=',
        }
      };
      
    
      const getCity1 = () => {
        fetch('https://api.roadgoat.com/api/v2/destinations/los-angeles-ca-usa', options)
        .then(res => res.json())
        .then(
          (data) => {
            const newCity1Attributes = () => {
                for (let i=0; i<data.included.length; i++) {
                    if (data.included[i].type.includes('known_for')) {
                      return data.included[i].attributes.name
                    }
                }
            };
            setCity1Attributes(newCity1Attributes);
            console.log(newCity1Attributes)

            let newCity1Name = data.data.attributes.name;
            setCity1Name(newCity1Name)
          },
          (error) => {
            console.log(error)
          }
        )
      }
  
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
        getCity1()
        getCity2()
      }, [])
  
    // get data from form 

    
    return (
        <div className="compare-container">
            <div className="city1-list-attributes">
                <h1>{city1Name}</h1>
                <p>{city1Attributes}</p>
            </div>
            <div className="city2-list-attributes">
                <h1>{city2Name}</h1>
                <p>{city2Attributes}</p>
            </div>
        </div>
    )

}

export default Compare
