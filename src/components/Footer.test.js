import React from 'react';
import { render , screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the footer component", () => {
        render(<Footer />)
    })
})
describe('Test Footer headers are correct', () => {
    beforeEach(() => {
        render(<Footer />);
    })
   test('should correctly match first footer header', () => {
        expect(screen.getByText('LET US HELP YOU')).toBeInTheDocument()
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