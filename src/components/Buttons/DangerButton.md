Primary Button

```js
import { Spacer } from '../../docs/doc_components';

import CrossSvg from '../../icons/ic_close_24px.svg';

<div>
  <DangerButton>
    Cancel Order
  </DangerButton>

  <Spacer />

  <DangerButton variant="ghost">
    Disable
  </DangerButton>

  <Spacer />

  <DangerButton size="lg">
    Big Danger Button
  </DangerButton>

  <Spacer direction="vertical" />

  <Spacer />

  <DangerButton>
    <CrossSvg className="dt-fill-current dt-text-white dt-mr-2" />
    Close this
  </DangerButton>
</div>
```
