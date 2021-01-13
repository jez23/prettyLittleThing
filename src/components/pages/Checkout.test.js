import React from 'react';
import { render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkout from './Checkout';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the Checkout component", () => {
        render(<Checkout />)
    })
})