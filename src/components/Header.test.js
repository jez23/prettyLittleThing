import React from 'react';
import { render } from '@testing-library/react'
import Header from './Header';

describe('Render component', () => {
    test("should render the header component", () => {
        render(<Header />)
    })
})