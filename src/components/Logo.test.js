import React from 'react';
import { render, screen } from '@testing-library/react'
import Logo from './Logo';

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