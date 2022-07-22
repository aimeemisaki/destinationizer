import '../Styles/Book.css'
import React from 'react';
import City1Book from '../Components/City1Book';
import City2Book from '../Components/City2Book'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Book = ({ city1, city2 }) => {
    let id = useParams()
    console.log(id.cityId)
    
    return (
        <Container className="p-5 bg-light border rounded-3 d-flex align-items-center justify-content-center">
            {id.cityId === "1" 
            ? <City1Book city1={city1} />
            : <City2Book city2= {city2} />
            }  
        </Container>
    )
}

export default Book
