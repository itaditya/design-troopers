### Banner example:

```js
import { Button } from '../Buttons';

<section>
  <p>Normal Banner</p>

  <Banner
    actionBtn={<Button appearance="primary" children={<span>View Profile</span>} />}
    className="dt-text-white"
    style={{ backgroundColor: 'black' }}
  >
    <h3 className="dt-text-3xl">
      Checkout the Independence Sale
    </h3>
    <p>Flat 40% off</p>
  </Banner>
</section>
```
