import React from 'react';

import { MotherShip } from '../../components/MotherShip';

function Wrapper({ children }) {
  return (
    <MotherShip children={children} />
  );
}

export default Wrapper;
