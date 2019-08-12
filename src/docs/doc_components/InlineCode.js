import React from 'react';

function InlineCode({ text }) {
  return <span style={{ color: '#e01e5a'}} className="dt-text-sm dt-bg-gray-300 dt-text-black dt-py-1 dt-px-2 dt-rounded">{text}</span>
}

export { InlineCode };
