import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders ', () => {
    render(<App />);
    screen.getByText('Hello World 🤖');
  });
});
