import React from 'react';
import { createMemoryHistory } from "history";
import { Router } from 'react-router-dom';

import { render } from '@testing-library/react'
import Cart from './Cart';

describe('Render component', () => {
    test("should render the Cart component", () => {
        const history = createMemoryHistory(["/"]) 
        render( 
            <Router history={history}>
                <Cart />
            </Router>
                )
    })
})