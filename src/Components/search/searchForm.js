import { Link } from 'react-router-dom';
import React, { useReducer } from 'react';
import { statesArray } from '../../data-and-functions/statesArray';
import { searchReducer } from '../../data-and-functions/searchReducer';
import { Form, Dropdown, Container, Row, Col } from 'react-bootstrap';
import './Search.css';


const SearchForm = () => {
    // Initial state for searchReducer
    // ===========================================================================
    const initialState = {
        inputState1: '',
        inputState2: '',
        inputCity1: '',
        inputCity2: ''
    }

    // State Hooks and Variables
    // ===========================================================================
    
    const [searchForm, dispatch] = useReducer(searchReducer, initialState)


    // Event Handlers
    // ===========================================================================


        const cityHandler = (event) => {
            dispatch({
                type: 'update',
                input: { key: event.target.name, value: event.target.value }
            })
        }

        const stateHandler = (event) => {
            dispatch({
                type: 'update',
                input: { key: event.target.name, value: event.target.text }
            })
        }

        
    if (!searchForm) {
        return <Container>Loading...</Container>
    }
    return (
        <>
        <video id="search-video" autoPlay="autoplay" loop={true} muted defaultmuted="true" playsInline src="https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4">
        </video>
        <div class="grid place-items-center h-screen">
            <div id="search-container" class="rounded-md w-80 h-112 md:w-5/12">
                <header class="pb-8 md:pb-12 pt-10">
                    <h1 id='search-header'>
						LOOKING FOR YOUR NEXT DESTINATION?<br/>COMPARE HERE.
					</h1>
                </header>
                <Form type="submit">
                    <div class="grid place-items-center">
                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    
                                    <input
                                        name='inputCity1'
                                        type="text"
                                        placeholder="i.e. Los Angeles"
                                        onInput={cityHandler}
                                        value= {searchForm.inputCity1}
                                        id="search-input"
                                        class=" 
                                        contact-text
                                        block
                                        w-44
                                        mt-1
                                        border-gray-600
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50
                                        bg-white
                                        placeholder-gray-500
                                        text-zinc-900
                                        md:w-200
                                    ">
                                    </input>
                                </Col>
                                <Col>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='dark' className="border-white" id="search-text">
                                        { searchForm.inputState1 || 'State' }
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu
                                        className="mt-2"
                                        id="dropdown-menu"
                                        >
                                            {statesArray.map(state => (
                                                <Dropdown.Item
                                                name='inputState1'
                                                onClick={stateHandler}
                                                >
                                                    {state}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>                  
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <input
                                        name='inputCity2'
                                        type="text"
                                        placeholder="i.e. Denver"
                                        onInput={cityHandler}
                                        value={searchForm.inputCity2}
                                        id="search-input"
                                        class=" 
                                        contact-text
                                        block
                                        w-44
                                        mt-1
                                        border-gray-600
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50
                                        bg-white
                                        placeholder-gray-500
                                        text-zinc-900
                                        md:w-200
                                    ">
                                    </input>
                                </Col>
                                <Col>
                                <Dropdown>
                                        <Dropdown.Toggle variant='dark' className="border-white" id="search-text">
                                        { searchForm.inputState2 || 'State' }
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu
                                        className="mt-2"
                                        id="dropdown-menu"
                                        >
                                            {statesArray.map(state => (
                                                <Dropdown.Item
                                                name='inputState2'
                                                onClick={stateHandler}
                                                >
                                                    {state}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>
                    <div class="grid place-items-center">
                        <button
                        type="submit"
                        id="search-button"
                        class="
                            contact-header
                            h-10
                            px-5
                            text-stone-50
                            bg-neutral-700
                            rounded-lg
                            transition-colors
                            duration-150
                            focus:shadow-outline
                            hover:bg-stone-50
                            "
                            >
                            <Link to={`/compare/${searchForm.inputCity1}/${searchForm.inputState1}/${searchForm.inputCity2}/${searchForm.inputState2}`}>
                                COMPARE CITIES
                            </Link>
                        </button>
                    </div>
                </Form>
            </div>
        </div>
        </>
    )
}

export default SearchForm
