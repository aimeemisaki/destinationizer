import City1 from './City1'
import City2 from './City2'
import Stack from 'react-bootstrap/Stack';
import { useParams } from 'react-router-dom'
import { resultFix } from '../../data-and-functions/resultFix'
import React, { useEffect, useReducer } from 'react';
import { fetchReducer } from '../../data-and-functions/fetchReducer';
import { apiResultReducer } from '../..data-and-functions/apiResultReducer';


const Compare = () => {
    const { inputCity1, inputState1, inputCity2, inputState2 } = useParams()
    const endPoint1 = resultFix(`${inputCity1}`, `${inputState1}`)
    const endPoint2 = resultFix(`${inputCity2}`, `${inputState2}`)
   
    const initialState = {
        loading: false,
        error: ''
    }

    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)

    useEffect(() => {
        fetchReducer(dispatch, `${endPoint1}`, "Unexpected turbulence! Couldn't find the city you searched for.")

        fetchReducer(dispatch, `${endPoint2}`, "Unexpected turbulence! Couldn't find the city you searched for.")
    }, [endPoint1, endPoint2])



    return (
        <>
            <Stack direction="horizontal" gap={3} className="pt-5 d-flex align-items-center justify-content-center">
                <div>
                    <City1 city1={endPoint1}/>
                </div>
                <div>
                    <City2 city2={endPoint2} />
                </div>
            </Stack>
        </>
    )
}


export default Compare
