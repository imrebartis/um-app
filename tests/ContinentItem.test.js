/* TODO: look into the "downloading dependencies" issues in stackblitz when trying to add the following libraries:
jest
@testing-library/jest-dom
@testing-library/react
*/

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContinentItem from '../components/ContinentItem';

test('continent item is selected', async () => {
  const continent = 'Asia';
  const setSelectedContinent = jest.fn();
  render(
    <ContinentItem
      continent={continent}
      setSelectedContinent={setSelectedContinent}
    />
  );

  fireEvent.click(screen.getByTestId('continent-button'));

  expect(setSelectedContinent).toHaveBeenCalledTimes(1);
});
