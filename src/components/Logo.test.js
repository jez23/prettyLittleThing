import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from './Logo';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the logo component", () => {
        render(<Logo />)
    })
})

describe('Test main title is correct', () => {
    test("should correctly match wording of main title", () => {
        render(<Logo />)
        screen.getByText('PrettyLittleThing');
    })
})