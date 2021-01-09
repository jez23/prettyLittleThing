import React from 'react';
import { render } from '@testing-library/react'
import SectionContainer from './SectionContainer';

describe('Render component', () => {
    test("should render the SectionContainer component", () => {
        render(<SectionContainer />)
    })
})