import React, { useState, useEffect } from 'react';

const City1 = () => {

    const [city1Name, setCity1Name] = useState('')
    const [city1Attributes, setCity1Attributes] = useState('')
    const [city1Img, setCity1Img] = useState()

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
            let city1Arr = []
            let newCity1Attributes = () => {
                for (let i=0; i<data.included.length; i++) {
                    if (data.included[i].type.includes('known_for')) {
                        city1Arr.push(data.included[i].attributes.name)
                    } 
                } console.log(city1Arr)
            };
            setCity1Attributes(city1Arr);

            let newCity1Name = data.data.attributes.name;
            setCity1Name(newCity1Name)
          },
          (error) => {
            console.log(error)
          }
        )
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