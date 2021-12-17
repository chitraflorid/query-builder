import { createContext } from 'react';

const queryContext = createContext([{}, () => {}]);

export { queryContext as QueryContext};
