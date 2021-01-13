import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartTableHeader from './CartTableHeader';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the CartTableHeader component", () => {
        render(<CartTableHeader />)
    })
})