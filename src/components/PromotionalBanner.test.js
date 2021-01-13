import React from 'react';

import { render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PromotionalBanner from './PromotionalBanner';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the PromotionalBanner component", () => {
        render(<PromotionalBanner />)
    })
})