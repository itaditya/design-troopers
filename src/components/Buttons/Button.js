// @flow

import React from 'react';
import cn from 'classnames';

export type PropsButton = {
  /** what is the appearance */
  appearance?: 'default' | 'primary' | 'secondary' | 'danger' | 'warning',
  /** what is the variant */
  variant?: 'default' | 'fab' | 'ghost' | 'icon',
  /** what is the size */
  size?: 'default' | 'lg',
  /** what is the className */
  className?: string,
  /** what to render inside button */
  children?: any,
};

function getSizeClassNamesForVariant({ variant, size }) {
  const sizeAndVariantClassMapping = {
    icon: {
      lg: 'dt-p-3 dt-rounded-full',
      other: 'dt-p-2 dt-rounded-full',
    },
    other: {
      lg: 'dt-text-lg dt-py-3 dt-px-8 dt-rounded-lg',
      other: 'dt-py-2 dt-px-6 dt-rounded',
    },
  };

  const variantMapping = sizeAndVariantClassMapping[variant] || sizeAndVariantClassMapping.other;
  const sizeAndVariantClassName = variantMapping[size] || variantMapping.other;

  return sizeAndVariantClassName;
}

function getClassNames({ className, appearance, variant, size, disabled }) {
  const commonClassName =
    'dt-flex dt-items-center dt-justify-center dt-transition-all dt-transition-500 focus:dt-outline-none focus:dt-shadow-outline';

  let borderClassName = variant === 'icon' ? '' : 'dt-border dt-border-gray-300';

  let appearanceClassName =
    variant === 'ghost'
      ? `dt-border-${appearance} dt-bg-transparent dt-text-${appearance} hover:dt-bg-${appearance}-600 focus:dt-bg-${appearance}-700 hover:dt-text-white focus:dt-text-white`
      : `dt-bg-${appearance} dt-text-white hover:dt-bg-${appearance}-600 active:dt-bg-${appearance}-700 focus:dt-bg-${appearance}-700`;

  if (appearance === 'default') {
    appearanceClassName = '';
  }

  const iconVariantClassName =
    variant === 'icon' ? 'dt-text-gray-600 dt-fill-current hover:dt-bg-gray-200 focus:dt-bg-gray-300' : '';

  const sizeAndVariantClassName = getSizeClassNamesForVariant({ variant, size });

  let shadowClassName = size === 'lg' ? 'dt-shadow-xl' : 'dt-shadow-lg';

  if (variant === 'icon') {
    shadowClassName = '';
    appearanceClassName = '';
  }

  const disabledClassName = disabled ? 'dt-opacity-50 dt-cursor-not-allowed' : '';

  const classNames = cn(
    className,
    appearanceClassName,
    iconVariantClassName,
    sizeAndVariantClassName,
    shadowClassName,
    borderClassName,
    disabledClassName,
    commonClassName,
  );

  return classNames;
}

function Button(props: PropsButton) {
  const { appearance = 'default', variant, size, disabled, className, children, ...otherProps } = props;

  const btnClassName = getClassNames({ className, appearance, variant, size, disabled });

  const htmlAttrs = {
    disabled,
  };

  return (
    <button data-name="DTButton" className={btnClassName} {...htmlAttrs} {...otherProps}>
      {children}
    </button>
  );
}

export { Button, getClassNames };
