import React, { useEffect } from 'react';
import City1 from '../Components/City1'
import City2 from '../Components/City2'
import Stack from 'react-bootstrap/Stack'

const Compare = ( { getData1, getData2, search1, search2, city1, city2 }) => {
    useEffect(() => {
        getData1(search1.toLowerCase().replace(' ', '-'));
        getData2(search2.toLowerCase().replace(' ', '-'))

    }, [])

    return (
        <Stack direction="horizontal" gap={3}>
            <div className="bg-light border">
            <City1 city1={city1}/>
            </div>
            <div className="bg-light border ms-auto">
            <City2 city2={city2} />
            </div>
        </Stack>
    )

}

export default Compare
