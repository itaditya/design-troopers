import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';

import { RootContextProvider } from '../rootContext';

const BodyPortal = () => <div id="dt-portal" className="dt-relative"></div>;

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

export { MotherShip, BodyPortal };
