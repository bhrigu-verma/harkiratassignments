import { render, screen } from '@testing-library/react';
import Assignment1 from './Assignment1';

test('calculates the factorial correctly', () => {
  // Arrange
  const input = 5;

  // Act
  render(<Assignment1 input={input} />);
  
  // Assert
  const result = screen.getByText(/The factorial of 5 is 120/i);
  expect(result).toBeInTheDocument();
});