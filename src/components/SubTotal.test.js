import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubTotal from './SubTotal';

import { ConstProvider } from '../contexts/Context';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the SubTotal component", () => {
        render(<ConstProvider>
                    <SubTotal />
                </ConstProvider>)
    })
})