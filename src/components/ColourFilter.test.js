import React from 'react';
import { render } from '@testing-library/react'
import ColourFilter from './ColourFilter';

describe('Render component', () => {
    test("should render the ColourFilter component", () => {
        render(<ColourFilter />)
    })
})