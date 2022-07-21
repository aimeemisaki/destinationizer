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
        setSearchState1(event.target.value)
    }

    const handleStateChange2 = (event) => {
        setSearchState2(event.target.value)
    }

    
    // loading animation 
   


    return (
        <>
        <Form type="submit">
            <Form.Group className="mb-3">
                <Form.Label>Choose any city or town in the United States!</Form.Label>
            <Form.Control 
                type="text" 
                id="city1"
                placeholder="i.e. Los Angeles CA"
                onInput={handleChange1}
                value={search1}
            >
            </Form.Control>
            </Form.Group>
            <Dropdown>
                <DropdownButton
                variant="secondary"
                menuVariant="dark"
                title="State"
                className="mt-2"
                onSelect={handleStateChange1}
                value={searchState1}>
                    <Dropdown.Item>
                        AR
                    </Dropdown.Item>
                </DropdownButton>
            </Dropdown>
            <Form.Group className="mb-3">
                <Form.Label>Choose any city or town in the United States to compare!</Form.Label>
            <Form.Control
                type="text"
                id="city2"
                placeholder="i.e. San Francisco CA"
                onInput={handleChange2}
                value={search2}
            >
            </Form.Control>
            </Form.Group>
            <Dropdown>
                <DropdownButton
                variant="secondary"
                menuVariant="dark"
                title="State"
                className="mt-2"
                onSelect={handleStateChange2}
                value={searchState2}>
                    <Dropdown.Item>
                        AR
                    </Dropdown.Item>
                </DropdownButton>
            </Dropdown>
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
