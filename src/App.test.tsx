import { render, screen } from '@testing-library/react';
import App from './App';

test('renders add todo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/add todo/i);
  expect(linkElement).toBeInTheDocument();
});
