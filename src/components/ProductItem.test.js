import React from 'react';
import { render } from '@testing-library/react'
import ProductItem from './ProductItem';

import { ConstProvider } from '../contexts/Context';

describe('Render component', () => {
    test("should render the ProductItem component", () => {
        
        const testProduct = {
            id: 1,
            name: "test",
            quantity: 1,
            price: 10,
            colour: "red",
            img: "",
            total() {
                return (this.quantity * this.price).toFixed(2);
            },
            addItem(){
                return this.quantity++
            },
            removeItem(){
                return this.quantity--;
            }
        }

        render(
                <ConstProvider>
                    <ProductItem item={testProduct} key={testProduct.id} />
                </ConstProvider>
        )
    })
})