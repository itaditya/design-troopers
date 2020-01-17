// @flow

import React from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import IcClose from 'material-svg-react-icons/dist/IcClose';

import { useRootContext } from '../../rootContext';

export function Toast(props) {
  const { name, children, className, closeBtnProps = {}, ...otherProps } = props;
  const rootContext = useRootContext();

  const shouldShowToast = rootContext.toastIsVisible(name);

  const toastClassName = cn(className, 'dt-w-64 dt-flex dt-py-2 dt-px-4 dt-rounded');
  const closeBtnClassName = cn(closeBtnProps.className, 'dt-ml-auto');

  if(shouldShowToast) {
    return createPortal(
      (
        <div data-name="DTToast" className={toastClassName}>
          {children}
          <button className={closeBtnClassName} onClick={() => rootContext.toastDismiss(name)}>
            <IcClose />
          </button>
        </div>
      ),
      document.getElementById('dt-portal')
    );
  }

  return null;
}

Toast.propTypes = {
  name: PropTypes.string
};

Toast.displayName = 'DTToast';
