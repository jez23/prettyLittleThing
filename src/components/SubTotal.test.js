import React from 'react';
import { render } from '@testing-library/react'
import SubTotal from './SubTotal';

describe('Render component', () => {
    test("should render the SubTotal component", () => {
        render(<SubTotal />)
    })
})