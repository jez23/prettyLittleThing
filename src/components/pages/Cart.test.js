import React from 'react';
import { render } from '@testing-library/react'
import Cart from './Cart';

describe('Render component', () => {
    test("should render the Cart component", () => {
        render(<Cart />)
    })
})