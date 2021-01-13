import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { ConstProvider } from '../../contexts/Context';
import {HashRouter, Switch} from "react-router-dom";
import { render, cleanup } from '@testing-library/react'
import Cart from './Cart';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the Cart component", () => {
          render(
            <HashRouter>
                <Switch >
                    <ConstProvider>
                        <Cart />
                    </ConstProvider>         
                </Switch>
            </HashRouter>)
    })
})