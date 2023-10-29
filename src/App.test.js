import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevOps Insiders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to DevOps Insiders!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders DevOps description', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a platform where we share insights and latest trends in DevOps./i);
  expect(linkElement).toBeInTheDocument();
});
