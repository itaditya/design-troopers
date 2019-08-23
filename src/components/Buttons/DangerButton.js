// @flow

import React from 'react';
import cn from 'classnames';

import { Button } from './Button';

type PropsDangerButton = {
  /** the variation of the button */
  variant?: 'normal' | 'fab' | 'ghost',
  /** size of the button */
  size?: 'normal' | 'lg',
  /** additional classnames for the button */
  className?: string,
};

function DangerButton(props: PropsDangerButton) {
  const { variant, className, ...otherProps } = props;

  const variantClassName = variant === 'ghost' ? 'dt-border-error dt-bg-transparent dt-text-error' : 'dt-bg-error dt-text-white';
  const computedClassName = cn(className, variantClassName);

  return <Button data-name={DangerButton.displayName} {...otherProps} variant={variant} className={computedClassName} />
}

export { DangerButton };
