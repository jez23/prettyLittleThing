import React from 'react';
import { render , screen,  waitFor , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartTable from './CartTable';
import { ConstProvider } from '../contexts/Context';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the CartTable component", () => {
        render(   <ConstProvider>
                    <CartTable />
                  </ConstProvider>)
    })
});


