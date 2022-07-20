import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const Search = ({ setSearch1, setSearch2, search1, search2 } ) => {
    
    
    // handleChanges
    const handleChange1 = (event) => {
        setSearch1(event.target.value);
    }
    const handleChange2 = (event) => {
        setSearch2(event.target.value)
    }

    
    // loading animation 
   


    return (
        <>
        <Form type="submit">
            <Form.Group className="mb-3">
                <Form.Label>Choose the first city you would like to compare.</Form.Label>
            <Form.Control 
                type="text" 
                id="city1"
                placeholder="i.e. Los Angeles CA"
                onInput={handleChange1}
                value={search1}
            >
            </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Choose the second city you would like to compare.</Form.Label>
            <Form.Control
                type="text"
                id="city2"
                placeholder="i.e. San Francisco CA"
                onInput={handleChange2}
                value={search2}
            >
            </Form.Control>
            </Form.Group>
            <Button 
            className ="d-grid gap-2" 
            variant="secondary" 
            size="lg" 
            type="submit">
            <Link to="/compare">
                Compare cities
            </Link>
            </Button>
        </Form>
        </>
    )
}

export default Search
