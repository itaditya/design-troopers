import React, { useState } from 'react';

function isLightColor(name) {
  return ['disabled', 'white', 'gray-100', 'gray-200', 'gray-300', 'gray-400'].includes(name);
}

function ColorShades({ colors }) {
  const [stateCopy, setStateCopy] = useState(false);

  async function handleClick(name, event) {
    const copyText = event.altKey ? `.dt-${name}` : name;
    await navigator.clipboard.writeText(copyText);
    setStateCopy(copyText);
    setTimeout(() => {
      setStateCopy(false);
    }, 400);
  }

  return (
    <div className="dt-flex dt-flex-wrap dt-pt-5">
      {Object.entries(colors).map(([name, color]) => {
        const textColorClassName = isLightColor(name) ? 'dt-text-gray-700' : 'dt-text-gray-100';
        const bgColorClassName = `dt-bg-${name}`;

        const className = `${bgColorClassName} dt-text-center dt-w-56 dt-mr-8 dt-mb-8 dt-p-4 dt-rounded-lg dt-shadow-lg dt-transition-all dt-transition-500 ${textColorClassName}`;

        return (
          <div className={className} key={name}>
            <strong onClick={(event) => handleClick(name, event)}>
              {
                [name, `.dt-${name}`].includes(stateCopy) ? `${stateCopy} copied` : name
              }
            </strong>
            <p className="dt-mt-2 dt-user-select">
              {color}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export { ColorShades };
