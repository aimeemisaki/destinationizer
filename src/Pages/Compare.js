import React from 'react';

const Compare = ({ city1Name, city1Attributes, city2Name, city2Attributes }) => {
    // useStates for city names

  
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
