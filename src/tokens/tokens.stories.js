import React from 'react';
import { storiesOf } from '@storybook/react';
import cn from 'classnames';

import { Sizes, ColorChart } from '../docs/doc_components';

import tailwindTokens from './tokens.json';

console.log(`tailwindTokens`, tailwindTokens); // aditodo remove this

const list = [
  {
    group: 'Colors',
    stories: [
      {
        name: 'textColor',
        component: Banner,
      },
      {
        name: 'backgroundColor',
        component: BgColorComponent,
      },
    ],
  },
  {
    group: 'Spacing',
    stories: [
      {
        name: 'width',
        component: ({ tokens }) => (
          <Sizes title="Width" sizes={tokens} property="w" children="Children" />
        ),
      },
      {
        name: 'padding',
        component: ({ tokens }) => <Sizes title="Padding" sizes={tokens} property="pl" />,
      },
      {
        name: 'margin',
        component: ({ tokens }) => (
          <Sizes title="Margin" sizes={tokens} property="ml" className="dt-w-8" />
        ),
      },
    ],
  },
  {
    group: 'Borders',
    stories: [
      {
        name: 'borderRadius',
        component: BorderRadius,
      },
    ],
  },
];

function BgColorComponent({ tokens }) {
  return <ColorChart colors={tokens} />;
}

function BorderRadius({ tokens }) {
  return (
    <div className="">
      <h3 className="dt-text-3xl dt-mb-6">Borders</h3>
      <div className="dt-flex dt-space-x-12">
        {Object.entries(tokens).map(([name, size]) => (
          <div className={cn('dt-bg-gray-400 dt-w-16 dt-h-16', `dt-rounded-${name}`)}></div>
        ))}
      </div>
    </div>
  );
}

function Banner({ name }) {
  return <div>Banner {name}</div>;
}

list.forEach((item) => {
  const parent = storiesOf(`Tokens/${item.group}`, module);
  parent.addParameters({
    docs: { disable: true },
  });

  item.stories.forEach((story) => {
    parent.add(story.name, () => {
      const Component = story.component;
      const storyTokens = tailwindTokens[story.name];
      return <Component {...story} tokens={storyTokens} />;
    });
  });
});
