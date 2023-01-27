import React from 'react';
import { observer } from 'mobx-react';

import useStore from '../hooks/useStore';

import PasswordProtected from './PasswordProtected/PasswordProtected';

const ProtectedRoute = ({ children }) => {
  const { authStore } = useStore();

  if (!authStore.isAuthenticated) {
    return <PasswordProtected />;
  }

  return children;
};

export default observer(ProtectedRoute);
