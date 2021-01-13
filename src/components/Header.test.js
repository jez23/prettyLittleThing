import React from 'react';
import { render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the header component", () => {
        render(<Header />)
    })
})