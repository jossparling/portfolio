// __tests__/Gallery.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '..'
const projects = { name: "projects", description: "Projects" };


afterEach(cleanup)

describe('Project component', () => {

  it('renders', () => {
    render(<Gallery currentCategory={projects} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Portfolio currentCategory={projects} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('displays text', () => {
  const { getByTestId } = render(<Portfolio currentCategory={projects} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Projects')
})