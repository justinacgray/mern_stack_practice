import React from 'react'
import { Link, navigate } from '@reach/router';
import { Button } from 'react-bootstrap'

function Welcome() {
    return (
        <div>
            <h2>Welcome! Let's create a product!</h2>
            <Link to={"/products/new" }>
            <Button variant="primary" type="submit">Let's create a product</Button>
            </Link>
            
        </div>
    )
}

export default Welcome;
