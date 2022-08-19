// import React, { useEffect } from 'react';
// import City1 from '../Components/City1';
// import City2 from '../Components/City2';
// import Stack from 'react-bootstrap/Stack';
// import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom'


const Compare = () => {
    const { city1, city2, state1, state2 } = useParams()

    
    
    // useEffect(() => {
    //     getData1(search1.toLowerCase().replace(' ', '-'), searchState1.toLowerCase());
    //     getData2(search2.toLowerCase().replace(' ', '-'), searchState2.toLowerCase());
    // }, [])

    // if (error) {
    // <div>
    //             <Alert variant="danger">{error}</Alert>
    //         </div>
    
    return (
        <>
{/*             
            <Stack direction="horizontal" gap={3} className="pt-5 d-flex align-items-center justify-content-center">
                <div>
                    <City1 city1={city1}/>
                </div>
                <div>
                    <City2 city2={city2} />
                </div>
            </Stack> */}
        </>
    )
}


export default Compare
