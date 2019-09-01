import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Avatar } from './index.js';

function setup(props = {}, config = {}) {
  const { debug, getByRole } = render(
    <Avatar {...props}>
      Some Text
    </Avatar>,
  );

  return { debug, getByRole };
}

describe('<Avatar /> works', () => {
  test('it renders properly', () => {
    const { getByRole } = setup();
    expect(true).toBe(true);
  });
});
