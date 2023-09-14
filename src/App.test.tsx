import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { log } from 'console';

test('renders learn react link', () => {
  render(<App />);

  log('screen', screen)
  const tittleHome = screen.getByText('Home');
  expect(tittleHome).toBeInTheDocument();
});
