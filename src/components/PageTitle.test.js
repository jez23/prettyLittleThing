import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageTitle from './PageTitle';

afterEach(cleanup);

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