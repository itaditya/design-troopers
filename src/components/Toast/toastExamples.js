import React from 'react';

import { useRootContext } from '../../rootContext';
import { Button } from '../Button';
import { Toast } from './Toast.js';

export function ExampleComponent() {
  const rootContext = useRootContext();

  return (
    <div>
      <Button appearance="primary" onClick={() => rootContext.toastTrigger('example-success-toast')}>Trigger Success Toast</Button>
      <Toast name="example-success-toast" className="dt-bg-primary dt-text-white dt-my-5" closeBtnProps={{ className: 'dt-fill-current dt-text-white' }}>
        <div>I am a success toast</div>
      </Toast>

      <Button appearance="danger" onClick={() => rootContext.toastTrigger('example-error-toast')}>Trigger Error Toast</Button>
      <Toast name="example-error-toast" className="dt-bg-error dt-text-white dt-my-5" closeBtnProps={{ className: 'dt-fill-current dt-text-white' }}>
        <div>I am an error toast</div>
      </Toast>
    </div>
  );
}
