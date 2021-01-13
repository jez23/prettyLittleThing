import React from 'react';
import { render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColourFilter from './ColourFilter';

import { ConstProvider } from '../contexts/Context';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the ColourFilter component", () => {
        render(<ConstProvider>
                    <ColourFilter />
                </ConstProvider>)
    })
})