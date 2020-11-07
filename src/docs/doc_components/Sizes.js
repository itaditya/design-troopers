import React from 'react';
import cn from 'classnames';

function Sizes({ title, property, sizes, className, children }) {
  return (
    <section>
      <h3 className="dt-text-3xl dt-mb-16">{title}</h3>
      {Object.entries(sizes).map(([name, size]) => {
        const isNegative = name.startsWith('-');
        if (isNegative) {
          return null;
        }
        const customClass = `dt-${property}-${name}`;

        return (
          <div className="dt-mb-8">
            <div className="dt-flex dt-bg-gray-200">
              <div
                className={cn(
                  'dt-bg-gray-400 dt-h-8 dt-text-xs dt-flex dt-items-center',
                  customClass,
                  className,
                )}
              >
                {children}
              </div>
            </div>
            <p className="dt-text-sm dt-text-gray-600">
              <span>Class: {customClass}</span>
              <span className="dt-ml-6">Value: {size}</span>
            </p>
          </div>
        );
      })}
    </section>
  );
}

export { Sizes };
