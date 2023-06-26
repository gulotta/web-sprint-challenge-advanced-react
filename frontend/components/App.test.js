import React from 'react'
import AppFunctional from './AppFunctional'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test('sanity', () => {
  expect(true).toBe(true)
})

test('render without errors', () => {
  render (<AppFunctional/>)
})

test('email field text placeholder', () => {
  render(<AppFunctional />)

  const email = screen.getByPlaceholderText(/type email/i);
  fireEvent.click(email)
})

test('display coordinates', () => {
  render(<AppFunctional/>)
  const coordinates = screen.getByText(/Coordinates/i)
  expect(coordinates).toBeInTheDocument();
})

test('display email', () => {
  render(<AppFunctional/>)
  const email = screen.getByPlaceholderText(/type email/i)
  expect(email).toBeInTheDocument();
})