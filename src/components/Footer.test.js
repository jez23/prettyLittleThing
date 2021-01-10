import React from 'react';
import { render , screen} from '@testing-library/react'
import Footer from './Footer';


describe('Render component', () => {
    test("should render the footer component", () => {
        render(<Footer />)
        screen.debug();
    })
})
describe('Test Footer headers are correct', () => {
    beforeEach(() => {
        render(<Footer />);
    })
   test('should correctly match first footer header', () => {
        screen.getByText('LET US HELP YOU');
    })
    test("should correctly match second footer header", () => {
        screen.getByText('ABOUT US');
    })
    test("should correctly match third footer header", () => {
        screen.getByText('INFORMATION');
    })
    test("should correctly match fourth footer headers", () => {
        screen.getByText('MY ACCOUNT');
    })
})