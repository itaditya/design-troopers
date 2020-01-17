import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Button, TaskButton } from './';
import buttonDoc from './Button.notes.md';

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { TaskButton },
  parameters: {
    notes: buttonDoc
  },
};

export const PrimaryButtonExample = () => (
  <Button appearance="primary" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const KnobsButton = () => (
  <Button appearance="primary" onClick={action('clicked')}>
    Hello Button
  </Button>
);

/** Helloss */
KnobsButton.story = {
  decorators: [withKnobs, withSmartKnobs()],
  parameters: {
    notes: 'buttonDoc',
    backgrounds: [
      { name: 'Navbar', value: '#39424e' },
    ],
  },
};

export const SecondaryButtonExample = () => (
  <Button appearance="secondary" onClick={action('clicked')}>
    Secondary Button
  </Button>
);

export const TaskButtonErrorExample = () => {
  function actionError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject();
      }, 400);
    });
  }

  function TaskButtonErrorComp(props) {
    const initialState = 'idle';
    const [stateTask, setStateTask] = useState(initialState);

    async function handleClick() {
      setStateTask('loading');
      actionError()
        .then(() => {
          setStateTask('done');
        })
        .catch(() => {
          setStateTask('errored');
        })
        .finally(() => {
          setTimeout(() => {
            setStateTask(initialState);
          }, 1500);
        });
    }

    const textMap = {
      idle: 'Save Code',
      loading: 'Saving',
      done: 'Saved',
      errored: 'Error, Try Again!',
    };

    return (
      <TaskButton taskState={stateTask} onClick={handleClick} {...props}>
        {textMap[stateTask]}
      </TaskButton>
    );
  }
  return <TaskButtonErrorComp />;
};

export const TaskButtonSuccessExample = () => {
  function actionSuccess() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 400);
    });
  }

  function TaskButtonSuccessComp(props) {
    const initialState = 'idle';
    const [stateTask, setStateTask] = useState(initialState);

    async function handleClick() {
      setStateTask('loading');
      actionSuccess()
        .then(() => {
          setStateTask('done');
        })
        .catch(() => {
          setStateTask('errored');
        })
        .finally(() => {
          setTimeout(() => {
            setStateTask(initialState);
          }, 1500);
        });
    }

    const textMap = {
      idle: 'Save Code',
      loading: 'Saving',
      done: 'Saved',
      errored: 'Error, Try Again!',
    };

    return (
      <TaskButton taskState={stateTask} onClick={handleClick} {...props}>
        {textMap[stateTask]}
      </TaskButton>
    );
  }

  return <TaskButtonSuccessComp />;
};

export const KnobsTaskButton = () => <TaskButton onClick={action('clicked')}>Hello TaskButton</TaskButton>;

KnobsTaskButton.story = {
  decorators: [withKnobs, withSmartKnobs()],
};
