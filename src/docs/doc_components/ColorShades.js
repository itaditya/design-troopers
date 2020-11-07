import React, { useState } from 'react';

function ColorShades({ colors }) {
  const [stateCopy, setStateCopy] = useState(false);

  async function handleClick(name, event) {
    const copyText = event.altKey ? name : `dt-${name}`;
    await navigator.clipboard.writeText(copyText);
    setStateCopy(copyText);
    setTimeout(() => {
      setStateCopy(false);
    }, 400);
  }

  return (
    <div className="dt-flex dt-pt-5">
      {Object.entries(colors).map(([name, color]) => {
        const bgColorClassName = `dt-bg-${name}`;

        const className = `${bgColorClassName} dt-text-center dt-h-16`;

        return (
          <div key={name} className="dt-text-center">
            <div className={className}></div>
            <div className="dt-px-8">
              <button className="dt-text-xs" onClick={(event) => handleClick(name, event)}>
                {[name, `dt-${name}`].includes(stateCopy) ? `${stateCopy} copied` : name}
              </button>
              <p className="dt-mt-2 dt-text-sm dt-user-select">{color}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { ColorShades };
