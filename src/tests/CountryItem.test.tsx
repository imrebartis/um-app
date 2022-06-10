import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryItem from '../components/CountryItem';
import { TestContextProvider } from './MockContext';

test('country item\'s highlight toggles when clicked', async () => {

  render(
    <TestContextProvider>
      <CountryItem
        country={{ name: 'Albania', continent: 'Europe', numericCode: 1 }}
      />
    </TestContextProvider>,
  );

  const countryItem = screen.getByTestId('country-item');

  fireEvent.click(screen.getByTestId('country-item'));
  expect(countryItem).toHaveStyle({ color: 'rgb(227, 18, 126)' });

  fireEvent.click(countryItem);
  expect(countryItem).toHaveStyle({ color: 'rgb(0, 0, 0)' });
});
