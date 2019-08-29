import React from 'react';

function IconBox({ iconsList }) {
  return (
    <div className="dt-flex dt-flex-wrap">
      {iconsList.map(icon => {
        const IconComp = require(`material-svg-react-icons/dist/${icon}.js`).default;
        return (
          <div className="dt-user-select dt-flex dt-flex-col dt-items-center dt-w-3/12 dt-rounded dt-p-2 dt-mb-6 hover:dt-bg-gray-200 dt-transition-200 dt-transition-all">
            <IconComp className="dt-text-4xl dt-mb-2 dt-fill-current dt-text-gray-800" />
            <span onClick={() => setStateActiveIcon(icon)}>
              &nbsp;
              {icon}
              &nbsp;
            </span>
          </div>
        );
      })}
    </div>
  );
}

export { IconBox };
