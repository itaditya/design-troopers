import React, { Fragment } from 'react';


import { ColorShades } from './ColorShades';

function getColors(colors, name) {
  const x = colors[name];
  if(!_.isObject(x)) {
    return {
      [name]: x,
    }
  }

  const transformedColors = Object.entries(colors[name]).reduce((acc, [shadeName, color]) => {
    if (shadeName === 'default') {
      return acc;
    };

    if (name !== 'gray' && shadeName === '500') {
      return {
        ...acc,
        [name]: color,
      }
    };

    return {
      ...acc,
      [`${name}-${shadeName}`]: color,
    }
  }, {});

  return transformedColors;
}

function ColorChart({ colors }) {
  return (
    <div>
      {Object.entries(colors).map(([name, color]) => {
        const shades = getColors(colors, name);

        return (
          <Fragment>
            <h4 className="dt-text-lg"><span className="dt-capitalize">{name}</span> color shades</h4>
            <ColorShades colors={shades} />
          </Fragment>
        );
      })}
    </div>
  );
}

export { ColorChart };
