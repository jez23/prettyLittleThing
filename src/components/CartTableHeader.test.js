import React from 'react';
import { render } from '@testing-library/react'
import CartTableHeader from './CartTableHeader';

describe('Render component', () => {
    test("should render the CartTableHeader component", () => {
        render(<CartTableHeader />)
    })
})