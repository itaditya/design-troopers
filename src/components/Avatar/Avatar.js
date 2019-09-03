import React from 'react';
import cn from 'classnames';

import IcAccountCircle from 'material-svg-react-icons/dist/IcAccountCircle';

function Avatar(props) {
  const { className, avatarUrl, initials, size = 'md', imgProps = {}, ...otherProps } = props;

  const { className: imgClassName } = imgProps;

  const sizeMap = {
    sm: '10',
    md: '12',
    lg: '20',
    xl: '64',
  };

  const fontSizeMap = {
    md: 'base',
    lg: '3xl',
  };

  const sizeAmount = sizeMap[size] || sizeMap['md'];
  const fontSizeAmount = fontSizeMap[size] || fontSizeMap['md'];

  const sizeClassName = `dt-w-${sizeAmount} dt-h-${sizeAmount}`;
  const miscClassName = `dt-rounded-full dt-flex dt-items-center dt-justify-center dt-overflow-hidden`;
  const shadowClassName = cn({ [`dt-shadow-${size}`]: avatarUrl || initials });

  const imgMiscClassName = `dt-w-full dt-h-full dt-object-cover`;

  const initialsClassName = `dt-text-gray-100 dt-tracking-wider`;
  const initialsFontSizeClassName = `dt-text-${fontSizeAmount}`;

  return (
    <div data-name="DTAvatar" className={cn(className, sizeClassName, shadowClassName, miscClassName)} {...otherProps}>
      {
        avatarUrl
          ? (
            <img src={avatarUrl} className={cn(imgClassName, imgMiscClassName)} {...imgProps} />
          ) : (
              initials
                ? (
                  <span className={cn(initialsClassName, initialsFontSizeClassName)}>
                    {initials}
                  </span>
                ) : (
                  <IcAccountCircle className="dt-w-full dt-h-full dt-fill-current dt-text-gray-500" />
                )
          )
      }
    </div>
  );
}

export { Avatar };
