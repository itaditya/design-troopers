import React, { useState } from 'react';
import { TaskButton } from './';
import { buttonArgTypes } from './Button.stories';

export default {
  title: 'Components/Button/TaskButton',
  component: TaskButton,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export const ControlTaskButtonExample = (args) => <TaskButton {...args} />;
ControlTaskButtonExample.args = {
  taskState: 'loading',
  children: 'Task Button'
};
ControlTaskButtonExample.argTypes = {
  ...buttonArgTypes,
  taskState: {
    control: {
      type: 'inline-radio',
      options: ['idle', 'loading', 'done', 'errored'],
    },
  },
}

export function CustomTaskButtonExample(args) {
  const initialState = 'idle';
  const { endResult, onClick, ...restArgs } = args;
  const [stateTask, setStateTask] = useState(initialState);

  function actionSuccess() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 400);
    });
  }

  function actionError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject();
      }, 400);
    });
  }

  async function handleClick() {
    onClick();
    const action = endResult === 'error' ? actionError : actionSuccess;
    setStateTask('loading');
    action()
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
    <TaskButton {...restArgs} taskState={stateTask} onClick={handleClick}>
      {textMap[stateTask]}
    </TaskButton>
  );
}

CustomTaskButtonExample.args = {
  endResult: 'success',
};
CustomTaskButtonExample.argTypes = {
  ...buttonArgTypes,
  endResult: {
    control: {
      type: 'inline-radio',
      options: ['success', 'error'],
    },
  },
  taskState: {
    control: {
      type: null,
    },
  },
}
