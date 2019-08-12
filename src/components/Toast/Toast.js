import React from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { useRootContext } from '../../rootContext';
import CrossSvg from '../../icons/ic_close_18px.svg';

function Toast(props) {
  const { name, children, className, closeBtnProps = {}, ...otherProps } = props;
  const rootContext = useRootContext();

  const shouldShowToast = rootContext.toastIsVisible(name);

  const toastClassName = cn(className, 'dt-w-64 dt-flex dt-py-2 dt-px-4 dt-rounded');
  const closeBtnClassName = cn(closeBtnProps.className, 'dt-ml-auto');

  if(shouldShowToast) {
    return createPortal(
      (
        <div className={toastClassName}>
          {children}
          <button className={closeBtnClassName} onClick={() => rootContext.toastDismiss(name)}>
            <CrossSvg />
          </button>
        </div>
      ),
      document.getElementById('dt-portal')
    );
  }

  return null;
}

Toast.displayName = 'DTToast';

export { Toast };
