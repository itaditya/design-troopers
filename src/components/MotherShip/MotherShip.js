import React, { Fragment, useState } from 'react';

import { RootContextProvider } from '../../rootContext';

const BodyPortal = () => <div id="dt-portal" className="dt-relative"></div>;

BodyPortal.displayName = 'DTBodyPortal';


function MotherShip({ children }) {
  const [toastMap, setToast] = useState({});

  function toastIsVisible(name) {
    return toastMap[name];
  }

  function toastTrigger(name) {
    const t = {
      ...toastMap,
      [name]: true,
    }
    setToast(t);
  }

  function toastDismiss(name) {
    const t = {
      ...toastMap,
      [name]: false,
    }
    setToast(t);
  }

  return (
    <Fragment>
      <RootContextProvider value={{ toastTrigger, toastDismiss, toastIsVisible }}>
        {children}
      </RootContextProvider>
    </Fragment>
  );
}

MotherShip.displayName = 'DTMotherShip';

export { MotherShip, BodyPortal };
