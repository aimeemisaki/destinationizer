import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
// import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { apiResultReducer } from '../../data-and-functions/apiResultReducer';
import { fetchReducer } from '../../data-and-functions/fetchReducer';
import { attributesFilter, iconsFilter, budgetNumFilter, budgetTextFilter } from '../../data-and-functions/dataFilter';


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
  const name = result.data.attributes.name
  const attributes = attributesFilter(result.included)
  const icons = iconsFilter(result.included)
 
  // const population = populationFixer(result.data.attributes.population)
  

  

  //   }
    // const cityArr = []
    // const city = result.data.attributes.name
    // cityArr.push(city)
    // for (let i=0; i < result.data.attributes.budget.length; i++) {
    //   if (Object.keys(result.data.attributes.budget[i]) === `${cityArr}`) {
    //     const budgetArr = Object.values(result.data.attributes.budget)
    //     // []
    //     // if (Object.keys(budgetObj) === 'text') {
    //     //     return Object.values(budgetObj)
    //     }
    // }
    
        
    // } 

  const ratings = Object.values(result.data.attributes.budget.California)
  console.log(ratings[0])
    // console.log(Object.values(result.data.attributes.budget))
    // array ['Los Angeles, CA', 'California', 'United States']

  return (
    <>
    <h2>{name}</h2>
    <div>
      {attributes && attributes.map (
        attribute => (
          <div>
            <p>{attribute}</p>
          </div>
        )
      )} 
    </div>
    <div>
      {icons && icons.map (
        icon => (
          <div>
            <img src={icon+".svg"} alt="icons"/>
          </div>
        )
      )}
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