// @flow

import React from 'react';
import cn from 'classnames';

import { Button } from './Button';

type PropsSecondaryButton = {
  /** the variation of the button */
  variant?: 'normal' | 'fab' | 'ghost',
  /** size of the button */
  size?: 'normal' | 'lg',
  /** additional classnames for the button */
  className?: string,
};

function SecondaryButton(props: PropsSecondaryButton) {
  const { variant, className, ...otherProps } = props;

  const variantClassName = variant === 'ghost' ? 'dt-border-secondary dt-bg-transparent dt-text-secondary' : 'dt-bg-secondary dt-text-white';
  const computedClassName = cn(className, variantClassName);

  return <Button data-name={PrimaryButton.displayName} {...otherProps} variant={variant} className={computedClassName} />
}

export { SecondaryButton };
