import React from 'react';
import { render , screen} from '@testing-library/react'
import App from './App';

describe('Render component', () => {
    test("should render the APP component", () => {
        render(<App />)
        screen.debug();
    })
})