import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 4 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem")
  expect(listItems.length).toBe(4)
});


test('renders title', () => {
  render(<App />);
  const title = screen.getByTestId("heading")
  expect(title).toBeInTheDocument()
});


test('sum should be 10', () => {
  render(<App />);
  const sum = screen.getByTitle("sum")
  expect(sum.textContent).toBe("10")
});


