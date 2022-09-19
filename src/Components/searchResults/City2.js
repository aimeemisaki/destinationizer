import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { apiResultReducer } from '../../data-and-functions/apiResultReducer';
import { fetchReducer } from '../../data-and-functions/fetchReducer';
import { attributesFilter, iconsFilter, budgetNumFilter, budgetTextFilter, populationFixer } from '../../data-and-functions/dataFilter';
import { Row, Col } from 'react-bootstrap';


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
        <div class="grid place-items-center h-screen">
            <div id="city-container" class="rounded-full w-80 h-112 md:w-4/12">
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
                <div class="grid place-items-center">
                    <button
                    type="submit"
                    id="search-button"
                    class="
                        contact-header
                        h-10
                        px-5
                        mt-2
                        text-stone-50
                        bg-neutral-700
                        rounded-lg
                        transition-colors
                        duration-150
                        focus:shadow-outline
                        hover:bg-stone-50
                        "
                        >
                        <Link to="/book" state={{result}}>
                            BOOK
                        </Link>
                    </button>
                </div>
            </div>
      </div>
    
    )
}

export default City2