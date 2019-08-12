import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';

import { Button } from './index.js';

function setup(props = {}, config = {}) {
  const spyButtonClick = jest.fn();
  const { debug, getByRole } = render(
    <Button onClick={spyButtonClick} {...props}>Sign Up</Button>,
  );

  const triggerClick = (event) => fireEvent.click(getByRole('button'), event);

  return { debug, getByRole, triggerClick, spyButtonClick };
}

describe('<Button /> works', () => {
  test('it renders properly', () => {
    const { getByRole } = setup();
    expect(getByRole('button')).toMatchSnapshot();
  });

  test('on click button triggers callback', () => {
    const { triggerClick, spyButtonClick } = setup();
    triggerClick();
    triggerClick();
    expect(spyButtonClick).toHaveBeenCalledTimes(2);
  });
});
