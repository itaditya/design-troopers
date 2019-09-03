// @flow

import React, { useEffect } from 'react';
import cn from 'classnames';

import IcCached from 'material-svg-react-icons/dist/IcCached';
import IcDone from 'material-svg-react-icons/dist/IcDone';
import IcError from 'material-svg-react-icons/dist/IcError';

import './button.css';

export type PropsButton = {
  /** what is the appearance */
  appearance?: 'default' | 'primary' | 'secondary' | 'danger' | 'warning',
  /** what is the variant */
  variant?: 'default' | 'ghost' | 'icon',
  /** what is the size */
  size?: 'md' | 'lg',
  /** what is the className */
  className?: string,
  /** what to render inside button */
  children?: any,
};

function getSizeClassNamesForVariant({ variant, size }) {
  const sizeAndVariantClassMapping = {
    icon: {
      md: 'dt-text-2xl dt-p-3 dt-rounded-full',
      lg: 'dt-text-4xl dt-p-2 dt-rounded-full',
    },
    default: {
      md: 'dt-py-2 dt-px-6 dt-rounded',
      lg: 'dt-text-lg dt-py-3 dt-px-8 dt-rounded-lg',
    },
  };

  const variantMapping = sizeAndVariantClassMapping[variant] || sizeAndVariantClassMapping.default;
  const sizeAndVariantClassName = variantMapping[size] || variantMapping.md;

  return sizeAndVariantClassName;
}

function getClassNames({ className, appearance, variant, size }) {
  const commonClassName =
    'dt-flex dt-items-center dt-justify-center dt-transition-all dt-transition-500 focus:dt-outline-none focus:dt-shadow-outline';

  let borderClassName = variant === 'ghost' ? `dt-border dt-border-gray-300 dt-border-${appearance}` : '';

  let appearanceClassName =
    variant === 'ghost'
      ? `dt-bg-transparent dt-text-${appearance} hover:dt-bg-${appearance}-600 hover:dt-text-white active:dt-bg-${appearance}-700 active:dt-text-white focus:dt-bg-${appearance}-700 focus:dt-text-white`
      : `dt-bg-${appearance} dt-text-lg dt-text-white hover:dt-bg-${appearance}-600 active:dt-bg-${appearance}-700 focus:dt-bg-${appearance}-700`;

  if (appearance === 'default') {
    appearanceClassName = '';
  }

  const iconVariantClassName =
    variant === 'icon'
      ? 'dt-text-gray-600 dt-fill-current hover:dt-bg-gray-200 active:dt-bg-gray-400 focus:dt-bg-gray-400'
      : '';

  const sizeAndVariantClassName = getSizeClassNamesForVariant({ variant, size });

  let shadowClassName = size === 'lg' ? 'dt-shadow-xl' : 'dt-shadow-lg';

  if (variant === 'icon') {
    shadowClassName = '';
    appearanceClassName = '';
  }

  const disabledClassName = 'disabled:dt-opacity-50 disabled:dt-cursor-not-allowed';

  const primaryBtnClassName = appearance === 'primary' ? 'dt-primary-button' : '';

  const classNames = cn(
    className,
    appearanceClassName,
    iconVariantClassName,
    sizeAndVariantClassName,
    shadowClassName,
    borderClassName,
    disabledClassName,
    primaryBtnClassName,
    commonClassName,
  );

  return classNames;
}

function Button(props: PropsButton) {
  const { appearance = 'default', variant, size= 'md', disabled, className, style, children, ...otherProps } = props;

  const btnClassName = getClassNames({ className, appearance, variant, size });

  const btnStyle = {
    ...style,
    whiteSpace: 'nowrap',
  };

  const htmlAttrs = {
    style: btnStyle,
    disabled,
  };

  useEffect(() => {
    if (appearance === 'primary') {
      const noPrimaryBtns = document.querySelectorAll('.dt-primary-button').length;
      if (noPrimaryBtns > 1) {
        console.warn('Only one Primary Button should be present on a page for ideal UX.');
      }
    }
  }, [appearance]);

  return (
    <button data-name="DTButton" className={btnClassName} {...htmlAttrs} {...otherProps}>
      {children}
    </button>
  );
}

function TaskButton(props) {
  const { SpinnerIcon, taskState, children, ...otherProps } = props;

  const isLoading = taskState === 'loading';
  const isDone = taskState === 'done';
  const isErrored = taskState === 'errored';

  const Spinner = SpinnerIcon || IcCached;

  const appearance = isErrored ? 'danger' : 'primary';

  return (
    <Button data-name="DTTaskButton" appearance={appearance} disabled={isLoading} {...otherProps}>
      {
        isLoading ? <Spinner className="dt-button-loading-spinner dt-fill-current dt-text-white dt-text-2xl dt-mr-2" /> : ''
      }
      {
        isDone ? <IcDone className="dt-fill-current dt-text-white dt-text-2xl dt-mr-2" /> : ''
      }
      {
        isErrored ? <IcError className="dt-fill-current dt-text-white dt-text-2xl dt-mr-2" /> : ''
      }
      {children}
    </Button>
  );
}

Button.displayName = 'DTButton';

export { Button, TaskButton, getClassNames };
