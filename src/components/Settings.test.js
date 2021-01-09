import React from 'react';
import { render } from '@testing-library/react'
import Settings from './Settings';

describe('Render component', () => {
    test("should render the Settings component", () => {
        render(<Settings />)
    })
})