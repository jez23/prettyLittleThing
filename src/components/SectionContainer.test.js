import React from 'react';
import { render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionContainer from './SectionContainer';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the SectionContainer component", () => {
        render(<SectionContainer />)
    })
})