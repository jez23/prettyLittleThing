import React from 'react';
import { render } from '@testing-library/react'
import SubTotal from './SubTotal';

import { ConstProvider } from '../contexts/Context';

describe('Render component', () => {
    test("should render the SubTotal component", () => {
        render(<ConstProvider>
                    <SubTotal />
                </ConstProvider>)
    })
})