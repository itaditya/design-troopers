import React from 'react';

function isLightColor(name) {
  return ['white', 'gray-100', 'gray-200', 'gray-300', 'gray-400'].includes(name);
}

function ColorShades({ colors }) {
  async function handleClick(name) {
    await navigator.clipboard.writeText(name);
  }

  return (
    <div className="dt-flex dt-flex-wrap dt-pt-5">
      {Object.entries(colors).map(([name, color]) => {
        const textColorClassName = isLightColor(name) ? 'dt-text-gray-700' : 'dt-text-gray-100';
        const bgColorClassName = `dt-bg-${name}`;

        const className = `${bgColorClassName} dt-text-center dt-w-56 dt-mr-8 dt-mb-8 dt-p-4 ${textColorClassName}`;

        return (
          <div className={className} key={name} onClick={() => handleClick(name)}>
            <strong>{name}</strong>
            <p className="dt-mt-2">{color}</p>
          </div>
        );
      })}
    </div>
  );
}

export { ColorShades };
