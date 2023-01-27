import { createContext } from 'react';

import { AuthStore } from './AuthStore';

export class RootStore {
  authStore = new AuthStore();
}

export const rootStore = new RootStore();

export const RootStoreContext = createContext(rootStore);
