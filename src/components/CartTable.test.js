import React from 'react';
import { render  } from '@testing-library/react'
import CartTable from './CartTable';
import { ConstProvider } from '../contexts/Context';

describe('Render component', () => {
    test("should render the CartTable component", () => {
        render(   <ConstProvider>
                    <CartTable />
                  </ConstProvider>)
    })
})

