import React from 'react';

import { Button, TaskButton } from './';
import buttonDoc from './Button.notes.md';

export const buttonArgTypes = {
  appearance: {
    control: {
      type: 'inline-radio',
      options: ['default', 'primary', 'secondary', 'danger', 'warning'],
    },
  },
  variant: {
    control: {
      type: 'inline-radio',
      options: ['default', 'ghost', 'icon'],
    },
  },
  size: {
    control: {
      type: 'inline-radio',
      options: ['md', 'lg'],
    },
  },
}

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { TaskButton },
  parameters: {
    notes: buttonDoc,
    actions: { argTypesRegex: '^on.*' }
  },
  argTypes: buttonArgTypes,
  excludeStories: ['buttonArgTypes'],
};

export const ControlButtonExample = (args) => <Button {...args} />;

ControlButtonExample.args = {
  children: 'Hello Button',
};

export const PrimaryButtonExample = ControlButtonExample.bind({});
PrimaryButtonExample.args = {
  appearance: 'primary',
  children: 'Primary Button',
}

export const SecondaryButtonExample = ControlButtonExample.bind({});
SecondaryButtonExample.args = {
  appearance: 'secondary',
  children: 'Secondary Button',
}
