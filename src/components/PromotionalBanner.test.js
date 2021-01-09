import React from 'react';
import { render } from '@testing-library/react'
import PromotionalBanner from './PromotionalBanner';

describe('Render component', () => {
    test("should render the PromotionalBanner component", () => {
        render(<PromotionalBanner />)
    })
})