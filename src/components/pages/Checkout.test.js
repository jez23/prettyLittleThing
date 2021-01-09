import React from 'react';
import { render } from '@testing-library/react'
import Checkout from './Checkout';

describe('Render component', () => {
    test("should render the Checkout component", () => {
        render(<Checkout />)
    })
})