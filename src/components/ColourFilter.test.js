import React from 'react';
import { render } from '@testing-library/react'
import ColourFilter from './ColourFilter';

import { ConstProvider } from '../contexts/Context';

describe('Render component', () => {
    test("should render the ColourFilter component", () => {
        render(<ConstProvider>
                    <ColourFilter />
                </ConstProvider>)
    })
})