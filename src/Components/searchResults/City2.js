import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { apiResultReducer } from '../../data-and-functions/apiResultReducer';
import { fetchReducer } from '../../data-and-functions/fetchReducer';
import { attributesFilter, iconsFilter, budgetNumFilter, budgetTextFilter, populationFixer } from '../../data-and-functions/dataFilter';
// import { Button, Card, Image, Row, Col }from 'react-bootstrap';


const City2 = ( { city2 }) => {
    // Initial state for apiResultReducer
    // ===========================================================================
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }
    // State hooks
    // ===========================================================================
    const [state, dispatch] = useReducer(apiResultReducer, initialState)
    const { loading, result, error } = state


    useEffect(() => {
    fetchReducer(dispatch, `${city2}`, "Unexpected turbulence! Couldn't find the city you searched for.")
    }, [city2])

    // Variables
    // ===========================================================================
    if (!result) {
    return null 
    } 
    const city = result.data.attributes
    const name = city.name
    const attributes = attributesFilter(result.included)
    const icons = iconsFilter(result.included)
    const numBudget = budgetNumFilter(city)
    const textBudget = budgetTextFilter(city)
    const population = populationFixer(city.population)
    

    return (
    <></>
    // <Card className="mt-4 px-2 py-2" border="dark" style={{ width: '18rem' }}>
    //     <Card.Title>{city2Name}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">
    //         <strong>Population:</strong> {city2Population} people
    //     </Card.Subtitle>
    //     <Card.Header><strong>Known for:</strong></Card.Header>
    //         <Row>
    //             <Col>
    //                 {city2Attributes && city2Attributes.map(city2Attribute  => (
    //                         <div> 
    //                             <p>{city2Attribute}</p>
    //                         </div>
    //                 ))}
    //             </Col>
    //             <Col>
    //                 {city2Icons && city2Icons.map(city2Icon => (
    //                     <div>
    //                         <Image 
    //                         key={city2Icon.id}
    //                         src={city2Icon+".svg"}
    //                         alt="icon"
    //                         width={35}
    //                         height={35}
    //                         style={{ marginRight: "5em", marginTop: ".25em"}}/>
    //                     </div>
    //                 ))}
    //             </Col>
    //         </Row>
    //     <Button
    //     className ="btn d-grid gap-2" 
    //     variant="dark" 
    //     size="lg"
    //     style={{ marginTop: "1em"}}>
    //         <Link to='/book/2'>
    //             Book this city!
    //         </Link>
    //     </Button>
    // </Card>
    )
}

export default City2