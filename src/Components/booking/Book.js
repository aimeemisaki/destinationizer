import React from 'react';
// import City1Book from '../Components/City1Book';
// import City2Book from '../Components/City2Book';
import { useLocation } from 'react-router-dom';

const Book = () => {
    const location = useLocation()
    console.log(location.state)
    // let id = useParams()
    return (
        <div className="pt-5 d-flex align-items-center justify-content-center">
            
            {/* {id.cityId === "1" 
            ? <City1Book city1={city1} />
            : <City2Book city2= {city2} />
            }   */}
        </div>
    )
}

export default Book
