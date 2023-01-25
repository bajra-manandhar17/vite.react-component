import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '@/Components/Button';

describe('Button', () => {
  it('renders Button component', () => {
    render(<Button label="Click me" />);
    screen.getByText('Click me');
  });
});
