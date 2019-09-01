import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { $NAME_p } from './index.js';

function setup(props = {}, config = {}) {
  const { debug, getByRole } = render(
    <$NAME_p {...props}>
      Some Text
    </$NAME_p>,
  );

  return { debug, getByRole };
}

describe('<$NAME_p /> works', () => {
  test('it renders properly', () => {
    const { getByRole } = setup();
    expect(true).toBe(true);
  });
});
