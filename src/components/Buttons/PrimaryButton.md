Primary Button

```js
import { useState } from 'react';
import { Spacer } from '../../docs/doc_components';

import SearchSvg from '../../icons/ic_search_24px.svg';

function Example() {
  const [clicks, setClicks] = useState(0);

  function incrementClicks() {
    setClicks((clicks) => clicks += 1);
  }

  function resetClicks() {
    setClicks(0);
  }

  return (
    <div>
      <p>{clicks} clicks so far.</p>

      <Spacer />

      <PrimaryButton onClick={incrementClicks}>
        Submit
      </PrimaryButton>

      <Spacer />

      <PrimaryButton size="lg" onClick={incrementClicks}>
        Big Primary Button
      </PrimaryButton>

      <Spacer direction="vertical" />

      <PrimaryButton onClick={incrementClicks}>
        <SearchSvg className="dt-fill-current dt-text-white dt-mr-2" />
        Search
      </PrimaryButton>

      <Spacer />

      <PrimaryButton variant="ghost" onClick={resetClicks}>
        Reset Clicks
      </PrimaryButton>
    </div>
  );
}

<Example />
```
