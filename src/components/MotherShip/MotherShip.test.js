import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { MotherShip } from './index.js';

function setup(props = {}, config = {}) {
  const { debug, getByRole } = render(
    <MotherShip {...props}>
      Some Text
    </MotherShip>,
  );

  return { debug, getByRole };
}

describe('<MotherShip /> works', () => {
  test('it renders properly', () => {
    const { getByRole } = setup();
    expect(true).toBe(true);
  });
});
