import { createContext, useContext } from 'react';

const RootContext = createContext({});
RootContext.displayName = 'DTRootContext';

const RootContextProvider = RootContext.Provider;
const RootContextConsumer = RootContext.Consumer;

function useRootContext() {
  const rootContext = useContext(RootContext);

  if(!rootContext) {
    throw new Error('it should be used in a component nested inside RootContext.Provider');
  }

  return rootContext;
}

export { RootContext, RootContextProvider, RootContextConsumer, useRootContext };
