import '../Styles/Book.css';
import React from 'react';
import City1Book from '../Components/City1Book';
import City2Book from '../Components/City2Book';
import { useParams } from 'react-router-dom';

const Book = ({ city1, city2 }) => {
    let id = useParams()
    return (
        <div className="pt-5 d-flex align-items-center justify-content-center">
            {id.cityId === "1" 
            ? <City1Book city1={city1} />
            : <City2Book city2= {city2} />
            }  
        </div>
    )
}

export default Book
