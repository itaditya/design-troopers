### Basic Usage

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

<section id="example-clickable-button">
  <Example />
</section>
```

```jsx static
<Button onClick={handleClick} appearance="primary">
  Click Me
</Button>
```

### Button base

The Default Button serve as a base for other buttons. Do not use it directly.
```js
import { Spacer } from '../../docs/doc_components';

<section id="example-default-buttons">
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

<section>
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
import { Spacer } from '../../docs/doc_components';

import IcSearch from 'material-svg-react-icons/dist/IcSearch';
import IcClose from 'material-svg-react-icons/dist/IcClose';
import IcExtension from 'material-svg-react-icons/dist/IcExtension';

<section>
  <div>
    <h4>Icon Button</h4>
    <div className="dt-flex dt-items-center">
      <Button variant="icon">
        <IcSearch />
      </Button>

      <Spacer />

      <Button variant="icon">
        <IcExtension />
      </Button>

      <Spacer />

      <Button variant="icon" size="lg">
        <IcClose />
      </Button>
    </div>
  </div>

  <Spacer />

  <div>
    <h4 className="dt-mb-2">Ghost Button</h4>
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

### TaskButton

```js
import { Spacer } from '../../docs/doc_components';

import { TaskButton } from './Button.js';

<section>
  <h4 className="dt-mb-2">TaskButton can be used when a small task runs</h4>
  <div className="dt-flex dt-items-center">
    <TaskButton>Save Code</TaskButton>

    <Spacer/>

    <TaskButton taskState="loading">Saving...</TaskButton>

    <Spacer/>

    <TaskButton taskState="done">Saved</TaskButton>

    <Spacer/>

    <TaskButton appearance="danger" taskState="errored">Error, Try Again</TaskButton>
  </div>
</section>
```
