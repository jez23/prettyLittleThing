import React from 'react';
import { render , cleanup, fireEvent, screen} from '@testing-library/react'
import ProductItem from './ProductItem';
import '@testing-library/jest-dom/extend-expect';
import { ConstProvider } from '../contexts/Context';

afterEach(cleanup);

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