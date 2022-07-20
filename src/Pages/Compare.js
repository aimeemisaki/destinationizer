import React from 'react';
import City1 from '../Components/City1'
import City2 from '../Components/City2'

const Compare = ( {city1, city2}) => {

    return (
        <div className="compare-container">
            <City1 city1={city1}/>
            <City2 city2={city2} />
        </div>
    )

}

export default Compare
