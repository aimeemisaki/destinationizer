import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { apiResultReducer } from '../../data-and-functions/apiResultReducer';
import { fetchReducer } from '../../data-and-functions/fetchReducer';
import { attributesFilter, iconsFilter, budgetNumFilter, budgetTextFilter, populationFixer } from '../../data-and-functions/dataFilter';
import './Compare.css';
import { Row, Col, Carousel } from 'react-bootstrap';




const City1 = ({ city1 }) => {
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
      fetchReducer(dispatch, `${city1}`, "Unexpected turbulence! Couldn't find the city you searched for.")
  }, [city1])

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
    <>
    <div class="grid place-items-center h-screen">
      <div id="search-container" class="rounded-full w-80 h-112 md:w-4/12">
        <p id="city-header">
          {name}
        </p>
        <p id="city-text">
          {numBudget}
        </p>
        <p id="city-text">
          {textBudget}
        </p>
        <p id="city-text">
          {population}
        </p>
        <Row>
          <Col>
            <div>
              {attributes && attributes.map (
                attribute => (
                  <div>
                    <p id="city-attribute-text" class="py-1 text-right">
                      {attribute}
                    </p>
                  </div>
                )
              )} 
            </div>
          </Col>
          <Col>
            <div>
              {icons && icons.map (
                icon => (
                  <div class="pt-1.5">
                    <img 
                    src={icon+".svg"} 
                    alt="icons"
                    class="w-6 h-6"
                    id="city-icon"
                    />
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
    



    </>
    // <Card className ="mt-4 px-2 py-2" border="dark" style={{ width: '18rem' }}>
    //     <Card.Title>{city1Name}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">
    //             <strong>Population:</strong> {city1Population} people
    //     </Card.Subtitle>
    //     <Card.Header><strong>Known for:</strong></Card.Header>
    //         <Row>
    //             <Col>
    //                 {city1Attributes && city1Attributes.map(city1Attribute  => (
    //                     <div>
    //                         <p>{city1Attribute}</p>
    //                     </div>
    //                 ))}
    //             </Col>
    //             <Col>
    //                 {city1Icons && city1Icons.map(city1Icon => (
    //                     <div>
    //                         <Image 
    //                         key={city1Icon.id}
    //                         src={city1Icon+".svg"}
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
    //     <Link to='/book/1'>
    //         Book this city!
    //     </Link>
    //     </Button>
    // </Card>
  )
    
}

export default City1