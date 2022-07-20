import React from 'react';
import City1Book from '../Components/City1Book';
import City2Book from '../Components/City2Book';

const Book = ({ city1, city2 }) => {

    return (
        <div>
            <City1Book city1={city1}/>
            <City2Book city2={city2}/>
        </div>
    )
}

export default Book
