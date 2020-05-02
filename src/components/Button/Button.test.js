import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Comp', () => {
  test('renders props label', () => {
    const { getByText } = render(<Button label="Test label" />);
    const linkElement = getByText(/Test label/i);
    expect(linkElement).toBeInTheDocument();
  });
});
