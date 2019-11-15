import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Banner(props) {
  const { className, actionBtn, children, ...otherProps } = props;

  const bannerClassNames = cn(className, 'dt-flex dt-items-center dt-py-6 dt-px-4 dt-rounded');
  return (
    <article data-name="DTBanner" className={bannerClassNames} {...otherProps}>
      <div>
        {children}
      </div>
      <span className="dt-ml-auto">
        {actionBtn}
      </span>
    </article>
  );
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
};

Banner.displayName = 'DTBanner';

export { Banner };
