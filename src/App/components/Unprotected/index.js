import React, { useContext } from 'react';
import { Redirect } from '@reach/router';

import { AuthContext } from '../../../Common/contexts';

export const unProtectedComponent = Component => props => {
  const { authToken, isAuthenticated } = useContext(AuthContext);

  if (authToken && isAuthenticated)
    return <Redirect from="login" to="/" noThrow />;
  return <Component {...props} />;
};
