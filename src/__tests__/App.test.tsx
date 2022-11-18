import { render, screen } from '@testing-library/react';

import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText('Grover NYT Article Search App');

  expect(title).toBeInDocument();
});
