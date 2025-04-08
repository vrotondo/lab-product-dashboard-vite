import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

const sampleProducts = [
  { id: 1, name: 'Laptop', price: '$999.99', inStock: true },
  { id: 2, name: 'Smartphone', price: '$699.99', inStock: false }, // Updated name to match the rendered DOM
  { id: 3, name: 'Headphones', price: '$199.99', inStock: true },
  { id: 4, name: 'Keyboard', price: '$49.99', inStock: false },
];

test('renders product dashboard title', () => {
  render(<App />)
  expect(screen.getByText(/Product Dashboard/i)).toBeInTheDocument()
})

test('displays all products initially', () => {
  render(<App />)

  sampleProducts.forEach((product) => {
    expect(screen.getByText(product.name)).toBeInTheDocument()
  })
})

test('applies conditional styling for out-of-stock products', () => {
  render(<App />);

  // Find all elements with the text "Smartphone"
  const outOfStockProducts = screen.getAllByText(/Smartphone/i);

  // Assert that at least one of them has the correct out-of-stock styling
  outOfStockProducts.forEach((productElement) => {
    expect(productElement.closest('div')).toHaveStyle({
      backgroundColor: 'rgb(255, 224, 224)', // Light red for out-of-stock
    });
  });
});

test('removes product from the dashboard when "Remove" button is clicked', () => {
  render(<App />);

  // Ensure the initial products are rendered
  const initialProducts = ['Laptop', 'Smartphone', 'Headphones', 'Keyboard'];
  initialProducts.forEach((productName) => {
    expect(screen.getByText(productName)).toBeInTheDocument();
  });

  // Find the "Remove" button for the first product and click it
  const removeButtons = screen.getAllByText('Remove');
  expect(removeButtons.length).toBeGreaterThan(0);

  fireEvent.click(removeButtons[0]);

  // Ensure the first product is removed
  expect(screen.queryByText('Laptop')).not.toBeInTheDocument();
});
