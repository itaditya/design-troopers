### Basic Usage

```jsx static
<Button onClick={handleClick} appearance="primary">
  Click Me
</Button>
```

```js noeditor
import { useState } from 'react';
import { Spacer } from '../../docs/doc_components';

function Example() {
  const [clicks, setClicks] = useState(0);

  function incrementClicks() {
    setClicks((clicks) => clicks += 1);
  }

  return (
    <div className="dt-my-6">
      <p className="dt-mb-2">{clicks} clicks so far.</p>

      <Button appearance="primary" onClick={incrementClicks}>
        Click Me
      </Button>
    </div>
  );
}

<section data-testid="example-clickable-button">
  <Example />
</section>
```

### Button base

The Default Button serve as a base for other buttons. Do not use it directly.
```js
import { Spacer } from '../../docs/doc_components';

<section data-testid="example-default-buttons">
  <div className="dt-flex dt-items-center dt-mb-2">
    <Button>
      Default Button
    </Button>

    <Spacer />

    <Button size="lg">
      Big Button
    </Button>

    <Spacer />

    <Button disabled>
      Disabled Button
    </Button>
  </div>
</section>
```

---

### Semantic Buttons

```jsx static
<Button appearance="secondary">
  Secondary Action
</Button>
```

**Only one primary button should be used on a page**. Primary button represent a CTA (Call To Action) to the user and if there are mutiple CTAs, the user's focus will be divided.

In case you are rendering a list of items and each need a button, you can have the primary button in the first item of list and have the primary or secondary **ghost button** in the other items.

```js
import { Spacer } from '../../docs/doc_components';

import IcClose from 'material-svg-react-icons/dist/IcClose';

<section data-testid="example-semantic-buttons">
  <div className="dt-flex dt-items-center">
    <Button appearance="primary">
      Sign Up
    </Button>

    <Spacer />

    <Button appearance="primary" variant="ghost">
      Submit Form
    </Button>

    <Spacer />

    <Button appearance="primary" size="lg">
      Send Mails
    </Button>

    <Spacer />

    <Button appearance="primary" disabled>
      Share File
    </Button>
  </div>

  <Spacer />

  <div className="dt-flex dt-items-center">
    <Button appearance="secondary">
      Pause Upload
    </Button>

    <Spacer />

    <Button appearance="warning">
      Block User
    </Button>
  </div>

  <Spacer />

  <div className="dt-flex dt-items-center">
    <Button appearance="danger" size="lg">
      Delete Account
    </Button>

    <Spacer />

    <Button appearance="danger">
      <IcClose className="dt-fill-current dt-text-white dt-text-2xl dt-mr-2" />
      Discard Email
    </Button>

    <Spacer />

    <Button appearance="danger" variant="ghost">
      Cancel
    </Button>
  </div>
</section>
```

---

### Button Variants

```jsx static
<Button variant="icon">
  <IcClose />
</Button>
```

```js
import { useState } from 'react';
import cn from 'classnames';

import { Spacer } from '../../docs/doc_components';

import IcSearch from 'material-svg-react-icons/dist/IcSearch';
import IcClose from 'material-svg-react-icons/dist/IcClose';
import IcFavorite from 'material-svg-react-icons/dist/IcFavorite';
import IcFavoriteBorder from 'material-svg-react-icons/dist/IcFavoriteBorder';


function ExampleBookmarkButton() {
  const [stateDone, setStateDone] = useState(false);

  function handleClick() {
    setTimeout(() => {
      setStateDone(!stateDone);
    }, 600);
  }

  const Element = stateDone ? IcFavorite : IcFavoriteBorder;
  const title = stateDone ? 'Added to Favorites' : 'Add to Favorites';

  const classNameIcon = cn({ 'dt-text-primary': stateDone });

  return (
    <Button
      variant="icon"
      title={title}
      aria-label={title}
      onClick={handleClick}
    >
      <Element className={classNameIcon} />
    </Button>
  );
}

<section>
  <div data-testid="example-icon-buttons">
    <h4 className="dt-text-xl dt-mb-2">Icon Button</h4>
    <div>
      <h5>Icon Button with size normal and large</h5>
      <div className="dt-flex dt-items-center">
        <Button variant="icon" aria-label="Search">
          <IcSearch />
        </Button>

        <Spacer />

        <Button variant="icon" size="lg" aria-label="Close">
          <IcClose />
        </Button>
      </div>
    </div>

    <div>
      <h5>Icon Button are often time replaced with their filled variant when the attached task is done.</h5>
      <div className="dt-flex dt-items-center">
        <ExampleBookmarkButton />
      </div>
    </div>
  </div>

  <Spacer />

  <div data-testid="example-ghost-buttons">
    <h4 className="dt-text-xl dt-mb-2">Ghost Button</h4>
    <div className="dt-flex dt-items-center">
      <Button variant="ghost" appearance="primary">
        Start Challenge
      </Button>

      <Spacer />

      <Button variant="ghost" appearance="secondary">
        Discard Email
      </Button>

      <Spacer />

      <Button variant="ghost" appearance="danger">
        Cancel
      </Button>
    </div>

    <Spacer />

    <div className="dt-flex dt-items-center">
      <Button variant="ghost" size="lg" appearance="primary">
        Send to 23 followers
      </Button>

      <Spacer />

      <Button variant="ghost" size="lg" appearance="danger">
        Hide 'Anime' from playlist
      </Button>
    </div>
  </div>
</section>
```
---

### Button as a link

```jsx static
<a href="/login" aria-label="Login">
  <Button appearance="primary" aria-hidden="true">
    Login
  </Button>
</a>
```

```js
import { Spacer } from '../../docs/doc_components';

<section data-testid="example-link-buttons">
  <div className="dt-flex dt-items-center">
    <a href="/login" aria-label="Login">
      <Button appearance="primary" aria-hidden="true">
        Login
      </Button>
    </a>

    <Spacer />

    <a href="/signup" aria-label="Sign Up">
      <Button variant="ghost" appearance="primary" aria-hidden="true">
        Sign Up
      </Button>
    </a>

  </div>
</section>
```

---

### TaskButton
It should be used when a small task runs

```js
import { useState } from 'react';

import { Spacer } from '../../docs/doc_components';

import { TaskButton } from './Button.js';

function action(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(shouldFail) {
        reject();
        return;
      }
      resolve();
    }, 400);
  });
}

function ExampleTaskButtonComp({ shouldFail, ...otherProps }) {
  const initialState = null;
  const [stateTask, setStateTask] = useState(initialState);

  async function handleClick() {
    setStateTask('loading');
    action(shouldFail)
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
    loading: 'Saving',
    done: 'Saved',
    errored: 'Error, Try Again!'
  }

  return (
    <TaskButton
      taskState={stateTask}
      onClick={handleClick}
      {...otherProps}
    >
      {textMap[stateTask] || 'Save Code'}
    </TaskButton>
  );
}

<section>
  <div className="dt-mb-4">
    <h4 className="dt-mb-2">The state of TaskButton can be controlled via props</h4>
    <div className="dt-flex dt-items-center">
      <TaskButton>Save Code</TaskButton>

      <Spacer/>

      <TaskButton taskState="loading">Saving...</TaskButton>

      <Spacer/>

      <TaskButton taskState="done">Saved</TaskButton>

      <Spacer/>

      <TaskButton appearance="danger" taskState="errored">Error, Try Again</TaskButton>
    </div>
  </div>
  <div className="dt-mb-4">
    <h4 className="dt-mb-2">A custom component in which the action on click succeeds in some time.</h4>
    <ExampleTaskButtonComp shouldFail={false} />
  </div>
  <div className="dt-mb-4">
    <h4 className="dt-mb-2">A custom component in which the action on click fails in some time.</h4>
    <ExampleTaskButtonComp shouldFail={true} />
  </div>
  <div className="dt-mb-4">
    <h4 className="dt-mb-2">If you don't want to show the danger button on error you can pass the appearance prop.</h4>
    <ExampleTaskButtonComp appearance="primary" shouldFail={true} />
  </div>
</section>
```
