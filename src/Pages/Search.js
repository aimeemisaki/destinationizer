import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Search = ({ setSearch1, setSearch2, search1, search2, setSearchState1, setSearchState2, searchState1, searchState2 } ) => {
    
    
    // handleChanges
    const handleChange1 = (event) => {
        setSearch1(event.target.value);
    }
    const handleChange2 = (event) => {
        setSearch2(event.target.value)
    }

    const handleStateChange1 = (event) => {
        setSearchState1(event)
    }

    const handleStateChange2 = (event) => {
        setSearchState2(event)
    }

    // list of states to map through
    const states = ['AL', 'AK', 'AZ', 'AR', 'AS', 'CA', 'CO', 'CM', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'TT', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY']
    // loading animation 
   


    return (
        <>
        <Form type="submit">
            <Form.Group className="mb-3" direction="horizontal">
                <Form.Label>Choose any city or town in the United States!</Form.Label>
            <Form.Control 
                type="text" 
                id="city1"
                placeholder="i.e. Los Angeles"
                onInput={handleChange1}
                value={search1}
            >
            </Form.Control>
            <Dropdown>
                <DropdownButton
                variant="secondary"
                menuVariant="dark"
                title="State"
                className="mt-2"
                id="Choose State"
                onSelect={handleStateChange1}
                value={searchState1}
                >
                    {states.map(state => (
                        <Dropdown.Item
                        eventKey={state}
                        key={state}>
                        {state}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </Dropdown>
            </Form.Group>
            <Form.Group className="mb-3" direction="horizontal">
                <Form.Label>Choose any city or town in the United States to compare!</Form.Label>
            <Form.Control
                type="text"
                id="city2"
                placeholder="i.e. San Francisco"
                onInput={handleChange2}
                value={search2}
            >
            </Form.Control>
            <Dropdown>
                <DropdownButton
                variant="secondary"
                menuVariant="dark"
                title="State"
                className="mt-2"
                id="Choose State"
                onSelect={handleStateChange2}
                value={searchState2}>
                    {states.map(state => (
                        <Dropdown.Item
                        eventKey={state}
                        key={state}>
                        {state}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </Dropdown>
            </Form.Group>
            <Button 
            className ="d-grid gap-2" 
            variant="secondary" 
            size="lg" 
            type="submit">
            <Link to="/compare">
                Compare Cities
            </Link>
            </Button>
        </Form>
        </>
    )
}

export default Search
