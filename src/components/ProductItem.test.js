import React from 'react';
import { render } from '@testing-library/react'
import ProductItem from './ProductItem';

describe('Render component', () => {
    test("should render the ProductItem component", () => {
        render(<ProductItem />)
    })
})