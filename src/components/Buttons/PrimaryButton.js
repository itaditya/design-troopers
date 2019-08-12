// @flow

import React from 'react';
import cn from 'classnames';

import { Button } from './Button';

type PropsPrimaryButton = {
  /** the variation of the button */
  variant?: 'normal' | 'fab' | 'ghost',
  /** size of the button */
  size?: 'normal' | 'lg',
  /** additional classnames for the button */
  className?: string,
};

function PrimaryButton(props: PropsPrimaryButton) {
  const { variant, className, ...otherProps } = props;

  const variantClassName =
    variant === 'ghost'
      ? 'dt-border-primary-500 dt-bg-transparent dt-text-primary-500 hover:dt-bg-primary-600 focus:dt-bg-primary-700 hover:dt-text-white focus:dt-text-white'
      : 'dt-bg-primary-500 dt-text-white hover:dt-bg-primary-600 focus:dt-bg-primary-700';

  const computedClassName = cn(className, variantClassName);

  return <Button data-name={PrimaryButton.displayName} {...otherProps} variant={variant} className={computedClassName} />
}

export { PrimaryButton };
