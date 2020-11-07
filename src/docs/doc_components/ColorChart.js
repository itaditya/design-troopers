import React from 'react';
import { isObject } from 'lodash';


import { ColorShades } from './ColorShades';

function getColors(colors, name) {
  const x = colors[name];
  if(!isObject(x)) {
    return {
      [name]: x,
    }
  }

  const transformedColors = Object.entries(colors[name]).reduce((acc, [shadeName, color]) => {
    if (shadeName === 'default') {
      return acc;
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
          <section key={name} className="dt-mb-12">
            <h4 className="dt-text-lg"><span className="dt-capitalize">{name}</span> color shades</h4>
            <ColorShades colors={shades} />
          </section>
        );
      })}
    </div>
  );
}

export { ColorChart };
