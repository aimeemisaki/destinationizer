import '../Styles/Search.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Search = ({ setSearch1, setSearch2, search1, search2, setSearchState1, setSearchState2, searchState1, searchState2} ) => {
    const handleChange1 = (event) => {
        setSearch1(event.target.value)
    };
    const handleChange2 = (event) => {
        setSearch2(event.target.value)
    };

    const handleStateChange1 = (event) => {
        setSearchState1(event)
    };

    const handleStateChange2 = (event) => {
        setSearchState2(event)
    };

    const states = ['AL', 'AK', 'AZ', 'AR', 'AS', 'CA', 'CO', 'CM', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'TT', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY'];

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
                        <Form.Label>Choose any city or town in the United States!</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control 
                                type="text"
                                id="city1"
                                placeholder="i.e. Los Angeles"
                                onInput={handleChange1}
                                value={search1}>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Dropdown>
                                <DropdownButton
                                variant="dark"
                                menuVariant="dark"
                                title={searchState1}
                                className="mt-2"
                                id="choose-state"
                                onSelect={handleStateChange1}>
                                    {states.map(state => (
                                        <Dropdown.Item
                                        eventKey={state}
                                        key={state}>
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
                                type="text"
                                id="city2"
                                placeholder="i.e. San Francisco"
                                onInput={handleChange2}
                                value={search2}>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Dropdown>
                                <DropdownButton
                                variant="dark"
                                menuVariant="dark"
                                title={searchState2}
                                className="mt-2"
                                id="choose-state"
                                onSelect={handleStateChange2}>
                                    {states.map(state => (
                                        <Dropdown.Item
                                        eventKey={state}
                                        key={state}>
                                            {state}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </Dropdown>
                        </Col>
                    </Row>
                </Form.Group>
                <Button 
                className ="d-flex align-center justify-content-center btn-block" 
                variant="dark" 
                size="lg" 
                type="submit">
                    <Link to="/compare">
                        Compare Cities
                    </Link>
                </Button>
            </Form>
        </Container>
    )
}

export default Search
