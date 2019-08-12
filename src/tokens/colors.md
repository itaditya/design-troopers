
### Usage

```js
import { InlineCode } from '../docs/doc_components';

<div>
  <div className="dt-text-primary">
    <p className="dt-py-4 dt-pl-2"><InlineCode text=".dt-text-primary" />to change text color to primary</p>
  </div>
  <div className="dt-bg-gray-900">
    <p className="dt-py-4 dt-pl-2 dt-text-white"><InlineCode text=".dt-bg-gray-900" /> to make background color to dark gray shade</p>
  </div>
</div>
```

### Colors Chart

```js
import { ColorChart } from '../docs/doc_components';
const tokens = require('../../tokens.json');

console.log(tokens);

const { colors } = tokens;

<ColorChart colors={colors} />
```
