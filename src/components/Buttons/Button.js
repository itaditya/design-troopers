// @flow

import React from 'react';
import cn from 'classnames';

type PropsButton = {
  /** what is the variant */
  variant?: 'normal' | 'fab' | 'ghost' | 'icon',
  /** what is the size */
  size?: 'normal' | 'lg',
  /** what is the className */
  className?: string,
};


function getSizeClassNamesForVariant({ variant, size }) {
  const sizeAndVariantClassMapping = {
    icon : {
      lg: 'dt-p-4 dt-rounded-full',
      other: 'dt-p-2 dt-rounded-full',
    },
    other : {
      lg: 'dt-py-4 dt-px-8 dt-rounded-lg',
      other: 'dt-py-2 dt-px-6 dt-rounded',
    }
  }

  const variantMapping = sizeAndVariantClassMapping[variant] || sizeAndVariantClassMapping.other;
  const sizeAndVariantClassName = variantMapping[size] || variantMapping.other;

  return sizeAndVariantClassName;
}


function Button(props: PropsButton) {
  const { variant, size, className, children, ...otherProps } = props;

  const commonClassName = 'dt-flex dt-items-center dt-justify-center dt-transition-all dt-transition-500 focus:dt-outline-none';

  let borderClassName = variant === 'icon' ? '' : 'dt-border dt-border-gray-300';

  const iconVariantClassName = variant === 'icon' ? 'hover:dt-bg-gray-200 focus:dt-bg-gray-300' : '';

  const sizeAndVariantClassName = getSizeClassNamesForVariant({ variant, size });

  let shadowClassName = size === 'lg' ? 'dt-shadow-xl' : 'dt-shadow-lg';

  if(variant === 'icon') {
    shadowClassName = '';
  }

  const btnClassName = cn(className, iconVariantClassName, sizeAndVariantClassName, shadowClassName, borderClassName, commonClassName);

  return (
    <button
      data-name={Button.displayName}
      className={btnClassName}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export { Button };
