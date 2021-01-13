import React from 'react';
import { render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Settings from './Settings';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the Settings component", () => {
        render(<Settings />)
    })
})