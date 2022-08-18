import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import { statesArray } from '../../data-and-functions/statesArray';
import { searchReducer } from '../../data-and-functions/searchReducer';
import { Form, Button, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';


const Search = () => {
    // const handleChange1 = (event) => {
    //     setSearch1(event.target.value)
    // };
    // const handleChange2 = (event) => {
    //     setSearch2(event.target.value)
    // };

    // const handleStateChange1 = (event) => {
    //     setSearchState1(event)
    // };

    // const handleStateChange2 = (event) => {
    //     setSearchState2(event)
    // };
    // Initial state for searchCriteria
    // ===========================================================================

    const initialState = {
        inputState1: 'State',
        inputState2: 'State',
        inputCity1: '',
        inputCity2: ''
    }

   // State Hooks and Variables
  // ===========================================================================
    
    const [searchForm, dispatch] = useReducer(searchReducer, initialState)


  // Functions
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
            input: { key: event.target.name, value: event }
        })
    }

    console.log(statesArray)
    console.log(searchForm.inputCity1)
    console.log(searchForm.inputCity2)
    console.log(searchForm.inputState1)
    console.log(searchForm.inputState2)
    if (!searchForm) {
        return <Container>Loading...</Container>
    }
    return (
        <Container className="bg-transparent mt-5 pt-5 pb-4 mx-auto">
            <Container fluid className="py-4">
                <Row>
                    <Col>
                        <h2 className="text-center">Looking for a destination, but don't know where? Compare here.</h2>
                    </Col>
                </Row>
            </Container>
            <Form type="submit">
                <Form.Group className="mb-3">
                    <Row>
                        <Form.Label>Choose any city or town in the United States</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control 
                                name='inputCity1'
                                type="text"
                                placeholder="i.e. Los Angeles"
                                onInput={cityHandler}
                                value= {searchForm.inputCity1}>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Dropdown>
                                <DropdownButton
                                name='inputState1'
                                value={searchForm.inputState1}
                                onSelect={stateHandler}
                                variant="dark"
                                menuVariant="dark"
                                className="mt-2"
                                id="choose-state"
                                >
                                    {statesArray.map(state => (
                                        <Dropdown.Item
                                        eventKey={searchForm.inputState1}>
                                            {state}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </Dropdown>
                        </Col>
                    </Row>                  
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Form.Label>Choose any city or town in the United States to compare!</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                name='inputCity2'
                                type="text"
                                placeholder="i.e. San Francisco"
                                onInput={cityHandler}
                                value={searchForm.inputCity2}>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Dropdown>
                                <DropdownButton
                                name='inputState2'
                                value={searchForm.inputState2}
                                onSelect={stateHandler}
                                variant="dark"
                                menuVariant="dark"
                                className="mt-2"
                                id="choose-state"
                                >
                                    {statesArray.map(state => (
                                        <Dropdown.Item
                                        eventKey={searchForm.inputState2}>
                                            {state}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </Dropdown>
                        </Col>
                    </Row>
                </Form.Group>
                <Button 
                className ="btn d-flex align-center justify-content-center btn-block" 
                variant="dark" 
                size="lg" 
                type="submit">
                    <Link to="/compare" >
                        compare cities
                    </Link>
                </Button>
            </Form>
        </Container>
    )
}

export default Search
