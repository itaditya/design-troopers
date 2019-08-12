import React from 'react';

function Spacer({ direction }) {
  const className = direction === 'vertical' ? 'dt-py-4' : 'dt-px-4';

  const Element = direction === 'vertical' ? 'div' : 'span';
  return <Element className={className}>{'  '}</Element>;
}

export { Spacer };
