import React from 'react';
import { render } from '@testing-library/react'
import CartTable from './CartTable';

describe('Render component', () => {
    test("should render the CartTable component", () => {
        render(<CartTable />)
    })
})