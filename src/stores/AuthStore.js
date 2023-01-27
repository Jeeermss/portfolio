import { makeObservable, observable, action } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

export class AuthStore {
  constructor() {
    makeObservable(this, {
      isAuthenticated: observable,
      isPublicUrl: observable,

      setIsAuthenticated: action,
      setIsPublicUrl: action,
    });

    makePersistable(this, {
      name: 'AuthStore',
      properties: ['isAuthenticated', 'isPublicUrl'],
      storage: localStorage,
    });
  }

  isAuthenticated = false;
  isPublicUrl = true;

  setIsAuthenticated(authenticated) {
    this.isAuthenticated = authenticated;
  }
  setIsPublicUrl(isPublic) {
    this.isPublicUrl = isPublic;
  }
}
