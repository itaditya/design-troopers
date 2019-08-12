import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
  return (
    <button data-name={Banner.displayName} className="dt-bg-secondary dt-text-primary dt-text-xl dt-shadow-xl">
      hello adi
      <div className="bg-gray-200 p-4">
        <span className="dt-block dt-text-gray-700 dt-text-center dt-bg-black dt-px-4 dt-py-2">1</span>
        <span className="dt-block dt-text-gray-700 dt-text-center dt-bg-gray-400 dt-px-4 dt-py-2 dt-mt-2">2</span>
        <span className="dt-block dt-text-gray-700 dt-text-center dt-bg-gray-400 dt-px-4 dt-py-2 dt-mt-2">3</span>
      </div>
    </button>
  );
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Banner };
