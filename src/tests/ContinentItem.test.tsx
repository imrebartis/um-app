import React from 'react';
import TestContextInstance, { TestContextProvider, mockedDispatch } from './MockContext';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContinentItem from '../components/ContinentItem';

jest.mock('../context/AppContext', () => {
  const originalModule = jest.requireActual('../context/AppContext');

  // Mock the default export and named export
  return {
    __esModule: true,
    ...originalModule,
    default: TestContextInstance,
  };
});

test('continent item is selected', async () => {
  const continent = 'Asia';

  render(
    <TestContextProvider>
      <ContinentItem key={continent} continent={continent} />
    </TestContextProvider>,
  );

  fireEvent.click(screen.getByTestId('continent-button'));
  expect(mockedDispatch).toHaveBeenCalledTimes(1);
});
