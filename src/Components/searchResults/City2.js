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
    // State hooks and Variables
    // ===========================================================================
    const [state, dispatch] = useReducer(apiResultReducer, initialState)
    const { loading, result, error } = state


    useEffect(() => {
    fetchReducer(dispatch, `${city2}`, "Oops! Couldn't find the city you searched for.")
    }, [city2])
    
    return (
        <div class="grid place-items-center h-screen">
            <div id="city-container" class="rounded-full w-80 h-112 md:w-4/12">
                {result &&
                <>
                <p id="city-header">
                    {result.data.attributes.name}
                </p>
                <p id="city-text">
                    {budgetNumFilter(result.data.attributes)}
                </p>
                <p id="city-text">
                    {budgetTextFilter(result.data.attributes)}
                </p>
                <p id="city-text">
                    {populationFixer(result.data.attributes.population)}
                </p>
                <Row>
                    <Col>
                        <div>
                            {attributesFilter(result.included) && attributesFilter(result.included).map (
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
                            {iconsFilter(result.included) && iconsFilter(result.included).map (
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
                </>
                }
                {loading && <p id="city-header">LOADING...</p>}
                {error && <p id="city-header">{error}</p>}
            </div>
        </div>
    
    )
}

export default City2