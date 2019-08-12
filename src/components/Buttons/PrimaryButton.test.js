import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { PrimaryButton } from './index.js';

describe('<PrimaryButton /> works', () => {
  test('it renders properly', () => {
    const { getByRole } = render(<PrimaryButton>Sign Up</PrimaryButton>);
    expect(getByRole('button')).toMatchSnapshot();
  });

  test('on click button triggers callback', () => {
    const spyButtonClick = jest.fn();
    const { getByRole } = render(<PrimaryButton onClick={spyButtonClick}>Sign Up</PrimaryButton>);
    fireEvent.click(getByRole('button'));
    expect(spyButtonClick).toHaveBeenCalled();
  });
});
