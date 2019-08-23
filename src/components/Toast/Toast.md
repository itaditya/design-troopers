### Basic Usage

Render toast anywhere.

```html
<Toast name="example-error-toast">
  <div>I am an error toast</div>
</Toast>
```

Show toast with

```js static
const rootContext = useRootContext();

rootContext.toastTrigger('example-success-toast')
```

### Toast example:

```js noeditor
import { InlineCode } from '../../docs/doc_components';

import { useRootContext } from '../../rootContext';
import { BodyPortal } from '../MotherShip';

<div className="dt-mt-5">
  <BodyPortal />
  <h4 className="dt-leading-loose">
    <strong className="dt-text-bold">Note:</strong> For demo purpose 
    <InlineCode text="<BodyPortal />" /> 
    is rendered here. In real app it should be rendered as immediate child of
    <InlineCode text="<body>" />
  </h4>
</div>
```


```js
import { Spacer } from '../../docs/doc_components';

import { useRootContext } from '../../rootContext';
import { PrimaryButton, DangerButton } from '../Buttons';

function ExampleComponent() {
  const rootContext = useRootContext();

  return (
    <div>
      <PrimaryButton onClick={() => rootContext.toastTrigger('example-success-toast')}>Trigger Success Toast</PrimaryButton>
      <Toast name="example-success-toast" className="dt-bg-primary dt-text-white dt-my-5" closeBtnProps={{ className: 'dt-fill-current dt-text-white' }}>
        <div>I am a success toast</div>
      </Toast>

      <Spacer direction="vertical" />

      <DangerButton onClick={() => rootContext.toastTrigger('example-error-toast')}>Trigger Error Toast</DangerButton>
      <Toast name="example-error-toast" className="dt-bg-error dt-text-white dt-my-5" closeBtnProps={{ className: 'dt-fill-current dt-text-white' }}>
        <div>I am an error toast</div>
      </Toast>
    </div>
  );
}

<div>
  <ExampleComponent />
</div>
```
