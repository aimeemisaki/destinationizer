import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
// import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { apiResultReducer } from '../../data-and-functions/apiResultReducer';
import { fetchReducer } from '../../data-and-functions/fetchReducer';


const City1 = ({ city1 }) => {
  const initialState = {
        loading: false,
        result: null,
        error: ''
  }

    const [state, dispatch] = useReducer(apiResultReducer, initialState)
    const { loading, result, error } = state
   

    useEffect(() => {
        fetchReducer(dispatch, `${city1}`, "Unexpected turbulence! Couldn't find the city you searched for.")
    }, [city1])

    console.log(result.data.attributes.name)
    const name = result.data.attributes.name

    console.log(result.data.attributes.budget)


//     const [city1Name, setCity1Name] = useState('');
//     const [city1Attributes, setCity1Attributes] = useState();
//     const [city1Population, setCity1Population] = useState('');
//     const [city1Icons, setCity1Icons] = useState();
    
    
    
//     const getCity1 = () => {
//         if (city1) {
//         let city1Arr = []
//         let city1IconArr = []
//         for (let i=0; i<city1.included.length; i++) {
//             if (city1.included[i].type.includes('known_for')) {
//                 city1Arr.push(city1.included[i].attributes.name)
//                 city1IconArr.push(city1.included[i].attributes.icon)
//             } 
//         }
//         setCity1Attributes(city1Arr);
//         setCity1Icons(city1IconArr);

//         let newCity1Name = city1.data.attributes.name;
//         setCity1Name(newCity1Name)
        
//         let newCity1Population = city1.data.attributes.population
//         setCity1Population(newCity1Population);
//         }
//     }

//     useEffect(() => {
//         getCity1()
//     }, [city1]);


// if (!city1) {
//     return null
// }
  return (
    <>
    <h1></h1>
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