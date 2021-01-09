import React from 'react';
import { render, screen } from '@testing-library/react'
import PageTitle from './PageTitle';

describe('Render component', () => {
    test("should render the PageTitle component", () => {
        render(<PageTitle />)
    })
})

describe('Test main title is correct', () => {
    test("should correctly match wording of main title", () => {
        render(<PageTitle title='title' />)
        screen.getByText('title');
    })
})