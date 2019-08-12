### Button example:

Default Button

```js
import { Spacer } from '../../docs/doc_components';

import CrossSvg from '../../icons/ic_close_24px.svg';

<div>
  <Button>
    Click Me
  </Button>

  <Spacer />

  <Button variant="ghost">
    Cancel
  </Button>

  <Spacer />

  <Button size="lg">
    Big Button
  </Button>

  <Spacer direction="vertical" />

  <p>Icon Button</p>
  <Button variant="icon" className="dt-text-gray-700 dt-fill-current">
    <CrossSvg />
  </Button>
</div>
```
