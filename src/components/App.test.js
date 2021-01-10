import React from 'react';
import { render , screen} from '@testing-library/react';


import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from './App';

describe('Render component', () => {
    test("should render the APP component", () => {

        const history = createMemoryHistory()

        render(
            <Router history={history}>
                <App />
            </Router>
           
        )
        screen.debug();
    })
})